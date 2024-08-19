"use client";

import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Inbox, Loader2 } from "lucide-react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase";

const FileUpload = () => {
  const router = useRouter();
  const [uploading, setUploading] = useState(false);

  const mutation = useMutation({
    mutationFn: async (fileURL) => {
      console.log("Sending file URL to API:", fileURL);
      setUploading(true);
      const response = await axios.post("/api/generate-flashcards", {
        fileURL,
      });
      console.log("API response received:", response);
      return response.data;
    },
    onSuccess: (data) => {
      console.log("Flashcards generated successfully:", data.flashcards);
      toast.success("Flashcards generated!");
      router.push(`/${data.flashcardsId}`);
    },
    onError: (error) => {
      console.error("Error generating flashcards:", error);
      toast.error("Error generating flashcards");
    },
    onSettled: () => {
      setUploading(false);
    },
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      console.log("File accepted:", file);

      if (file.size > 10 * 1024 * 1024) {
        toast.error("File too large");
        return;
      }

      try {
        setUploading(true);
        console.log("Uploading file to Firebase...");
        const storageRef = ref(storage, `pdfs/${file.name}`);
        const snapshot = await uploadBytes(storageRef, file);
        console.log("File uploaded to Firebase:", snapshot);

        const downloadURL = await getDownloadURL(snapshot.ref);
        console.log("Download URL obtained:", downloadURL);

        mutation.mutate(downloadURL);
      } catch (error) {
        console.error("Error uploading file:", error);
        toast.error("Error uploading file");
      }
    },
  });

  return (
    <div className="p-2 bg-white rounded-xl">
      <div
        {...getRootProps({
          className:
            "border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col",
        })}
      >
        <input {...getInputProps()} />
        {uploading || mutation.isLoading ? (
          <Loader2 className="h-10 w-10 text-blue-500 animate-spin" />
        ) : (
          <>
            <Inbox className="h-12 w-12 text-gray-500" />
            <p className="text-gray-500 p-3">
              Drag and drop a PDF file here, or click to select one
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
