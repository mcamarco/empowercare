import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ padding: "2rem 0", textAlign: "center", background: "#ededed", marginTop: "2rem" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Image src="/logo.png" alt="Company Logo" width={40} height={40} />
        <p style={{ margin: "0.5rem 0 0.5rem 0" }}>EmpowerCare</p>
      </div>
      <small>&copy; {new Date().getFullYear()} EmpowerCare. All rights reserved.</small>
    </footer>
  );
}