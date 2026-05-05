import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bloomie® — Suco Verde em Pó com 38 Greens & Superfoods",
  description:
    "Bloomie é o ritual diário pra digestão leve, energia constante e pele que floresce. 1 scoop, 38 ativos, sabor que dá gosto de tomar.",
  openGraph: {
    title: "Bloomie® — Floresça por dentro.",
    description:
      "Suco verde natural em pó. Digestão, energia e zero inchaço em 1 scoop por dia.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
