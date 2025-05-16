import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "EmpowerCare Consulting",
  description: "Consulting and education services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "1rem", background: "#f4f4f4" }}>
          <nav>
            <Link href="/" style={{ marginRight: "1rem" }}>Home</Link>
            <Link href="/about" style={{ marginRight: "1rem" }}>About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main style={{ minHeight: "60vh", padding: "2rem 1rem" }}>
          {children}
        </main>
        <footer style={{ padding: "1rem", background: "#f4f4f4", textAlign: "center" }}>
          <small>&copy; {new Date().getFullYear()} EmpowerCare Consulting. All rights reserved.</small>
        </footer>
      </body>
    </html>
  );
}