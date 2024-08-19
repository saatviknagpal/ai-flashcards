"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, doc, query } from "firebase/firestore";
import { firestore } from "@/firebase";
import { useAuth } from "@clerk/nextjs";
import { toast } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function SavedFlashcardsPage() {
  const { userId } = useAuth();
  const [savedFlashcards, setSavedFlashcards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      const fetchSavedFlashcards = async () => {
        try {
          const userDocRef = doc(firestore, "users", userId);
          const savedFlashcardsCollection = collection(
            userDocRef,
            "savedFlashcards"
          );
          const flashcardsSnapshot = await getDocs(
            query(savedFlashcardsCollection)
          );
          const flashcardsData = flashcardsSnapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name, // Extract the name field
          }));
          setSavedFlashcards(flashcardsData);
        } catch (error) {
          console.error("Error fetching saved flashcards:", error);
          toast.error("Error fetching saved flashcards");
        } finally {
          setLoading(false);
        }
      };
      fetchSavedFlashcards();
    }
  }, [userId]);

  if (loading) return <p>Loading...</p>;

  if (savedFlashcards.length === 0) return <p>No saved flashcards found.</p>;

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <h1 className="py-5 text-2xl font-bold mb-4">Your Saved Flashcards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedFlashcards.map((flashcardSet) => (
          <Link
            key={flashcardSet.id}
            href={`/saved-flashcards/${flashcardSet.id}`}
          >
            <p className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-lg font-semibold text-center text-blue-500 dark:text-blue-400">
                {flashcardSet.name}
              </p>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
