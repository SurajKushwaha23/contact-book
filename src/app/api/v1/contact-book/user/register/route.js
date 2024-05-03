import { NextRequest, NextResponse } from "next/server";
import connect from "@/dbConfig/dbConfig";
import User from "@/models/user";
import bcrypt from "bcryptjs";

await connect();

export async function POST(request) {
  // Defines an asynchronous POST request handler.
  try {
    const reqBody = await request.json();
    const { fullname, email, password } = reqBody;
    // Parses the request body to extract fullname, email, and password.

    //Checks if a user with the provided email already exists.
    const user = await User.findOne({ email });
    //If yes, returns a 400 response.
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    //hash password using bcryptjs.
    const saltRounds = 10;
    const salt = await bcrypt.genSaltSync(saltRounds);
    const cryptPassword = await bcrypt.hash(password, salt);

    const createdUser = new User({
      fullname,
      email,
      password: cryptPassword,
    });
    // Saves the new user to the database.
    const userSave = await createdUser.save();

    if (userSave) {
      return NextResponse.json({
        message: "User created successfully",
        success: true,
        userSave,
      });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
