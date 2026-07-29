import { ArrowRight, ShieldCheck, Rocket, Clock, Cpu, LayoutDashboard, Headphones } from "lucide-react";
import Icon from "./Icon";

const advantages = [
  {
    icon: ShieldCheck,
    title: "DDoS protection",
    description:
      "We provide reliable protection at levels L3-L7, which is capable of repelling attacks with a power of up to 17 Tbit/s.",
    highlighted: false,
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "We use only high-quality and modern hardware that can provide high speed throughout the network.",
    highlighted: true,
  },
  {
    icon: Clock,
    title: "Work 24/7",
    description: "We guarantee the operation of your server around the clock.",
    highlighted: false,
  },
  {
    icon: Cpu,
    title: "Flexible plans",
    description:
      "We provide a variety of pricing plans suitable for both small servers and large projects.",
    highlighted: true,
  },
  {
    icon: LayoutDashboard,
    title: "Convenient panel",
    description:
      "We provide a convenient control panel to quickly manage all your servers.",
    highlighted: false,
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Our technical support is available to all clients for any questions.",
    highlighted: true,
  },
];

export default function Advantages() {
  return (
    <section className="w-full px-4 lg:px-16">
      <div className="mx-auto flex size-full max-w-[100rem] flex-col justify-center">
        <div className="flex justify-center">
          <div className="relative">
            <h2 className="relative z-10 text-3xl font-semibold text-white lg:text-5xl">
              Our advantages
            </h2>
            <div className="absolute top-4 w-full lg:top-5">
              <div className="z-0 h-5 w-full bg-gradient-to-r from-[#B6004C] to-[#590000] lg:h-7" />
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <p className="max-w-lg text-center text-lg text-white/50">
            Our main advantages and why you should choose us.
          </p>
        </div>

        <div className="grid gap-4 pt-10 lg:grid-cols-6 xl:grid-cols-9">
          {advantages.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={index}
                className={`${
                  index === 0 || index === 3
                    ? "lg:col-span-3 xl:col-span-4"
                    : index === 1 || index === 4
                    ? "lg:col-span-3 xl:col-span-3"
                    : "lg:col-span-3 xl:col-span-2"
                } ${
                  item.highlighted ? "advantage-background" : ""
                } group rounded-[12px] flex flex-col gap-4 justify-between p-8 outline outline-offset-[-2px] outline-white/5 hover:outline-white/10 hover:bg-white/[2%] smooth cursor-pointer`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex gap-6 items-center">
                    <Icon icon={IconComp} className="size-6 lg:size-7 text-white mb-2 group-hover:text-[#FF86AB] transition-colors" />
                    <h3 className="text-white text-xl lg:text-3xl font-semibold">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-white/50 max-w-lg leading-relaxed">{item.description}</p>
                </div>
                <div className="flex justify-start">
                  <button className="flex items-center pt-4 gap-3 smooth hover:scale-[97%] hover:opacity-90 group-hover:text-[#FF86AB]">
                    <Icon icon={ArrowRight} className="size-4 text-white group-hover:text-[#FF86AB] transition-colors" />
                    <span className="text-white group-hover:text-[#FF86AB] transition-colors">find more</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
