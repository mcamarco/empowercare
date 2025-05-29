import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header style={{ padding: "2rem 0", textAlign: "center", background: "#f9f9f9" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Image src="/logo.png" alt="Company Logo" width={60} height={60} />
      </div>
      <Navigation />
    </header>
  );
}