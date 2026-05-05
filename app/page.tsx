import { CountdownBanner } from "@/components/CountdownBanner";
import { Header } from "@/components/Header";
import { BuyBox } from "@/components/BuyBox";
import { Marquee } from "@/components/Marquee";
import { Benefits } from "@/components/Benefits";
import { Stats } from "@/components/Stats";
import { Ingredients } from "@/components/Ingredients";
import { Reviews } from "@/components/Reviews";
import { Compare } from "@/components/Compare";
import { Founder } from "@/components/Founder";
import { HowToUse } from "@/components/HowToUse";
import { FAQ } from "@/components/FAQ";
import { EmailCapture } from "@/components/EmailCapture";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <CountdownBanner />
      <Header />
      <BuyBox />
      <Marquee />
      <Benefits />
      <Stats />
      <Ingredients />
      <Reviews />
      <Compare />
      <Founder />
      <HowToUse />
      <FAQ />
      <EmailCapture />
      <Footer />
    </main>
  );
}
