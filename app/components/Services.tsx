"use client";

import { useState } from "react";
import {
  Terminal,
  PlayCircle,
  Monitor,
  Globe,
  Shield,
  Cpu,
  Database,
  Percent,
  Tag,
  CreditCard,
  CircleDollarSign,
  Banknote,
  Check,
  ArrowRight,
} from "lucide-react";
import Icon from "./Icon";

const services = [
  { id: "vps", label: "Virtual servers", icon: Terminal },
  { id: "games", label: "Game servers", icon: PlayCircle },
  { id: "dedicated", label: "Dedicated Servers", icon: Monitor },
  { id: "domains", label: "Domains", icon: Globe },
  { id: "ddos", label: "DDoS protection", icon: Shield },
];

const plans = [
  { id: "ryzen", label: "AMD RYZEN", icon: Cpu },
  { id: "hiload", label: "HI-LOAD", icon: Cpu },
  { id: "storage", label: "STORAGE", icon: Database },
  { id: "promo", label: "PROMO", icon: Percent },
  { id: "lowcost", label: "LOW-COST", icon: Tag },
];

const currencies = [
  { id: "rub", label: "Ruble", symbol: "₽", icon: Banknote },
  { id: "eur", label: "Euro", symbol: "€", icon: CircleDollarSign },
];

