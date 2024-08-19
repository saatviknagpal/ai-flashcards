import React from "react";
import DarkModeToggle from "./dark-mode-toggle";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react"; // Import the Home icon from lucide-react

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Home className="w-6 h-6 cursor-pointer" />
        </Link>
        <DarkModeToggle />
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/saved-flashcards">
          <Button variant="outline">Saved Flashcards</Button>
        </Link>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
