import { NextResponse } from "next/server";
import OpenAI from "openai";
import { collection, doc, setDoc } from "firebase/firestore";
import { firestore } from "@/firebase";
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

  const { text } = await req.json();
  console.log("Received text input:", text);

  if (!text) {
    return NextResponse.json(
      { error: "Text input is required" },
      { status: 400 }
    );
  }

  try {
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
    const docRef = doc(flashcardsCollection, md5(text));
    await setDoc(docRef, { flashcards });

    return NextResponse.json({ flashcardsId: docRef.id, flashcards });
  } catch (error) {
    console.error("Error generating flashcards:", error);
    return NextResponse.json(
      { error: "Error generating flashcards" },
      { status: 500 }
    );
  }
}
