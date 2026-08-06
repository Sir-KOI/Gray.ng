await db.query('INSERT INTO transactions (email, type, detail, amount, status) VALUES (?,?,?)', 
    [email, 'TV', `${network} ${smartcard}`, amt, 'Success']);

return NextResponse.json({ success: true, message: 'TV Cable Subscription Successful!', newBalance });
