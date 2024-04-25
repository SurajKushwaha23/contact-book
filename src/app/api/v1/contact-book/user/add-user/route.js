import { NextRequest, NextResponse } from "next/server";
import connect from "@/dbConfig/dbConfig";

connect();

export async function POST(request) {
  return NextResponse.json({ message: "Post call for contact", success: true });
}
