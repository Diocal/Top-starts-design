
import 'server-only'

import { auth } from "@clerk/nextjs/server";
import { db } from "./db"; 

export async function getMyPosts(){
    const user = auth();
    
    if (!user.userId) throw new Error("Unauthorized");

      return "posts";
}