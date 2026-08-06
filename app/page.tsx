import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>Welcome to Gray.ng</h1>

      <p>Buy Airtime, Data, Cable TV and more.</p>

      <div style={{ marginTop: "20px" }}>
        <Link href="/login">
          <button>Login</button>
        </Link>

        <span style={{ margin: "10px" }}></span>

        <Link href="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </main>
  );
}
