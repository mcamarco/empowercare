import Link from "next/link";

export default function Navigation() {
  return (
    <nav style={{ marginTop: "1rem" }}>
      <Link href="/">Home</Link> <br></br>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/services">Services</Link>
    </nav>
  );
}