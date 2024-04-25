import mongoose from "mongoose";

const userSchema = new mongoose.Schema({}, { timestamps: true });

const users = mongoose.model.users || mongoose.model("users", userSchema);

export default users;
