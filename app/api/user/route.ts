import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "", // your mysql password
  database: "grayng_db",
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json({ message: "Email required" }, { status: 400 });
  }

  try {
    const [rows]: any = await db.query("SELECT email, balance FROM users WHERE email =?", [email]);
    
    if (rows.length === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    
    return NextResponse.json({ user: rows[0] });
  } catch (error) {
    return NextResponse.json({ message: "Database error" }, { status: 500 });
  }
}
