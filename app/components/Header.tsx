"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, BookOpen, LogIn, Menu, X } from "lucide-react";
import { useState } from "react";
import Icon from "./Icon";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 lg:px-16 py-3 fixed top-0 z-50 bg-black/85 border-b border-white/5 backdrop-blur-md smooth">
      <div className="flex items-center justify-between mx-auto max-w-[100rem]">
        <div className="flex gap-8 items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex xl:hidden p-2.5 rounded-full smooth hover:scale-[98%] active:scale-[95%] hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <Icon icon={X} className="text-neutral-100 size-5" />
            ) : (
              <Icon icon={Menu} className="text-neutral-100 size-5" />
            )}
          </button>
          <Link
            href="/"
            className="hidden xl:flex active:scale-95 text-white hover:opacity-80 cursor-pointer smooth"
          >
            <Image
              src="/logo/light.svg"
              alt="play3go"
              width={48}
              height={48}
              className="w-12 h-auto"
              priority
            />
          </Link>
        </div>

        <nav className="hidden xl:flex gap-12 items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link
            href="/"
            className="flex gap-3 text-white/50 hover:text-white items-center hover:scale-[98%] active:scale-[95%] cursor-pointer smooth group"
          >
            <Icon icon={Home} className="size-5 group-hover:text-[#FF86AB]" />
            <span className="text-base font-medium">Home</span>
          </Link>
          <Link
            href="https://play3go.wiki/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 text-white/50 hover:text-white items-center hover:scale-[98%] active:scale-[95%] cursor-pointer smooth group"
          >
            <Icon icon={BookOpen} className="size-5 group-hover:text-[#FF86AB]" />
            <span className="text-base font-medium">Wiki</span>
          </Link>
        </nav>

        <Link
          href="/"
          className="flex xl:hidden active:scale-95 text-white hover:opacity-80 cursor-pointer smooth"
        >
          <Image
            src="/logo/light.svg"
            alt="play3go"
            width={48}
            height={48}
            className="w-12 h-auto"
            priority
          />
        </Link>

        <div className="flex xl:hidden items-center gap-4 mx-2">
          <Link
            href="/auth"
            className="flex gap-3 p-3 bg-[#FF65A6]/5 rounded-lg items-center hover:scale-[98%] active:scale-[96%] hover:bg-[#FF65A6]/10 cursor-pointer smooth"
          >
            <Icon icon={LogIn} className="text-[#FF86AB] size-5" />
          </Link>
        </div>

        <div className="hidden xl:flex items-center gap-4">
          <Link
            href="/auth"
            className="flex gap-3 px-5 py-2.5 bg-[#FF65A6]/5 rounded-lg items-center text-white/70 hover:text-white hover:bg-[#FF65A6]/10 hover:scale-[98%] active:scale-[96%] cursor-pointer smooth"
          >
            <Icon icon={LogIn} className="text-[#FF86AB] size-5" />
            <span className="text-sm font-medium">Sign in</span>
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="xl:hidden mt-4 pb-4 border-t border-white/5 pt-4 animate-slide-down">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex gap-3 text-white/70 hover:text-white items-center"
              onClick={() => setMenuOpen(false)}
            >
              <Icon icon={Home} className="size-5" />
              <span className="text-base font-medium">Home</span>
            </Link>
            <Link
              href="https://play3go.wiki/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 text-white/70 hover:text-white items-center"
            >
              <Icon icon={BookOpen} className="size-5" />
              <span className="text-base font-medium">Wiki</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
