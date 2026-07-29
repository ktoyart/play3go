import Link from "next/link";
import { Home } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Icon from "./components/Icon";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 pt-28 pb-16">
        <div className="text-center">
          <p className="text-[#FF86AB] text-9xl font-bold mb-4">404</p>
          <h1 className="text-3xl lg:text-5xl font-semibold text-white mb-4">
            Page not found
          </h1>
          <p className="text-white/50 mb-8 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#B6004C] to-[#590000] px-8 py-4 text-white font-medium hover:shadow-[0_4px_20px_rgba(255,0,77,0.3)] smooth"
          >
            <Icon icon={Home} className="size-5" />
            <span>Back to home</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
