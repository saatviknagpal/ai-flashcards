import { NextResponse } from "next/server";
import OpenAI from "openai";
import { getDownloadURL, ref } from "firebase/storage";
import { firestore, storage } from "@/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import fs from "fs";
import path from "path";
import os from "os";
import md5 from "md5";

export async function POST(req) {
  const systemPrompt = `
You are a flashcard creator. Take the provided text and create exactly 10 flashcards from it. Each flashcard should have a front and a back, both being one sentence long. 
Return the flashcards in the following JSON format:
{
  "flashcards":[
    {
      "front": "Front of the card",
      "back": "Back of the card"
    }
  ]
}
`;

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const { fileURL } = await req.json();
  console.log("Received file URL:", fileURL);

  if (!fileURL) {
    return NextResponse.json(
      { error: "File URL is required" },
      { status: 400 }
    );
  }

  try {
    const storageRef = ref(storage, fileURL);
    const url = await getDownloadURL(storageRef);
    const response = await fetch(url);

    if (!response.ok) {
      console.error("Failed to fetch the file:", response.statusText);
      return NextResponse.json(
        { error: "Failed to fetch the file" },
        { status: response.status }
      );
    }

    const arrayBuffer = await response.arrayBuffer();
    const tempDir = os.tmpdir();
    const tempFilePath = path.join(tempDir, `${md5(fileURL)}.pdf`);
    fs.writeFileSync(tempFilePath, Buffer.from(arrayBuffer));

    const loader = new PDFLoader(tempFilePath);
    const docs = await loader.load();

    const text = docs.map((doc) => doc.pageContent).join("\n");

    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: text },
      ],
      model: "gpt-4o-mini",
    });

    let responseText = completion.choices[0].message.content;

    responseText = responseText
      .replace(/```/g, "")
      .replace(/^json\s*/, "")
      .trim();

    let flashcards;
    try {
      flashcards = JSON.parse(responseText).flashcards;
    } catch (parseError) {
      console.error("Failed to parse OpenAI response as JSON:", parseError);
      return NextResponse.json(
        { error: "Failed to parse OpenAI response as JSON" },
        { status: 500 }
      );
    }

    const flashcardsCollection = collection(firestore, "flashcards");
    const docRef = doc(flashcardsCollection, md5(fileURL));
    await setDoc(docRef, { flashcards });

    fs.unlinkSync(tempFilePath);

    return NextResponse.json({ flashcardsId: docRef.id, flashcards });
  } catch (error) {
    console.error("Error generating flashcards:", error);
    return NextResponse.json(
      { error: "Error generating flashcards" },
      { status: 500 }
    );
  }
}
