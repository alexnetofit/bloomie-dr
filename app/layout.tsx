import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bloomie® — Pink Lemonade · Pó pra preparo de bebida",
  description:
    "Bloomie é o ritual diário pra firmeza, energia e bom humor. Sachê de 7g com colágeno Verisol®, 12 vitaminas e adaptógenos — sabor Pink Lemonade.",
  openGraph: {
    title: "Bloomie® — Viva seu momento Bloomie.",
    description:
      "Pó pra preparo de bebida com 25+ ativos. Pele firme, energia leve, mente calma — em 1 sachê por dia.",
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
