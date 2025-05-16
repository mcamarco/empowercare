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