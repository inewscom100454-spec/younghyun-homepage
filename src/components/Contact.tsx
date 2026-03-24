"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Briefcase, Medal, BookOpen, Mic } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-brand/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Changed to max-w-7xl to match WHO'S LEE section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-brand uppercase tracking-widest mb-4">Story & History</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-none break-keep mb-[26px]">
              이영현 교수의 <span className="text-brand">교육 및 사업 관련 주요 이력</span>
            </h3>
            <p className="text-xl sm:text-2xl text-gray-300 font-medium leading-[1.3] break-keep">
              IQ 84, 가난하고 공부 못하는 산골 소년의 성공 스토리로<br />
              <span className="text-white font-bold block mt-[10px]">당신의 삶과 귀사에 터닝포인트가 되어 드리겠습니다.</span>
            </p>
          </motion.div>
        </div>

        <div className="space-y-12">
          
          {/* Main Comprehensive Profile Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full bg-[#111] p-8 md:p-12 lg:p-16 rounded-[2.5rem] border border-white/5 shadow-2xl"
          >
            <h6 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-12 text-center tracking-wide flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
              <span>이영현</span>
              <span className="text-brand font-light text-base sm:text-xl">|</span>
              <span>LEE YOUNG-HYUN</span>
              <span className="text-brand font-light text-base sm:text-xl hidden md:inline">|</span>
              <span>010 3767 2191</span>
              <span className="text-brand font-light text-base sm:text-xl hidden md:inline">|</span>
              <span className="text-brand">newsad1@naver.com</span>
            </h6>
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              
              {/* Left Column: Photo & Extra Activities */}
              <div className="w-full lg:w-[35%] xl:w-1/3 flex flex-col gap-10">
                {/* Photo Area */}
                <div className="w-full aspect-video sm:aspect-square lg:aspect-auto lg:h-[220px] xl:h-[222px] rounded-3xl overflow-hidden relative border border-white/10 group bg-[#1a1a1a] shrink-0 shadow-xl">
                  <Image 
                    src="/lecture_vertical.jpg" 
                    alt="이영현 교수 특강" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                </div>

                {/* Extra Activities (No Box) */}
                <div className="flex-1 flex flex-col gap-4 text-base sm:text-[17px] leading-normal break-keep text-gray-300 font-medium border-t border-white/10 pt-6">
                  <h5 className="text-2xl font-bold text-white mb-4 flex items-center gap-3"><Mic className="w-7 h-7 text-brand" />특강 / 심사위원 / 언론</h5>
                  <div>
                    <h6 className="font-bold text-brand mb-1">▶ 특강</h6>
                    <p className="text-gray-300">고위공직자, 서울대학교, 고려대학교, 전국 상공회의소 최고경영자과정 및 기업체, 지자체 특강 다수</p>
                  </div>
                  <div>
                    <h6 className="font-bold text-brand mb-1">▶ 심사위원</h6>
                    <p className="text-gray-300">중소벤처기업부, 인천국제공항공사, 남북교류협력지원협회 등</p>
                  </div>
                  <div className="mt-auto pt-4">
                    <h6 className="font-bold text-brand mb-1">▶ 언론</h6>
                    <ul className="text-gray-300 space-y-0.5">
                      <li>- 월간식당 전문가 인터뷰</li>
                      <li>- 창업&프랜차이즈 전문가 인터뷰</li>
                      <li>- 창업&프랜차이즈 마케팅 컬럼 연재</li>
                      <li>- 중구신문, 월간리더스매거진 스페셜 인터뷰</li>
                      <li>- KBS1 라디오 일요공감 생방송 인터뷰</li>
                      <li>- MBC, YTN, 사이언스TV 출연</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* History Text Area */}
              <div className="w-full lg:w-[65%] xl:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 text-gray-300 font-medium content-between">
                  
                  {/* 학력 */}
                  <div>
                    <h5 className="text-2xl font-bold text-white mb-4 flex items-center gap-3"><GraduationCap className="w-7 h-7 text-brand" />학력 및 교원</h5>
                    <ul className="space-y-2 text-base sm:text-[17px] leading-snug break-keep">
                      <li><span className="text-brand mr-2">▶</span><strong className="text-white">동두천 고등학교</strong> 졸업</li>
                      <li><span className="text-brand mr-2">▶</span><strong className="text-white">아주대학교 마케팅MBA</strong> 석사 졸업</li>
                      <li><span className="text-brand mr-2">▶</span><strong className="text-white">한양사이버대 상담심리학</strong> 4학년 재학중</li>
                      <li className="text-gray-400 mt-1.5">- 경희대학교 초빙교수</li>
                      <li className="text-gray-400">- 세종대 바이럴마케팅 전문가과정 주임교수</li>
                      <li className="text-gray-400">- 경민대학교 겸임교수</li>
                    </ul>
                  </div>

                  {/* 수상 및 사회활동 */}
                  <div>
                    <h5 className="text-2xl font-bold text-white mb-4 flex items-center gap-3"><Medal className="w-7 h-7 text-brand" />수상 및 사회활동</h5>
                    <ul className="space-y-2 text-base sm:text-[17px] leading-snug break-keep text-gray-300">
                      <li>- 2024년 동두천시 명예시장</li>
                      <li>- 2018~2021 사|노원구소상공인회 이사장</li>
                      <li>- 2017년 모범납세자 수상</li>
                      <li>- 2009년 우수기업인 서울시장상 표창</li>
                      <li>- 2008년 우수기업인 중구청장상 표창</li>
                      <li>- 2011년 학습용 타투스티커 발명특허</li>
                    </ul>
                  </div>

                  {/* 교육 */}
                  <div className="flex flex-col h-full">
                    <h5 className="text-2xl font-bold text-white mb-4 flex items-center gap-3"><BookOpen className="w-7 h-7 text-brand" />주요 교육 과정 운영 현황</h5>
                    <ul className="flex flex-col flex-1 justify-between gap-2 text-base sm:text-[17px] leading-snug break-keep">
                      <li className="text-white font-bold mb-1.5">현) 고려대학교 미래교육원 AI온라인마케팅과정 운영 중</li>
                      <li className="pl-4 text-gray-300">- 최고위과정 (1기~19기)</li>
                      <li className="pl-4 text-gray-300">- 전문가과정 (1기~19기)</li>
                      <li className="pl-4 text-gray-300 mb-3">- 교육산업 전문가과정 1기</li>
                      
                      <li className="text-gray-400 pt-1.5">- 외식경영(1기)과정 개설 운영</li>
                      <li className="text-gray-400">- 코마윙(1~2기)</li>
                      <li className="text-gray-400">- 광고콘텐츠제작과정(1~2기)</li>
                      <li className="text-gray-400">- 교촌치킨, 교촌F&B 창업 교육 전임강사</li>
                      <li className="text-gray-400">- 원할머니보쌈, 원앤원㈜ 사내교육</li>
                      <li className="text-gray-400">- 인천인재평생교육진흥원 대표 강사</li>
                      <li className="text-gray-400">- 화성시 온라인마케팅지도사과정(10주)</li>
                    </ul>
                  </div>

                  {/* 사업 */}
                  <div className="flex flex-col h-full">
                    <h5 className="text-2xl font-bold text-white mb-4 flex items-center gap-3"><Briefcase className="w-7 h-7 text-brand" />사업 경영 이력</h5>
                    <ul className="flex flex-col flex-1 justify-between gap-2 text-base sm:text-[17px] leading-snug break-keep">
                      <li>현) <strong className="text-white">한국온라인마케팅연구원</strong> 원장</li>
                      <li>현) <strong className="text-white">뉴스컴</strong> (광고기획 30년 경영) 대표</li>
                      <li>현) 16년간 국내 1위 타투스티커 <strong className="text-white">러브리타투</strong></li>
                      <li>현) <strong className="text-white">1프로카페 / 1프로마켓</strong> 운영</li>
                      <li>현) <strong className="text-white">오드리북스</strong> 대표</li>
                      <li className="text-gray-400 mt-1.5">- 세계1위 세라믹프라이팬 그린팬vip몰 운영</li>
                      <li className="text-gray-400">- 머드수/빛톡코리아 화장품 쇼핑몰</li>
                      <li className="text-gray-400">- 피부관리실 명작 운영</li>
                      <li className="text-gray-400">- 농수산물 유통 쇼핑몰</li>
                      <li className="text-gray-400">- 캐릭터 시계 쇼핑몰 꿈꾸는 시계나라</li>
                      <li className="text-gray-400">- 365일 영업사원 찍찍이달력</li>
                      <li className="text-gray-400">- 어린이 캐릭터 가방, 1프로기프트 등</li>
                    </ul>
                  </div>

              </div>
            </div>

            {/* Injected Call to Action Footer */}
            <div className="mt-11 md:mt-14 pt-12 md:pt-14 border-t border-white/10 text-center flex flex-col items-center justify-center relative z-20">
              <a 
                href="https://forms.gle/9v98cWQkiN79ut919" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand text-black font-black text-xl rounded-full hover:bg-brand-hover shadow-[0_0_20px_rgba(255,140,0,0.3)] hover:shadow-[0_0_30px_rgba(255,140,0,0.5)] transition-all transform hover:-translate-y-1"
              >
                특강 및 협업 제안
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <p className="mt-6 text-gray-500 text-sm">클릭 시 제안을 남길 수 있는 구글 폼으로 이동합니다.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
