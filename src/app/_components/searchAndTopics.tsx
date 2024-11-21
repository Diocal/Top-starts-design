"use client";

import React from "react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import Link from "next/link";

interface SearchAndTopicsProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchAndTopics: React.FC<SearchAndTopicsProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="my-4 flex items-center space-x-2 px-4">
      
      {/* Search Input */}
      <div className="relative flex-1">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 transform">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white opacity-75"
          >
            <path
              d="M15.7559 14.2559H14.9659L14.6859 13.9859C15.6659 12.8459 16.2559 11.3659 16.2559 9.75586C16.2559 6.16586 13.3459 3.25586 9.75586 3.25586C6.16586 3.25586 3.25586 6.16586 3.25586 9.75586C3.25586 13.3459 6.16586 16.2559 9.75586 16.2559C11.3659 16.2559 12.8459 15.6659 13.9859 14.6859L14.2559 14.9659V15.7559L19.2559 20.7459L20.7459 19.2559L15.7559 14.2559ZM9.75586 14.2559C7.26586 14.2559 5.25586 12.2459 5.25586 9.75586C5.25586 7.26586 7.26586 5.25586 9.75586 5.25586C12.2459 5.25586 14.25586 7.26586 14.25586 9.75586C14.25586 12.2459 12.24586 14.2559 9.75586 14.2559Z"
              fill="white"
            />
          </svg>
        </span>
        <Input
          type="text"
          placeholder="Search..."
          className="h-12 flex-1 rounded-md bg-[hsl(var(--tab-bg-inactive))] pl-10 text-white focus:outline-none focus:ring-0 border-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Topics Button */}
      <Link href="/channel/topic">
      <Button
        variant="default"
        className="h-12 whitespace-nowrap rounded-md bg-[hsl(var(--tab-bg-inactive))] text-white"
      >
        Topics 💡
      </Button>
      </Link>
    </div>
  

  );
  
};

export default SearchAndTopics;
