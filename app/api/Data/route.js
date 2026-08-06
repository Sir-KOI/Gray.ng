await db.query('INSERT INTO transactions (email, type, detail, amount, status) VALUES (?,?,?)', 
    [email, 'Data', `${network} ${plan}`, amt, 'Success']);

return NextResponse.json({ success: true, message: 'Data Sent!', newBalance });
