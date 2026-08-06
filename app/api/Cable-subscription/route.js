import { NextResponse } from 'next/server'
import mysql from 'mysql2/promise'

// Create DB connection using your Vercel Env Variables
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

export async function POST(req) {
  try {
    const { email, network, smartcard, amt } = await req.json()

    await db.query(
      `INSERT INTO transactions (email, type, detail, amount, status) VALUES (?, ?, ?, ?, ?)`,
      [email, 'TV', `${network} ${smartcard}`, amt, 'Success']
    )

    return NextResponse.json({ 
      success: true, 
      message: 'TV Cable Subscription Successful' 
    })

  } catch (error) {
    console.error(error)
    return NextResponse.json({ 
      success: false, 
      message: 'Subscription failed', 
      error: error.message 
    }, { status: 500 })
  }
}
