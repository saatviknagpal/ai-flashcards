"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "@/firebase";
import { toast } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import { useAuth } from "@clerk/nextjs";

export default function FlashcardSetPage({ params }) {
  const { id } = params;
  const [flashcards, setFlashcards] = useState([]);
  const [flashcardName, setFlashcardName] = useState("");
  const [loading, setLoading] = useState(true);
  const { userId } = useAuth();

  useEffect(() => {
    if (id && userId) {
      const fetchFlashcards = async () => {
        try {
          const docRef = doc(firestore, `users/${userId}/savedFlashcards`, id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setFlashcards(docSnap.data().flashcards);
            setFlashcardName(docSnap.data().name);
          } else {
            toast.error("Flashcard set not found");
          }
        } catch (error) {
          console.error("Error fetching flashcards:", error);
          toast.error("Error fetching flashcards");
        } finally {
          setLoading(false);
        }
      };
      fetchFlashcards();
    }
  }, [id, userId]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <h1 className="py-5 text-2xl font-bold mb-4">
        {flashcardName} Flashcards
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {flashcards.map((flashcard, index) => (
          <FlipCard key={index} front={flashcard.front} back={flashcard.back} />
        ))}
      </div>
    </div>
  );
}

function FlipCard({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group perspective w-full h-64"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d transform text-center ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full bg-white dark:bg-gray-800 shadow-lg rounded-lg backface-hidden flex items-center justify-center">
          <p className="text-lg font-semibold dark:text-white p-5">{front}</p>
        </div>
        <div className="absolute w-full h-full bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg rotate-y-180 backface-hidden flex items-center justify-center">
          <p className="text-gray-700 dark:text-gray-300 p-5">{back}</p>
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}
