"use client";

import { useState } from "react";

const Header = ({ title, desc }: { title: string; desc: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <header className="flex flex-col items-center justify-center gap-10">
      <h1 className="text-zinc-800 text-5xl font-bold">{title}</h1>
      <p
        className={`text-gray-500 text-2xl text-center  ${
          isExpanded ? "" : "line-clamp-3 sm:line-clamp-none"
        }`}
      >
        {desc}
      </p>
      {!isExpanded && (
        <button
          type="button"
          className="text-blue-500 underline sm:hidden"
          onClick={toggleExpand}
        >
          Read More
        </button>
      )}
      {isExpanded && (
        <button
          type="button"
          className="text-blue-500 underline sm:hidden"
          onClick={toggleExpand}
        >
          Show Less
        </button>
      )}
    </header>
  );
};

export default Header;
