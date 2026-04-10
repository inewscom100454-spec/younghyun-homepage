"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function Class() {
  return (
    <section id="class" className="py-24 bg-[#0a0a0a]">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-brand uppercase tracking-widest mb-4">AI Marketing Class</h2>
          <h3 className="text-4xl font-black text-white leading-tight">고려대학교 AI온라인마케팅과정</h3>
          <div className="mt-6 text-gray-400 max-w-3xl mx-auto space-y-2 leading-relaxed">
            <p>2015년 국내 최초로 개설된 대체불가, 명불허전의 과정!</p>
            <p>전국팔도에서 1,000명이 넘는 CEO와 전문가가 500건 이상의 성공사례를 남긴 곳!</p>
            <p className="text-white font-medium">매 기수 정원초과, 조기마감! 이제 당신 차례입니다.</p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#111] rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
        >
          <div className="p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-12 items-center md:items-start">
            
            {/* YouTube Video Thumbnail Area */}
            <div className="w-full md:w-1/2">
              <a 
                href="https://www.youtube.com/watch?v=ENvWyDOVw2o&t=9s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block aspect-video bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden relative group shadow-2xl"
              >
                <Image 
                  src="/media__1774167682364.jpg" 
                  alt="고마최고 18기의 첫 페이지 강의 현장" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* YouTube Play Button Custom Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-500">
                  <div className="w-16 h-11 sm:w-20 sm:h-14 bg-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-[0_4px_20px_rgba(220,38,38,0.5)] group-hover:scale-110 group-hover:bg-red-500 transition-all duration-300">
                    <div className="w-0 h-0 border-y-[8px] border-y-transparent border-l-[14px] border-l-white sm:border-y-[10px] sm:border-l-[18px] ml-1"></div>
                  </div>
                </div>
              </a>
            </div>
            
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block px-5 py-2 rounded-full border border-brand/30 bg-brand/10 text-brand text-sm font-semibold">
                2026년 봄 학기 원우 모집 중
              </div>
              
              <div className="space-y-8 mt-8 pb-4">
                <div>
                  <h4 className="text-gray-400 text-sm lg:text-base font-medium mb-3">고려대학교 AI온라인마케팅과정</h4>
                  <ul className="space-y-4 text-white text-lg md:text-xl font-bold">
                    <li>
                      <a href="https://blog.naver.com/newsad1/221323052889" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group transition-transform">
                        <span className="text-brand shrink-0 group-hover:scale-125 transition-transform duration-300">✓</span>
                        <span className="group-hover:text-brand transition-colors">최고위과정(고마최고) 20기 모집요강</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://blog.naver.com/newsad1/221761108453" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group transition-transform">
                        <span className="text-brand shrink-0 group-hover:scale-125 transition-transform duration-300">✓</span>
                        <span className="group-hover:text-brand transition-colors">전문가과정(고마전) 20기 모집요강</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-gray-400 text-sm lg:text-base font-medium mb-3">한국온라인마케팅연구원</h4>
                  <ul className="space-y-4 text-white text-lg md:text-xl font-bold">
                    <li>
                      <a href="https://blog.naver.com/newsad1/224172905402" target="_blank" rel="noopener noreferrer" className="flex items-start md:items-center gap-3 group transition-transform">
                        <span className="text-brand shrink-0 group-hover:scale-125 transition-transform duration-300 mt-1 md:mt-0">✓</span>
                        <span className="group-hover:text-brand transition-colors leading-snug">이영현 교수의 교육산업 AI마케팅과정 1기 모집요강</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>
       </div>
    </section>
  );
}
