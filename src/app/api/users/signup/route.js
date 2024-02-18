import { DbConnected } from '../../../../utils/db';
import User from '@/models/user';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

DbConnected();

export async function POST(request) {
    try {
        const requestData = await request.json(); // Parse the JSON data from the request
        const { fullName, email, password } = requestData; // Destructure the parsed data

        if (!fullName || !email || !password) {
            return NextResponse.json({
                message: "Please provide all the required fields",
                status: 400
            });
        }

        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({
                message: "User already exists",
                status: 400
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const userDetails = await User.create({
            fullName,
            email,
            password: hashedPassword
        });

        return NextResponse.json({
            message: "User created successfully",
            status: 200,
            user: userDetails
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Something went wrong",
            status: 500
        });
    }
}
