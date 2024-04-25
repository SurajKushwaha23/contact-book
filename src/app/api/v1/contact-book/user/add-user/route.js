import { NextRequest, NextResponse } from "next/server";
import connect from "@/dbConfig/dbConfig";
import User from "@/models/user";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    //check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({ error: "User already exists" });
    }

    const createdUser = new User({
      username,
      email,
      password,
    });

    const userSave = await createdUser.save();

    return NextResponse.json({
      message: "User created successfully.",
      success: true,
      userSave,
    });
  } catch (error) {}
}
