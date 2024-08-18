"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, collection, addDoc } from "firebase/firestore";
import { useAuth } from "@clerk/nextjs"; // Assuming you're using Clerk for authentication
import { firestore } from "@/firebase";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"; // Import the Input component from ShadCN

export default function FlashcardsPage({ params }) {
  const { id } = params;
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flashcardName, setFlashcardName] = useState("");
  const { userId } = useAuth();

  useEffect(() => {
    if (id) {
      const fetchFlashcards = async () => {
        try {
          const docRef = doc(firestore, "flashcards", id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setFlashcards(docSnap.data().flashcards);
          } else {
            toast.error("No flashcards found");
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
  }, [id]);

  const handleSaveFlashcards = async () => {
    if (!flashcardName) {
      toast.error("Please provide a name for your flashcards");
      return;
    }

    try {
      const userFlashcardsRef = collection(
        firestore,
        "users",
        userId,
        "savedFlashcards"
      );
      await addDoc(userFlashcardsRef, {
        name: flashcardName,
        flashcards,
        createdAt: new Date(),
      });
      toast.success("Flashcards saved successfully!");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving flashcards:", error);
      toast.error("Error saving flashcards");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <h1 className="py-5 text-2xl font-bold mb-4">
        Your Generated Flashcards
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {flashcards.map((flashcard, index) => (
          <FlipCard key={index} front={flashcard.front} back={flashcard.back} />
        ))}
      </div>
      <Button className="mt-6" onClick={() => setIsModalOpen(true)}>
        Save Flashcards
      </Button>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Save Flashcards</DialogTitle>
          </DialogHeader>
          <div>
            <label
              htmlFor="flashcard-name"
              className="block text-sm font-medium text-gray-700"
            >
              Flashcards Name
            </label>
            <Input
              id="flashcard-name"
              placeholder="Enter a name for your flashcards"
              value={flashcardName}
              onChange={(e) => setFlashcardName(e.target.value)}
              className="mt-2"
            />
          </div>
          <Button className="mt-4" onClick={handleSaveFlashcards}>
            Save
          </Button>
        </DialogContent>
      </Dialog>
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
