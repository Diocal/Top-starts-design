"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { SignedOut } from "@clerk/nextjs";

interface TabComponentProps {
  global: boolean;
  setGlobal: (value: boolean) => void;
}

const TabComponent: React.FC<TabComponentProps> = ({ global, setGlobal }) => {
  return (
    <div className="flex-1 overflow-auto px-4 mt-6 ">
      <div className="flex-1 ">
        <SignedOut>
          <Tabs
            defaultValue={global ? "global" : "local"}
            onValueChange={(value) => setGlobal(value === "global")}
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
