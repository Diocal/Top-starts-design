"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

interface TabComponentProps {
  global: boolean;
  setGlobal: (value: boolean) => void;
}

const TabComponent: React.FC<TabComponentProps> = ({ global, setGlobal }) => {
  const router = useRouter();

  const handleTabChange = (value: string) => {
    if (value === "local") {
      setGlobal(false); // Update state before navigation
      router.push("/channel/local"); // Ensure this matches your folder structure
    } else {
      setGlobal(true);
    }
  };

  return (
    <div className="flex-1 overflow-auto px-4 mt-6">
      <div className="flex-1">
        <SignedOut>
          <Tabs
            value={global ? "global" : "local"} // Ensure correct tab selection
            onValueChange={handleTabChange}
            className="mb-4"
          >
            <TabsList className="flex w-full overflow-hidden">
              <TabsTrigger value="global" className="flex-1 font-semibold">
                Global 🌍
              </TabsTrigger>
              <TabsTrigger
                value="local"
                className="flex flex-1 items-center font-semibold"
              >
                Local
                <img
                  src="/indonesia.png"
                  alt="Indonesia Flag"
                  className="ml-1 inline-block h-4 w-4"
                />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </SignedOut>
      </div>
    </div>
  );
};

export default TabComponent;
