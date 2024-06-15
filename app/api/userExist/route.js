import { connectDb } from "@/lib/mongoose";
import User from "@/models/userDetails";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        await connectDb();
        const { email }= await req.json();
        const user = await User.findOne({ email }).select("_id")
        console.log("user", user)
        return NextResponse.json({ user })
    } catch (error) {
        console.log(error)
    }
}