const plansData: Record<string, Record<string, Array<{ cpu: string; ram: string; disk: string; price: number }>>> = {
  vps: {
    ryzen: [
      { cpu: "1 vCPU", ram: "1 GB RAM", disk: "15 GB SSD", price: 150 },
      { cpu: "2 vCPU", ram: "2 GB RAM", disk: "30 GB SSD", price: 290 },
      { cpu: "4 vCPU", ram: "4 GB RAM", disk: "60 GB SSD", price: 550 },
      { cpu: "6 vCPU", ram: "8 GB RAM", disk: "120 GB SSD", price: 990 },
    ],
    hiload: [
      { cpu: "2 vCPU", ram: "4 GB RAM", disk: "40 GB NVMe", price: 420 },
      { cpu: "4 vCPU", ram: "8 GB RAM", disk: "80 GB NVMe", price: 780 },
      { cpu: "6 vCPU", ram: "16 GB RAM", disk: "160 GB NVMe", price: 1450 },
      { cpu: "8 vCPU", ram: "32 GB RAM", disk: "320 GB NVMe", price: 2700 },
    ],
    storage: [
      { cpu: "1 vCPU", ram: "2 GB RAM", disk: "100 GB HDD", price: 200 },
      { cpu: "2 vCPU", ram: "4 GB RAM", disk: "250 GB HDD", price: 380 },
      { cpu: "4 vCPU", ram: "8 GB RAM", disk: "500 GB HDD", price: 700 },
      { cpu: "6 vCPU", ram: "16 GB RAM", disk: "1 TB HDD", price: 1300 },
    ],
    promo: [
      { cpu: "1 vCPU", ram: "1 GB RAM", disk: "10 GB SSD", price: 99 },
      { cpu: "2 vCPU", ram: "2 GB RAM", disk: "20 GB SSD", price: 180 },
      { cpu: "4 vCPU", ram: "4 GB RAM", disk: "40 GB SSD", price: 320 },
    ],
    lowcost: [
      { cpu: "1 vCPU", ram: "512 MB RAM", disk: "10 GB SSD", price: 75 },
      { cpu: "1 vCPU", ram: "1 GB RAM", disk: "15 GB SSD", price: 120 },
      { cpu: "2 vCPU", ram: "2 GB RAM", disk: "25 GB SSD", price: 220 },
    ],
  },
  games: {
    ryzen: [
      { cpu: "2 vCPU", ram: "4 GB RAM", disk: "30 GB SSD", price: 350 },
      { cpu: "4 vCPU", ram: "8 GB RAM", disk: "60 GB SSD", price: 650 },
      { cpu: "6 vCPU", ram: "16 GB RAM", disk: "120 GB SSD", price: 1200 },
      { cpu: "8 vCPU", ram: "32 GB RAM", disk: "240 GB SSD", price: 2200 },
    ],
    hiload: [
      { cpu: "4 vCPU", ram: "8 GB RAM", disk: "80 GB NVMe", price: 800 },
      { cpu: "6 vCPU", ram: "16 GB RAM", disk: "160 GB NVMe", price: 1500 },
      { cpu: "8 vCPU", ram: "32 GB RAM", disk: "320 GB NVMe", price: 2800 },
      { cpu: "12 vCPU", ram: "64 GB RAM", disk: "640 GB NVMe", price: 5200 },
    ],
    storage: [
      { cpu: "2 vCPU", ram: "4 GB RAM", disk: "100 GB HDD", price: 300 },
      { cpu: "4 vCPU", ram: "8 GB RAM", disk: "250 GB HDD", price: 550 },
      { cpu: "6 vCPU", ram: "16 GB RAM", disk: "500 GB HDD", price: 1000 },
    ],
    promo: [
      { cpu: "2 vCPU", ram: "2 GB RAM", disk: "20 GB SSD", price: 150 },
      { cpu: "4 vCPU", ram: "4 GB RAM", disk: "40 GB SSD", price: 280 },
    ],
    lowcost: [
      { cpu: "2 vCPU", ram: "2 GB RAM", disk: "20 GB SSD", price: 180 },
      { cpu: "4 vCPU", ram: "4 GB RAM", disk: "40 GB SSD", price: 320 },
    ],
  },
  dedicated: {
    ryzen: [
      { cpu: "AMD Ryzen 5 3600", ram: "32 GB RAM", disk: "2x500 GB NVMe", price: 3500 },
      { cpu: "AMD Ryzen 7 3700X", ram: "64 GB RAM", disk: "2x1 TB NVMe", price: 5500 },
      { cpu: "AMD Ryzen 9 5900X", ram: "128 GB RAM", disk: "2x2 TB NVMe", price: 9500 },
    ],
    hiload: [
      { cpu: "AMD EPYC 7302", ram: "128 GB RAM", disk: "2x2 TB NVMe", price: 12000 },
      { cpu: "AMD EPYC 7402", ram: "256 GB RAM", disk: "2x4 TB NVMe", price: 20000 },
    ],
    storage: [
      { cpu: "Intel Xeon E3", ram: "32 GB RAM", disk: "2x4 TB HDD", price: 4500 },
      { cpu: "Intel Xeon E5", ram: "64 GB RAM", disk: "2x8 TB HDD", price: 7500 },
    ],
    promo: [
      { cpu: "Intel Xeon E3", ram: "16 GB RAM", disk: "2x500 GB SSD", price: 2500 },
    ],
    lowcost: [
      { cpu: "Intel Xeon E3", ram: "16 GB RAM", disk: "2x250 GB SSD", price: 1800 },
    ],
  },
  domains: {
    ryzen: [
      { cpu: ".com", ram: "1 year", disk: "Free DNS", price: 900 },
      { cpu: ".net", ram: "1 year", disk: "Free DNS", price: 1100 },
      { cpu: ".org", ram: "1 year", disk: "Free DNS", price: 1200 },
    ],
    hiload: [
      { cpu: ".io", ram: "1 year", disk: "Free DNS", price: 2500 },
      { cpu: ".dev", ram: "1 year", disk: "Free DNS", price: 1500 },
    ],
    storage: [
      { cpu: ".cloud", ram: "1 year", disk: "Free DNS", price: 1800 },
      { cpu: ".host", ram: "1 year", disk: "Free DNS", price: 1600 },
    ],
    promo: [
      { cpu: ".xyz", ram: "1 year", disk: "Free DNS", price: 120 },
      { cpu: ".online", ram: "1 year", disk: "Free DNS", price: 300 },
    ],
    lowcost: [
      { cpu: ".ru", ram: "1 year", disk: "Free DNS", price: 450 },
      { cpu: ".рф", ram: "1 year", disk: "Free DNS", price: 350 },
    ],
  },
  ddos: {
    ryzen: [
      { cpu: "L3/L4 Basic", ram: "100 Mbit/s", disk: "1 domain", price: 500 },
      { cpu: "L3/L4 Pro", ram: "1 Gbit/s", disk: "5 domains", price: 1500 },
      { cpu: "L3/L7 Enterprise", ram: "10 Gbit/s", disk: "Unlimited", price: 5000 },
    ],
    hiload: [
      { cpu: "L7 Basic", ram: "1 domain", disk: "1M rps", price: 800 },
      { cpu: "L7 Pro", ram: "10 domains", disk: "10M rps", price: 2500 },
    ],
    storage: [
      { cpu: "CDN Storage", ram: "1 TB", disk: "1 domain", price: 300 },
      { cpu: "CDN Storage Pro", ram: "5 TB", disk: "10 domains", price: 1000 },
    ],
    promo: [
      { cpu: "Trial", ram: "1 domain", disk: "7 days", price: 0 },
    ],
    lowcost: [
      { cpu: "Basic Shield", ram: "1 domain", disk: "L3/L4", price: 300 },
    ],
  },
};

