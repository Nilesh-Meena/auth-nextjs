import mongoose from "mongoose";

const schema = new mongoose.Schema({});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
