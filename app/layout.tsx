import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";
import "./styles/base.css";
import "./styles/hero.css";
import "./styles/sections.css";
import "./styles/about.css";
import "./styles/instagram.css";
import "./styles/visit.css";
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

const publicSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://ritmo-e-melodia-bp.magaohehe.chatgpt.site";
const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Ritmo & Melodia | Instrumentos e Luthieria",
  description:
    "Instrumentos musicais novos e usados, acessórios e luthieria em Bragança Paulista.",
  metadataBase: new URL(publicSiteUrl),
  icons: {
    icon: {
      url: `${publicBasePath}/favicon.png`,
      type: "image/png",
    },
  },
  openGraph: {
    title: "Ritmo & Melodia",
    description:
      "Instrumentos, acessórios e luthieria: música que conecta em Bragança Paulista.",
    images: [
      {
        url: `${publicBasePath}/social-card-v2.png`,
        width: 1733,
        height: 909,
        alt: "Ritmo & Melodia — Música que conecta",
      },
    ],
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
