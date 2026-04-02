import "./globals.css";
import ClickEffect from "@/components/ClickEffect";

export const metadata = {
  title: "Janul Induwara Portfolio",
  description: "ML Engineer & Fullstack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0A0A0A] text-white overflow-x-hidden"><ClickEffect />{children}</body>
    </html>
  );
}