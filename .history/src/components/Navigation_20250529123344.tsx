import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <Link href="/" style={{ marginRight: "1.5rem" }} >Home</Link>
      <Link href="/about"style={{ marginRight: "1.5rem" }} >About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/services">Services</Link>
    </nav>
  );
}