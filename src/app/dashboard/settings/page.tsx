import React from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { Layers, Activity, Users, BarChart2 } from "lucide-react";
import { headers } from "next/headers";

export function Settings() {
  const user = auth();
  headers();

  if (!user.userId) {
    redirect("/");
  }

  return redirect("/dashboard/data");
}
export default Settings;
