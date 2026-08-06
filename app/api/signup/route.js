import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "vtpass_db",
    });

    const [existing] = await db.execute("SELECT * FROM users WHERE email =?", [email]);
    if (existing.length > 0) {
      await db.end();
      return NextResponse.json({ message: "Email already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.execute(
      "INSERT INTO users (name, email, password) VALUES (?,?,?)",
      [name, email, hashedPassword]
    );

    await db.end();
    return NextResponse.json({ message: "User created successfully" });

  } catch (error) {
    return NextResponse.json({ message: "Error: " + error.message }, { status: 500 });
  }
}
