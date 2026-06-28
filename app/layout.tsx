import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FACEBOOK_LINK } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://armando98-crypto.github.io/Le-Chalet"),
  title: "Le Chalet | O Melhor Encontra-se Aqui — Lubango, Angola",
  description:
    "Restaurante, café e loja na Estrada da Tundavala. Queijos raclette, Gouda, enchidos e produtos artesanais da Queijaria Serra N'Tandavala a 1.985 m de altitude. Lubango, Viana e Luanda.",
  keywords: [
    "Le Chalet",
    "Le Chalet Lubango",
    "restaurante Lubango",
    "queijos artesanais Angola",
    "Serra N'Tandavala",
    "raclette Lubango",
    "Torres Dipanda",
    "lechaletlubango",
  ],
  authors: [{ name: "Le Chalet" }],
  openGraph: {
    title: "Le Chalet — O Sabor Autêntico de Angola",
    description:
      "Queijos artesanais da Serra N'Tandavala, raclette, tábuas de enchidos e gastronomia com vista na Tundavala. O melhor encontra-se aqui.",
    locale: "pt_AO",
    type: "website",
    siteName: "Le Chalet",
    url: FACEBOOK_LINK,
    images: [
      {
        url: "/images/hero.jpg",
        width: 1024,
        height: 630,
        alt: "Restaurante Le Chalet na Estrada da Tundavala, Lubango",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Chalet — O Sabor Autêntico de Angola",
    description:
      "Queijos artesanais, raclette e produtos da Serra N'Tandavala no Lubango, Viana e Luanda.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-AO" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
