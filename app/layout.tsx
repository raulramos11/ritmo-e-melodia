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
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ritmoemelodia.com";
const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const socialImageUrl = `${new URL(publicSiteUrl).origin}${publicBasePath}/og.png`;

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
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "Ritmo & Melodia — Instrumentos, luthieria e Bragança Paulista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritmo & Melodia",
    description:
      "Instrumentos, acessórios e luthieria em Bragança Paulista.",
    images: [socialImageUrl],
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0c0a",
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
