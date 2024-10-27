"use client";
import { useState } from "react";
import { Input } from "~/components/ui/input";
import { Checkbox } from "~/components/ui/checkbox";
import { Button } from "~/components/ui/button";

const languages = [
  { name: "Indonesian", flag: "🇮🇩" },
  { name: "Japanese", flag: "🇯🇵" },
  { name: "Korean", flag: "🇰🇷" },
  { name: "Chinese", flag: "🇨🇳" },
  { name: "Thai", flag: "🇹🇭" },
  { name: "Vietnamese", flag: "🇻🇳" },
  { name: "Tagalog", flag: "🇵🇭" },
  { name: "Melayu", flag: "🇲🇾" },
  { name: "English", flag: "🇺🇸" },
  { name: "Spanish", flag: "🇪🇸" },
  { name: "French", flag: "🇫🇷" },
  { name: "German", flag: "🇩🇪" },
  { name: "Italian", flag: "🇮🇹" },
  { name: "Portuguese", flag: "🇵🇹" },
  { name: "Dutch", flag: "🇳🇱" },
  { name: "Russian", flag: "🇷🇺" },
  { name: "Polish", flag: "🇵🇱" },
  { name: "Czech", flag: "🇨🇿" },
  { name: "Slovak", flag: "🇸🇰" },
  { name: "Hungarian", flag: "🇭🇺" },
  { name: "Romanian", flag: "🇷🇴" },
  { name: "Bulgarian", flag: "🇧🇬" },
  { name: "Greek", flag: "🇬🇷" },
  { name: "Turkish", flag: "🇹🇷" },
  { name: "Arabic", flag: "🇸🇦" },
  { name: "Hebrew", flag: "🇮🇱" },
  { name: "Persian", flag: "🇮🇷" },
  { name: "Urdu", flag: "🇵🇰" },
  { name: "Hindi", flag: "🇮🇳" },
  { name: "Bengali", flag: "🇧🇩" },
  { name: "Punjabi", flag: "🇮🇳" },
  { name: "Tamil", flag: "🇱🇰" },
  { name: "Telugu", flag: "🇮🇳" },
  { name: "Kannada", flag: "🇮🇳" },
  { name: "Malayalam", flag: "🇮🇳" },
  { name: "Marathi", flag: "🇮🇳" },
  { name: "Gujarati", flag: "🇮🇳" },
  { name: "Ukrainian", flag: "🇺🇦" },
  { name: "Serbian", flag: "🇷🇸" },
  { name: "Croatian", flag: "🇭🇷" },
  { name: "Finnish", flag: "🇫🇮" },
  { name: "Swedish", flag: "🇸🇪" },
  { name: "Norwegian", flag: "🇳🇴" },
  { name: "Danish", flag: "🇩🇰" },
  { name: "Icelandic", flag: "🇮🇸" },
  { name: "Swahili", flag: "🇰🇪" },
  { name: "Zulu", flag: "🇿🇦" },
  { name: "Afrikaans", flag: "🇿🇦" },
];

export default function Language() {
  const [search, setSearch] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const toggleLanguage = (language: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((lang) => lang !== language)
        : [...prev, language],
    );
  };

  return (
    <div className="max-h-screen bg-black">
      <div className="min-h-[calc(100vh - 20px)] flex flex-col items-center bg-gray-800 p-4 text-white">
        <div className="flex w-full max-w-md flex-1 flex-col">
          <div className="shacdn flex-1 overflow-y-auto">
            <Input
              type="text"
              placeholder="Search language..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-4 w-full rounded-md bg-gray-700 p-2 text-white"
            />
            {languages
              .filter((lang) =>
                lang.name.toLowerCase().includes(search.toLowerCase()),
              )
              .map((lang) => (
                <div
                  key={lang.name}
                  className="flex cursor-pointer items-center justify-between border-b border-gray-700 p-2"
                  onClick={() => toggleLanguage(lang.name)}
                >
                  <div className="flex items-center gap-2">
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </div>
                  <Checkbox
                    checked={selectedLanguages.includes(lang.name)}
                    className="form-checkbox"
                  />
                </div>
              ))}
          </div>
        </div>
        <Button
          className="mt-4 w-full rounded-md bg-blue-500 p-2 text-white"
          disabled={selectedLanguages.length === 0}
        >
          Apply language ({selectedLanguages.length})
        </Button>
      </div>
    </div>
  );
}
