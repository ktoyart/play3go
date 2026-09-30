"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";

const faqs = [
  {
    question: "What is the uptime guarantee?",
    answer:
      "We guarantee 99.9% uptime for all our services, backed by redundant power, network, and DDoS protection.",
  },
  {
    question: "How quickly is the server activated?",
    answer:
      "Most servers are activated automatically within a few minutes after payment confirmation.",
  },
  {
    question: "Do you provide refunds?",
    answer:
      "Yes, we offer refunds within 24 hours of purchase if you are not satisfied with the service.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We support bank cards, cryptocurrency, and electronic wallets. Currency can be switched between Rubles and Euros.",
  },
  {
    question: "Is DDoS protection included?",
    answer:
      "Yes, every plan includes basic L3-L4 DDoS protection. Advanced L7 protection can be added on demand.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full px-4 lg:px-16 pb-20">
      <div className="mx-auto max-w-[100rem]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            <h2 className="relative z-10 text-3xl font-semibold text-white lg:text-5xl">
              FAQ
            </h2>
            <div className="absolute top-4 w-full lg:top-5">
              <div className="z-0 h-5 w-full bg-gradient-to-r from-[#B6004C] to-[#590000] lg:h-7" />
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center pt-8"
        >
          <p className="max-w-lg text-center text-lg text-white/50">
            Frequently asked questions about our hosting services.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3 pt-10">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                key={index}
                className="rounded-[12px] outline outline-offset-[-1px] outline-white/5 bg-white/[2%] overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[2%] smooth"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <span className="shrink-0 p-2 rounded-full bg-white/5 text-white/70">
                    {isOpen ? (
                      <Icon icon={Minus} className="size-4" />
                    ) : (
                      <Icon icon={Plus} className="size-4" />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-white/50 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
