import Header from "./components/Header";
import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import Services from "./components/Services";
import Join from "./components/Join";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <main className="flex flex-col gap-24 pb-24">
        <Hero />
        <Advantages />
        <Services />
        <Join />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
