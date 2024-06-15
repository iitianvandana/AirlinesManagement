import Booking from "@/models/booking";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { from, to, departureDate, returnDate, classes, bookingDate, mobile, email } = await req.json();
        await connectDb();
        await Booking.create({ from, to, departureDate, returnDate, classes, bookingDate, mobile, email, user })
        return NextResponse.json({ message: "Your Flight is Booked" }, { status: 201 })
    } catch (error) {
        return NextResponse.json(
            {message: "An error has occuring while booking the flight"},
            {status: 500}
        )
    }
}