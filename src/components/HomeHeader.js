import React from "react";
import Avatar from "react-avatar";
import { MdOutlineApps } from "react-icons/md";

function HomeHeader() {
  return (
    <header className="flex items-center space-x-5 justify-end p-3 text-sm">
      <a className="hover:underline" href={"https://mail.google.com/"}>
        Gmail
      </a>

      <a
        className="hover:underline"
        href={"https://www.google.com/imghp?hl=en&authuser=0&ogbl"}
      >
        Images
      </a>

      <MdOutlineApps className="h-6 w-6" />

      <button>
        <Avatar
          name="Chris Cutan"
          size="40"
          color="green"
          className="rounded-full"
        />
      </button>
    </header>
  );
}

export default HomeHeader;
