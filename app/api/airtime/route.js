import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("BODY RECEIVED:", body);

    const { email, network, phone, amount } = body;

    if (!email ||!network ||!phone ||!amount) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // 1. Check user balance
    const [users] = await db.query("SELECT * FROM users WHERE email =?", [email]);
    if (users.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const user = users[0];
    if (user.balance < amount) {
      return NextResponse.json({ error: "Insufficient Balance" }, { status: 400 });
    }

    // 2. Deduct balance
    const newBalance = user.balance - amount;
    await db.query("UPDATE users SET balance =? WHERE email =?", [newBalance, email]);

    // 3. Save transaction to history
    await db.query(
      "INSERT INTO transactions (email, type, network, phone, amount, status) VALUES (?,?,?,?,?)",
      [email, 'airtime', network, phone, amount, 'success']
    );

    // 4. Return success
    return NextResponse.json({ 
      success: true, 
      message: "Airtime sent successfully",
      newBalance: newBalance,
      detail: `${network} ${amount} to ${phone}`
    });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server Error: " + err.message }, { status: 500 });
  }
}
