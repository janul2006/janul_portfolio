import "./globals.css";

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
    <html lang="en">
      <body className="bg-[#0A0A0A] text-white">{children}</body>
    </html>
  );
}