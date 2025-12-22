import "./globals.css";
import type { Metadata } from "next";
import { CommandPalette } from "@/components/command-palette";

export const metadata: Metadata = {
    title: "Hana Sterling | Sistemler",
    description: "Full Stack Mühendisi & Sistem Mimarı",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="tr">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
            </head>
            <body className="antialiased min-h-screen selection:bg-[#bd93f9] selection:text-black">
                <CommandPalette />
                {children}
            </body>
        </html>
    );
}
