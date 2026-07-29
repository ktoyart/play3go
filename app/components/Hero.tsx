import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Server, ShoppingCart, Terminal } from "lucide-react";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section className="mx-4 pt-28 md:mx-16">
      <div className="general-background relative mx-auto flex size-full max-w-[100rem] flex-col justify-center overflow-hidden rounded-2xl">
        <div className="grid gap-16 pb-56 md:pb-96 xl:grid-cols-3 xl:pb-64">
          <div className="flex flex-col items-center justify-center gap-12 p-12 text-center sm:p-20 lg:col-span-2 xl:items-start xl:justify-start xl:text-left">
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-2">
              <h1 className="text-3xl text-white sm:text-4xl lg:text-5xl font-semibold">
                Modern hosting for
              </h1>
              <div className="flex size-full">
                <div className="flex items-center gap-6">
                  <h2 className="general-text text-3xl sm:text-4xl lg:text-5xl font-semibold">
                    virtual servers
                  </h2>
                  <Icon icon={Terminal} className="hidden size-10 text-[#FF689EB8] md:flex" />
                </div>
              </div>
              <div className="mt-8 flex justify-center xl:justify-start">
                <Link
                  href="/me/buy"
                  className="group bg-gradient-to-r from-[#3201133f] to-[#3f00197b] smooth flex rounded-full px-8 py-4 outline outline-1 outline-offset-[-1px] outline-white/5 hover:scale-[96%] hover:outline-[#FF86AB]/30 hover:shadow-[0_0_30px_rgba(255,134,171,0.15)]"
                >
                  <div className="flex items-center gap-3">
                    <Icon icon={ArrowRight} className="size-4 text-white group-hover:translate-x-1 transition-transform" />
                    <span className="text-white font-medium">Order a server</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-20 top-8 z-[3] hidden xl:flex">
          <div className="flex items-center gap-8">
            <Image
              src="/icons/arrow.svg"
              alt=""
              width={96}
              height={96}
              className="size-24"
            />
            <p className="text-end text-2xl text-white">
              best <br /> support
            </p>
          </div>
        </div>

        <div className="z-[3] h-px w-full bg-white/5" />

        <div className="general-panel z-[3] flex w-full flex-col items-center justify-between gap-8 py-8 md:flex-row md:gap-0 md:px-16">
          <div className="flex gap-6 items-center">
            <Icon icon={Users} className="size-7 text-white" />
            <div className="flex flex-col justify-start">
              <p className="text-white text-3xl font-semibold">0.0k+</p>
              <p className="text-white/50 text-sm">active users</p>
            </div>
          </div>
          <div className="overlay h-0.5 w-56 rounded-full bg-white/15 md:w-0 xl:w-32 2xl:w-72" />
          <div className="flex gap-6 items-center">
            <Icon icon={Server} className="size-7 text-white" />
            <div className="flex flex-col justify-start">
              <p className="text-white text-3xl font-semibold">0.0k+</p>
              <p className="text-white/50 text-sm">active servers</p>
            </div>
          </div>
          <div className="overlay h-0.5 w-56 rounded-full bg-white/15 md:w-0 xl:w-32 2xl:w-72" />
          <div className="flex gap-6 items-center">
            <Icon icon={ShoppingCart} className="size-7 text-white" />
            <div className="flex flex-col justify-start">
              <p className="text-white text-3xl font-semibold">0.0k+</p>
              <p className="text-white/50 text-sm">paid servers</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-24 bottom-0 z-[2] w-[800px] lg:right-28 xl:right-0">
            <div className="relative">
              <Image
                src="/land/general.png"
                alt="Server illustration"
                width={800}
                height={600}
                className="h-auto w-full"
                priority
              />
              <div className="absolute bottom-40 left-[-350px] z-[5] hidden xl:flex">
                <div className="flex items-center gap-8">
                  <Image
                    src="/icons/arrow-left.svg"
                    alt=""
                    width={96}
                    height={96}
                    className="size-24"
                  />
                  <p className="text-2xl text-white">
                    fast <br /> hardware
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-[550px] z-[2] w-[800px]">
            <Image
              src="/land/slight-general.png"
              alt="Server illustration"
              width={800}
              height={600}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
