import connect from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helper/getDataFromToken";
import User from "@/models/user";
import { NextResponse } from "next/server";

await connect();
export async function GET(request) {
  try {
    const userId = await getDataFromToken(request);
    if (userId) {
      const user = await User.findOne({ _id: userId }).select("-password");
      const fullname = user.fullname;
      const email = user.email;
      return NextResponse.json({
        message: "User found successfully",
        fullname,
        email,
      });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
