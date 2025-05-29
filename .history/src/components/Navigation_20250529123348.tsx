import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <Link href="/" style={{ marginRight: "1.5rem" }} >Home</Link>
      <Link href="/about"style={{ marginRight: "1.5rem" }} >About</Link>
      <Link href="/contact" style={{ marginRight: "1.5rem" }} >Contact</Link>
      <Link href="/services" style={{ marginRight: "1.5rem" }} >Services</Link>
    </nav>
  );
}