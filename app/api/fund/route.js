import { NextResponse } from 'next/server';
const db = require('../../../lib/db');

export async function POST(request) {
  try {
    const { email, amount } = await request.json();
    
    if (!email || !amount) {
      return NextResponse.json({ error: 'Email and amount required' }, { status: 400 });
    }
    
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    const newBalance = user.balance + amount;
    db.prepare('UPDATE users SET balance = ? WHERE email = ?').run(newBalance, email);
    
    return NextResponse.json({ success: true, message: 'Account funded', newBalance }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
