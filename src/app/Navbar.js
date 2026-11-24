import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" style={{ fontWeight: "bold", fontSize: "18px" }}>
        TaskApp
      </Link>

      <div className="nav-links">
        <Link href="/">Tasks</Link>
        <Link href="/about">About</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}