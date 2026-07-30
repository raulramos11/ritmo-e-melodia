import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";
import "./styles/base.css";
import "./styles/hero.css";
import "./styles/sections.css";
import "./styles/footer.css";
import "./styles/responsive.css";

const display = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ritmo & Melodia | Instrumentos e Luthieria",
  description:
    "Instrumentos musicais novos e usados, acessórios e luthieria em Bragança Paulista.",
  metadataBase: new URL("https://ritmo-e-melodia-bp.chatgpt.site"),
  openGraph: {
    title: "Ritmo & Melodia",
    description: "Instrumentos, acessórios e luthieria em Bragança Paulista.",
    images: [{ url: "/social-card.png", width: 1733, height: 909 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
