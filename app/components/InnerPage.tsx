import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import Icon from "./Icon";

interface InnerPageProps {
  title: string;
  children: React.ReactNode;
}

export default function InnerPage({ title, children }: InnerPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 pt-28 pb-16 px-4 lg:px-16">
        <div className="mx-auto max-w-[100rem]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white smooth mb-8"
          >
            <Icon icon={ArrowLeft} className="size-4" />
            <span>Back to home</span>
          </Link>
          <h1 className="text-3xl lg:text-5xl font-semibold text-white mb-8">{title}</h1>
          <div className="prose prose-invert max-w-none text-white/70">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
