import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function POST(request) {
  try {
    const body = await request.json()
    const { email, network, smartcard, amount } = body

    // Example DB insert - change this to match your schema
    const subscription = await db.subscription.create({
      data: {
        email,
        type: 'TV',
        detail: `${network} ${smartcard}`,
        amount,
        status: 'Success'
      }
    })

    return NextResponse.json({ success: true, data: subscription })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
