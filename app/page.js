import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import DarkModeToggle from "@/components/dark-mode-toggle";
import FileUpload from "@/components/FileUpload";
import Navbar from "@/components/Navbar";

export default async function Home() {
  const { userId } = auth();
  const isAuth = !!userId;

  return (
    <div className="w-screen min-h-screen p-5">
      <Navbar />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">
              Generate Flashcards from Your PDF Notes
            </h1>
          </div>

          <p className="max-w-xl mt-1 text-lg text-slate-600">
            Upload PDF of your notes and create flashcards out of them.
          </p>

          {!userId && (
            <div className="w-full mt-4">
              <Link href="/sign-in">
                <Button>
                  Login to get Started!
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          )}

          {isAuth && (
            <div className="w-full mt-4">
              <FileUpload />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
