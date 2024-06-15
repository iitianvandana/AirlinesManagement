import { connectDb } from "@/lib/mongoose";
import User from "@/models/userDetails";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export async function POST(req) {
    try {
        const {name, email, phone, password} = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);
        await connectDb();
        await User.create({name, email, phone, password: hashedPassword});

        return NextResponse.json({message:"User Registered"}, {status: 201});
    } catch (error) {
        return NextResponse.json(
            {message: error},
            {status: 500}
        )
    }
}