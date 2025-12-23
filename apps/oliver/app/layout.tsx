import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { PokedexWidget } from "@/components/pokedex-widget";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
});

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
            <body className={`${inter.className} ${jetbrainsMono.variable} bg-black text-white antialiased selection:bg-[#ff4d4d] selection:text-black`}>
                {children}
                <PokedexWidget />
                <footer className="fixed bottom-2 right-2 opacity-20 hover:opacity-100 transition-opacity z-50">
                    <a href="/admin" className="font-mono text-[10px] text-[#ff4d4d]">[π]</a>
                </footer>
            </body>
        </html>
    );
}
