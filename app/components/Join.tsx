import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Icon from "./Icon";

export default function Join() {
  return (
    <section className="flex px-4 lg:px-16 pt-20 overflow-hidden">
      <div className="mx-auto flex size-full max-w-[100rem] flex-col justify-center">
        <div className="flex justify-center items-center text-center">
          <h2 className="relative z-10 text-3xl font-semibold text-white lg:text-5xl">
            Join us now!
          </h2>
        </div>
        <div className="flex justify-center pt-8">
          <p className="text-center text-lg text-white max-w-xl">
            Our support will always help you in solving any issues with your services.
          </p>
        </div>
        <div className="flex justify-center pt-8">
          <Link
            href="/me/buy"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#B6004C] to-[#590000] px-8 py-4 text-white font-medium shadow-[0_4px_20px_rgba(255,0,77,0.25)] hover:shadow-[0_4px_30px_rgba(255,0,77,0.4)] hover:scale-[96%] smooth"
          >
            <span>Order a server</span>
            <Icon icon={ArrowRight} className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="relative z-[3] pt-16 lg:pt-0">
          <Image
            src="/land/general-2.png"
            alt="Join us"
            width={1200}
            height={600}
            className="h-auto w-full"
            priority
          />
        </div>
        <div className="relative z-0">
          <div className="size-[300px] lg:size-[600px] blur-[150px] lg:blur-[400px] bg-[#FF004D] absolute -bottom-32 right-[20%] lg:right-[32%] rounded-full" />
        </div>
      </div>
    </section>
  );
}
