import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import DemoChat from "@/components/DemoChat";
import Pricing from "@/components/Pricing";
import BookDemo from "@/components/BookDemo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <DemoChat />
      <Pricing />
      <BookDemo />
      <Footer />
    </main>
  );
}
