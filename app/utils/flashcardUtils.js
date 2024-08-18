import { auth } from "@clerk/nextjs";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "@/firebase";
import { toast } from "react-hot-toast";

export async function handleSaveFlashcards(flashcardsId) {
  const { userId } = auth();
  if (userId) {
    const userRef = doc(firestore, "users", userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userFlashcards = userSnap.data().flashcards || [];
      await setDoc(
        userRef,
        { flashcards: [...userFlashcards, flashcardsId] },
        { merge: true }
      );
    } else {
      await setDoc(userRef, { flashcards: [flashcardsId] });
    }
    toast.success("Flashcards saved to your account");
  } else {
    toast.error("You must be logged in to save flashcards");
  }
}