export default function Services() {
  const [activeService, setActiveService] = useState("vps");
  const [activePlan, setActivePlan] = useState("ryzen");
  const [activeCurrency, setActiveCurrency] = useState("rub");

  const currentPlans = plansData[activeService]?.[activePlan] ?? [];
  const symbol = currencies.find((c) => c.id === activeCurrency)?.symbol ?? "₽";
  const rate = activeCurrency === "eur" ? 0.01 : 1;

  return (
    <section id="services" className="flex px-4 lg:px-16">
      <div className="mx-auto flex size-full max-w-[100rem] flex-col justify-center">
        <div className="flex justify-center">
          <div className="relative">
            <h2 className="relative z-10 text-3xl font-semibold text-white lg:text-5xl">
              Our services
            </h2>
            <div className="absolute top-4 w-full lg:top-5">
              <div className="z-0 h-5 w-full bg-gradient-to-r from-[#B6004C] to-[#590000] lg:h-7" />
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <p className="max-w-sm text-center text-lg text-white/50">
            Choose the plan that suits you.
          </p>
        </div>

        <div className="flex justify-center pt-8">
          <div className="flex flex-col lg:flex-row gap-3 rounded-[32px] bg-white/[4%] px-4 py-3">
            {services.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => {
                    setActiveService(service.id);
                    setActivePlan("ryzen");
                  }}
                  className={`service-btn relative flex shrink-0 smooth gap-3 lg:gap-4 items-center px-4 lg:px-5 py-2.5 lg:py-3 rounded-[18px] hover:scale-[98%] active:scale-[96%] ${
                    activeService === service.id ? "is-active" : ""
                  }`}
                >
                  <Icon
                    icon={ServiceIcon}
                    className={`size-5 shrink-0 smooth ${
                      activeService === service.id ? "text-white opacity-100" : "text-white opacity-50"
                    }`}
                  />
                  <span
                    className={`font-medium whitespace-nowrap text-sm lg:text-base smooth ${
                      activeService === service.id
                        ? "text-white opacity-100"
                        : "text-white opacity-50"
                    }`}
                  >
                    {service.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-4 lg:gap-6 pt-8 w-full">
          <div className="flex flex-col gap-2 min-w-fit">
            <div className="flex gap-2 items-center px-3">
              <Icon icon={Cpu} className="size-3.5 text-white/35" />
              <p className="font-semibold text-white/35 text-[11px] uppercase tracking-[0.14em]">
                Plan
              </p>
            </div>
            <div className="selector-pill flex flex-wrap items-center gap-1.5 rounded-[28px] px-2 py-2">
              {plans.map((plan) => {
                const PlanIcon = plan.icon;
                return (
                  <button
                    key={plan.id}
                    onClick={() => setActivePlan(plan.id)}
                    className={`service-btn relative flex shrink-0 smooth gap-3 lg:gap-4 items-center px-4 lg:px-5 py-2.5 lg:py-3 rounded-[18px] hover:scale-[98%] active:scale-[96%] ${
                      activePlan === plan.id ? "is-active" : ""
                    }`}
                  >
                    <Icon
                      icon={PlanIcon}
                      className={`size-5 shrink-0 smooth ${
                        activePlan === plan.id ? "text-white opacity-100" : "text-white opacity-50"
                      }`}
                    />
                    <span
                      className={`font-medium whitespace-nowrap text-sm lg:text-base smooth ${
                        activePlan === plan.id
                          ? "text-white opacity-100"
                          : "text-white opacity-50"
                      }`}
                    >
                      {plan.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-2 min-w-fit">
            <div className="flex gap-2 items-center px-3">
              <Icon icon={CreditCard} className="size-3.5 text-white/35" />
              <p className="font-semibold text-white/35 text-[11px] uppercase tracking-[0.14em]">
                Currency
              </p>
            </div>
            <div className="selector-pill flex flex-wrap items-center gap-1.5 rounded-[28px] px-2 py-2">
              {currencies.map((currency) => {
                const CurrencyIcon = currency.icon;
                return (
                  <button
                    key={currency.id}
                    onClick={() => setActiveCurrency(currency.id)}
                    className={`service-btn relative flex shrink-0 smooth gap-3 lg:gap-4 items-center px-4 lg:px-5 py-2.5 lg:py-3 rounded-[18px] hover:scale-[98%] active:scale-[96%] ${
                      activeCurrency === currency.id ? "is-active" : ""
                    }`}
                  >
                    <Icon
                      icon={CurrencyIcon}
                      className={`size-5 shrink-0 smooth ${
                        activeCurrency === currency.id ? "text-white opacity-100" : "text-white opacity-50"
                      }`}
                    />
                    <span
                      className={`font-medium whitespace-nowrap text-sm lg:text-base smooth ${
                        activeCurrency === currency.id
                          ? "text-white opacity-100"
                          : "text-white opacity-50"
                      }`}
                    >
                      {currency.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10">
          {currentPlans.map((plan, index) => (
            <div
              key={`${activeService}-${activePlan}-${index}`}
              className="group rounded-[16px] p-6 outline outline-offset-[-1px] outline-white/5 bg-white/[2%] hover:outline-[#FF86AB]/20 hover:bg-white/[4%] hover:shadow-[0_0_40px_rgba(255,134,171,0.08)] smooth flex flex-col gap-5"
            >
              <div className="flex flex-col gap-2">
                <p className="text-white/35 text-xs uppercase tracking-wider font-semibold">
                  {plan.cpu}
                </p>
                <h3 className="text-white text-2xl font-semibold">
                  {Math.round(plan.price * rate)}
                  <span className="text-[#FF86AB]">{symbol}</span>
                  <span className="text-white/40 text-sm font-normal">/month</span>
                </h3>
              </div>
              <div className="flex flex-col gap-3 text-white/60 text-sm">
                <div className="flex items-center gap-3">
                  <Icon icon={Check} className="size-4 text-[#FF86AB]" />
                  <span>{plan.ram}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon={Check} className="size-4 text-[#FF86AB]" />
                  <span>{plan.disk}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon={Check} className="size-4 text-[#FF86AB]" />
                  <span>DDoS protection</span>
                </div>
              </div>
              <button className="mt-auto flex items-center justify-center gap-2 rounded-full bg-white/5 hover:bg-[#FF65A6]/10 hover:text-[#FF86AB] smooth py-2.5 text-sm font-medium text-white group-hover:shadow-[0_0_20px_rgba(255,134,171,0.1)]">
                <span>Order</span>
                <Icon icon={ArrowRight} className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
