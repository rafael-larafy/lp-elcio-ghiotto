import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import WhatIs from "@/components/WhatIs";
import ForWhom from "@/components/ForWhom";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-[#00091a]">
      <NavBar />
      <Hero />
      <PainPoints />
      <WhatIs />
      <ForWhom />
      <Pricing />
      <Footer />
    </main>
  );
}
