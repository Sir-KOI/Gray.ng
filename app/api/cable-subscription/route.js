import { NextResponse } from 'next/server'

export async function POST(req) {
  return NextResponse.json({ 
    success: false, 
    message: 'cable subscription is temporarily under maintenance. Coming soon!' 
  }, { status: 503 })
}
