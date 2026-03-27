"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-black">
        <img 
          src="/hero-horses.jpg" 
          alt="메인 배경 (말 달리는 역동적 이미지)"
          className="w-full h-full object-cover opacity-[15%]"
        />
        {/* Dark overlay for excellent text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 pointer-events-none" />
        
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-brand/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-gray-600/20 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block px-5 py-2 rounded-full border border-brand/30 bg-brand/10 text-brand text-sm sm:text-base font-semibold tracking-widest uppercase mb-4"
          >
            세계 유일 실행부여가
          </motion.div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
            <span className="block text-brand mb-3 sm:mb-5 text-xl sm:text-3xl md:text-4xl tracking-normal break-keep">'꿈 깨! 실행 없이는 일장춘몽!!'</span>
            <motion.span 
              className="inline-block cursor-default mt-2 mb-4 sm:mt-3 sm:mb-6 leading-[0.95]"
              whileHover={{ x: [-8, 8, -6, 6, -4, 4, 0] }}
              transition={{ duration: 0.5 }}
            >
              Stop Thinking,<br className="md:hidden" /> Start Action.
            </motion.span>
          </h1>
          
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed break-keep">
            30년 광고기획자, 15년 온라인 마케팅 강사, AI 전문가, 베스트셀러 저자,<br className="hidden md:block"/>
            세계 유일 실행부여가 이영현 교수와 함께 당신의 삶과 비즈니스를 새롭게 시작하세요.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#profile" className="w-full sm:w-56 text-center px-8 py-4 bg-brand text-black font-bold rounded-xl hover:bg-brand-hover transition-colors shadow-[0_0_30px_rgba(255,140,0,0.3)] text-lg uppercase tracking-wider">
              WHO'S LEE?
            </a>
            <a href="#class" className="w-full sm:w-56 text-center px-8 py-4 bg-white/5 text-white font-medium rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10 text-lg">
              AI 마케팅 강의
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-16 bg-gradient-to-b from-brand to-transparent"
        />
      </motion.div>
    </section>
  );
}
