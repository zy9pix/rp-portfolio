import "./globals.css";
import type { Metadata } from "next";
import { PokedexWidget } from "@/components/pokedex-widget";

export const metadata: Metadata = {
    title: "Oliver Reaves | Atölye",
    description: "Bağımsız Geliştirici Portföyü",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="tr">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
            </head>
            <body className="antialiased min-h-screen selection:bg-[#ff4d4d] selection:text-white">
                {children}
                <PokedexWidget />
            </body>
        </html>
    );
}
