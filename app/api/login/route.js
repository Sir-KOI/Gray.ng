import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Connect to DB
    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "", // change if you have mysql password
      database: "vtpass_db",
    });

    // Check if user exists
    const [rows] = await db.execute(
      "SELECT * FROM users WHERE email =?",
      [email]
    );

    if (rows.length === 0) {
      await db.end();
      return NextResponse.json({ message: "User not found" }, { status: 401 });
    }

    const user = rows[0];

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    await db.end();

    if (!isMatch) {
      return NextResponse.json({ message: "Invalid password" }, { status: 401 });
    }

    // SUCCESS - Send back balance too
    return NextResponse.json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        balance: user.balance // <-- NEW LINE ADDED
      }
    });

  } catch (error) {
    return NextResponse.json({ message: "Error: " + error.message }, { status: 500 });
  }
}
