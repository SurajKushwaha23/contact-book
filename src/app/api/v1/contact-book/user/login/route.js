import connect from "@/dbConfig/dbConfig";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
connect();
// Calls the connect function to establish a connection to the database.
export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    if (!email || !password) {
      return NextResponse.json({
        error: "All fields are mandatory",
      });
    }
    //check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({
        error: "User does not exist",
        success: false,
      });
    }
    //check if password is correct
    const validPassword = await bcrypt.compare(password, user.password);
    console.log("bcrypt", validPassword);
    if (!validPassword) {
      return NextResponse.json({ error: "Invlid password" }, { status: 400 });
    }

    //create token data
    // A JavaScript object (tokenData) is created to store essential user
    // information. In this case, it includes the user's unique identifier (id),
    // username, and email.

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    // Create a token with expiration of 1 day

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });
    // Create a JSON response indicating successful login
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });
    // Set the token as an HTTP-only cookie
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
