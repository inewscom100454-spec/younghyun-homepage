"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Megaphone, ShoppingBag } from "lucide-react";

export function Business() {
  const businesses = [
    { 
      name: "한국온라인마케팅연구원", 
      desc: "AI 마케팅 연구, 자격증, 출판, 강사 파견 등",
      link: "https://koma.qshop.ai/8nmbuh7f",
      image: "/media__1774164458778.jpg"
    },
    { 
      name: "뉴스컴", 
      desc: "종합 광고 기획 및 브랜드 개발 등",
      link: "https://blog.naver.com/newsad1/220208313890",
      image: "/media__1774164458639.jpg",
      icon: Megaphone
    },
    { 
      name: "러브리타투", 
      desc: "국내 1위 행사용 타투스티커 제작 브랜드",
      link: "https://www.lovelytattoo.co.kr/",
      image: "/media__1774165123221.jpg"
    },
    { 
      name: "1프로마켓", 
      desc: "약국 판매 스킨/바디/헤어/건기식 등",
      link: "https://smartstore.naver.com/1promarket",
      image: "/media__1774164458746.jpg",
      icon: ShoppingBag
    },
    { 
      name: "1프로카페", 
      desc: "#노원공간대여 #모임장소 40명 수용",
      link: "https://naver.me/GCvfLV8m",
      image: "/media__1774164458661.jpg"
    },
    { 
      name: "고려대학교 AI온라인마케팅과정", 
      desc: "최고위20기/전문가20기/교육산업전문가1기",
      link: "https://www.kuamp.co.kr/",
      image: "/media__1774165143721.jpg"
    }
  ];

  return (
    <section id="business" className="py-24 bg-black">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-brand uppercase tracking-widest mb-4">Business</h2>
          <h3 className="text-4xl font-black text-white">비즈니스 포트폴리오</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {businesses.map((biz, idx) => (
            <motion.a
              key={idx}
              href={biz.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-[#111111] p-8 lg:p-10 rounded-3xl border border-white/5 hover:border-brand/40 hover:shadow-[0_0_20px_rgba(255,140,0,0.15)] transition-all group flex flex-col justify-start items-center text-center min-h-[280px]"
            >
              {biz.image ? (
                <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 border border-white/10 group-hover:scale-105 transition-transform bg-[#1a1a1a] flex-shrink-0 relative">
                  <Image src={biz.image} alt={biz.name} fill className="object-cover" sizes="96px" />
                </div>
              ) : (
                <div className="w-24 h-24 rounded-2xl bg-[#1a1a1a] text-brand flex items-center justify-center mb-6 border border-white/10 group-hover:bg-brand group-hover:text-black transition-colors flex-shrink-0">
                  {biz.icon ? <biz.icon size={40} className="stroke-[1.5]" /> : <span className="font-bold text-3xl">{biz.name.charAt(0)}</span>}
                </div>
              )}
              
              <h4 className="text-lg lg:text-xl font-bold text-white mb-3 group-hover:text-brand transition-colors break-keep">{biz.name}</h4>
              <p className="text-sm lg:text-[15px] text-gray-400 font-medium leading-relaxed break-keep">{biz.desc}</p>
            </motion.a>
          ))}
        </div>
       </div>
    </section>
  );
}
