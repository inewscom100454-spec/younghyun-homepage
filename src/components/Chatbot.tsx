"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [messageComplete, setMessageComplete] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'main' | 'ai-course' | 'contact-info'>('main');

  // The full message to type out
  const welcomeText = "반갑습니다! 세계 유일 실행부여가 이영현 교수의 AI 비서 오드리입니다.\n생각만 하던 일을 행동으로 바꿀 준비가 되셨나요? 무엇을 도와드릴까요?";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (isOpen) {
      // Reset state when opened
      setDisplayText("");
      setShowTyping(true);
      setMessageComplete(false);
      setActiveMenu('main');
      
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < welcomeText.length) {
          setDisplayText(welcomeText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
          setShowTyping(false);
          setMessageComplete(true);
        }
      }, 40); // Slightly faster typing speed for energetic vibe
      
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  const btnClass = "block w-full text-left px-4 py-3 bg-black border border-brand/50 text-gray-200 hover:bg-brand hover:text-black hover:border-brand shadow-[0_0_15px_rgba(255,140,0,0.1)] hover:shadow-[0_0_20px_rgba(255,140,0,0.4)] transition-all duration-300 text-[13.5px] sm:text-sm font-bold tracking-tight rounded-xl";
  const subBtnClass = "block w-full text-left px-4 py-2.5 bg-[#111] border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 text-[13px] sm:text-[13.5px] font-medium rounded-lg mb-1.5";

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 -translate-y-1/2 right-4 sm:right-[90px] w-[calc(100vw-32px)] sm:w-[340px] md:w-[380px] max-h-[85vh] bg-black border border-brand/30 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(255,140,0,0.15)] z-[60] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#111] p-4 flex justify-between items-center border-b border-brand/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-black font-black text-lg shadow-[0_0_10px_rgba(255,140,0,0.4)]">
                  오
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-wide">오드리 (AI 비서)</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
                    <span className="text-xs text-brand font-medium">온라인</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="채팅 닫기"
              >
                <X size={24} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="p-4 h-[420px] overflow-y-auto bg-black flex flex-col gap-4 custom-scrollbar">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-brand flex-shrink-0 flex items-center justify-center text-black text-xs font-black mt-1">
                  오
                </div>
                <div className="w-full">
                  <div className="bg-[#1a1a1a] text-gray-100 p-3.5 rounded-2xl rounded-tl-sm text-[14.5px] leading-relaxed border border-white/5 relative shadow-sm">
                    <p className="whitespace-pre-wrap">{displayText}</p>
                    {showTyping && (
                      <motion.span 
                        animate={{ opacity: [0, 1, 0] }} 
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-1.5 h-4 bg-brand ml-1 align-middle"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons - Appears after typing completes */}
              <AnimatePresence mode="wait">
                {messageComplete && activeMenu === 'main' && (
                  <motion.div
                    key="main-menu"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-2.5 mt-1 pl-11"
                  >
                    <a href="https://forms.gle/LGVPoq4YEhBarsQP9" target="_blank" rel="noopener noreferrer" className={btnClass}>
                      🚀 특강 및 협업 제안
                    </a>
                    <button onClick={() => setActiveMenu('ai-course')} className={btnClass}>
                      🔥 고려대 AI마케팅 과정 문의
                    </button>
                    <a href="https://product.kyobobook.co.kr/detail/S000212988137" target="_blank" rel="noopener noreferrer" className={btnClass}>
                      📖 베스트셀러 『동두천 장미미용실』
                    </a>
                    <a href="https://blog.naver.com/newsad1/221441802457" target="_blank" rel="noopener noreferrer" className={btnClass}>
                      👤 이영현 교수는 누구?
                    </a>
                    <button onClick={() => setActiveMenu('contact-info')} className={btnClass}>
                      ✉️ 이영현 교수 직접 문의
                    </button>
                  </motion.div>
                )}

                {messageComplete && activeMenu === 'contact-info' && (
                  <motion.div
                    key="contact-info-menu"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col mt-1 pl-11"
                  >
                    <div className="bg-[#1a1a1a] p-4 rounded-2xl rounded-tl-sm border border-brand/20 mb-3 shadow-[0_5px_15px_rgba(255,140,0,0.05)]">
                      <p className="text-[14px] text-gray-200 leading-relaxed font-medium">
                        <span className="text-brand font-bold block mb-1">newsad1@naver.com</span>이나<br />
                        <span className="text-brand font-bold block mt-1">010-3767-2191</span> 번호로 직접 연락해 주세요.
                      </p>
                    </div>
                    
                    <button 
                      onClick={() => setActiveMenu('main')} 
                      className="mt-1 text-xs text-gray-400 hover:text-brand underline underline-offset-4 text-left px-2 font-medium transition-colors"
                    >
                      ← 뒤로 가기 (처음 메뉴)
                    </button>
                  </motion.div>
                )}

                {messageComplete && activeMenu === 'ai-course' && (
                  <motion.div
                    key="ai-course-menu"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col mt-1 pl-11"
                  >
                    <div className="bg-[#1a1a1a] p-3.5 rounded-2xl rounded-tl-sm border border-brand/20 mb-3">
                      <p className="text-[13.5px] text-gray-200 leading-relaxed font-medium">
                        원하시는 교육 과정을 선택하시면 상세 안내 페이지로 이동합니다.
                      </p>
                    </div>
                    
                    <a href="https://blog.naver.com/newsad1/221323052889" target="_blank" rel="noopener noreferrer" className={subBtnClass}>
                      - 최고위과정
                    </a>
                    <a href="https://blog.naver.com/newsad1/221761108453" target="_blank" rel="noopener noreferrer" className={subBtnClass}>
                      - 전문가과정
                    </a>
                    <a href="https://blog.naver.com/newsad1/221441802457" target="_blank" rel="noopener noreferrer" className={subBtnClass}>
                      - 교육산업 전문가과정
                    </a>
                    
                    <button 
                      onClick={() => setActiveMenu('main')} 
                      className="mt-3 text-xs text-gray-400 hover:text-brand underline underline-offset-4 text-left px-2 font-medium transition-colors"
                    >
                      ← 뒤로 가기 (처음 메뉴)
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input Area */}
            <div className="p-3 bg-[#111] border-t border-brand/20 flex gap-2">
              <input 
                type="text" 
                placeholder="현재는 버튼 클릭 기능만 지원됩니다." 
                className="flex-1 bg-black text-gray-500 text-xs sm:text-sm rounded-full px-4 py-2 border border-white/5 cursor-not-allowed"
                disabled
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button (FAB) - Custom Speech Bubble */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-1/2 right-4 sm:right-6 -translate-y-1/2 flex items-center justify-center z-50 group origin-right"
        aria-label="챗봇 열기"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="w-14 h-14 bg-brand text-black rounded-full shadow-[0_0_20px_rgba(255,140,0,0.4)] flex items-center justify-center"
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="w-[72px] h-[72px] relative flex text-brand"
            >
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-[0_0_20px_rgba(255,140,0,0.4)]" fill="currentColor">
                {/* 완벽하게 매끄러운 타원형 몸통 */}
                <ellipse cx="50" cy="48" rx="48" ry="38" />
                {/* 왼쪽 아래로 자연스럽게 빠지는 꼬리 */}
                <path d="M 15 72 Q 8 85 2 95 Q 18 90 32 81 Z" />
              </svg>
              <span className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 z-10 font-black text-[38px] text-black pb-0.5">?</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
