import React from "react";
import DarkModeToggle from "./dark-mode-toggle";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <DarkModeToggle />
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Navbar;
