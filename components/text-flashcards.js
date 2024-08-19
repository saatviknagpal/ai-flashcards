"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function TextFlashcardGenerator() {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const generateFlashcards = async () => {
    if (!inputText) {
      toast.error("Please enter some text.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("/api/generate-flashcards-from-text", {
        text: inputText,
      });
      setLoading(false);
      toast.success("Flashcards generated successfully!");
      router.push(`/${response.data.flashcardsId}`); // Redirect to the flashcards page
    } catch (error) {
      setLoading(false);
      toast.error("Error generating flashcards.");
      console.error("Error generating flashcards:", error);
    }
  };

  return (
    <div className="lg:w-[50%] mt-6">
      <textarea
        className="w-full p-4 border rounded-lg"
        placeholder="Enter your notes here... or write anything you want to convert into flashcards"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows={6}
      />
      <Button onClick={generateFlashcards} className="mt-4">
        {loading ? "Generating..." : "Generate Flashcards"}
      </Button>
    </div>
  );
}
