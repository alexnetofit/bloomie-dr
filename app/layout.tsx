import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Bloomie® — Suco verde em pó com 36+ greens & superfoods · Pink Lemonade",
  description:
    "Bloomie é o suco verde natural em pó, agora em sachê. 36+ ativos, 13 vitaminas, 10 minerais e 17 superfoods pra digestão leve, energia e zero inchaço.",
  openGraph: {
    title: "Bloomie® — Viva seu momento Bloomie.",
    description:
      "Suco verde em sachê com 36+ ativos. Digestão, energia e pele que floresce — em 7g por dia.",
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
