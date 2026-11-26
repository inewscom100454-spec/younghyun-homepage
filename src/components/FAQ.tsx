"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqData } from "@/lib/faq-data";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-24 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="block text-xl sm:text-2xl font-bold text-brand uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight break-keep">
            자주 묻는 질문 <span className="text-brand">&amp;</span> 핵심 가이드
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed break-keep">
            AI·SNS·온라인마케팅 교육, 실행부여(동기부여·자기계발) 특강, 고려대학교 과정 및 섭외에 관해 자주 물어보시는 질문과 핵심 답변입니다.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#111111] border-brand/60 shadow-[0_0_25px_rgba(255,140,0,0.12)]"
                    : "bg-[#0f0f0f] border-white/10 hover:border-brand/30"
                }`}
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                    id={`faq-button-${idx}`}
                    className="w-full text-left p-6 sm:p-8 flex items-start sm:items-center justify-between gap-4 group cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4 pr-2">
                      <span className="inline-flex items-center gap-1.5 self-start sm:self-auto shrink-0 px-3 py-1 rounded-full text-xs font-bold bg-brand/15 text-brand border border-brand/30">
                        <HelpCircle className="w-3.5 h-3.5" />
                        {item.category}
                      </span>
                      <span
                        className={`text-lg sm:text-xl font-bold leading-snug break-keep transition-colors ${
                          isOpen ? "text-brand" : "text-white group-hover:text-brand"
                        }`}
                      >
                        {item.question}
                      </span>
                    </div>
                    <span
                      className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 mt-0.5 sm:mt-0 ${
                        isOpen
                          ? "bg-brand text-black border-brand rotate-180"
                          : "bg-white/5 text-gray-400 border-white/10 group-hover:border-brand/40 group-hover:text-brand"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${idx}`}
                      role="region"
                      aria-labelledby={`faq-button-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 border-t border-white/5 text-gray-300 text-base sm:text-[17px] leading-relaxed font-light break-keep">
                        {item.answer}
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
