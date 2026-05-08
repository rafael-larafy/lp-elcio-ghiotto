import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import WhatIs from "@/components/WhatIs";
import ForWhom from "@/components/ForWhom";
import Banner from "@/components/Banner";
import CourseAccess from "@/components/CourseAccess";
import Testimonials from "@/components/Testimonials";
import Modules from "@/components/Modules";
import Mentor from "@/components/Mentor";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-[#012e43]">
      <NavBar />
      <Hero />
      <PainPoints />
      <WhatIs />
      <ForWhom />
      <Banner />
      <CourseAccess />
      <Testimonials />
      <Modules />
      <Mentor />
      <Pricing />
      <Footer />
    </main>
  );
}
