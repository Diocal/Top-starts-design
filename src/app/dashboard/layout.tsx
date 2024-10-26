"use client";

import { Button } from "~/components/ui/button";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Layers,
  Activity,
  Users,
  BarChart2,
  Settings,
  ChartColumnBig,
  MessagesSquare,
  Save,
} from "lucide-react";

type SidebarItem = {
  icon: React.ElementType;
  label: string;
  path: string;
};

const sidebarItems: SidebarItem[] = [
  { icon: Save, label: "My Datasets", path: "mydatasets" },
  { icon: Activity, label: "Analysis", path: "analysis" },
  { icon: Users, label: "Team", path: "team" },
  { icon: MessagesSquare, label: "Feedback", path: "feedback" },
  { icon: Settings, label: "Settings", path: "settings" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(`/dashboard/${path}`);
  };

  return (
    <div className="flex">
      <div className="h-full min-h-screen w-64 bg-blue-950 p-4 text-white">
        <nav className="space-y-2">
          <Button
            key="Data"
            variant={pathname === `/dashboard/data` ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => handleNavigation("data")}
          >
            <Layers className="mr-2 h-4 w-4" />
            Data
          </Button>

          {sidebarItems.map((item) => (
            <Button
              key={item.label}
              variant={
                pathname === `/dashboard/${item.path}` ? "secondary" : "ghost"
              }
              className="w-full justify-start"
              onClick={() => handleNavigation(item.path)}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </nav>
      </div>
      <div className="flex-grow p-6">{children}</div>
    </div>
  );
}
