import Link from "next/link";

export default function Navigation() {
  return (
    <nav style={{ marginTop: "1rem" }}>
      <Link href="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link href="/about" style={{ marginRight: "1rem" }}>About</Link>
      <Link href="/contact">Contact</Link>
      
    </nav>
  );
}