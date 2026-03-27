"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Clock, GraduationCap, BookOpen, Footprints, Brain } from "lucide-react";

function AnimatedStat({ start = 0, end, format }: { start?: number, end: number, format: (val: number) => string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(start, end, {
        duration: 3.5,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(val) {
          if (ref.current) {
            ref.current.textContent = format(val);
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, start, end, format]);

  return <div ref={ref} className="text-3xl lg:text-4xl font-black text-brand mb-2 group-hover:scale-105 transition-transform origin-left">{format(start)}</div>;
}

export function Profile() {
  const stats = [
    { 
      start: 0,
      end: 84, 
      format: (val: number) => `IQ ${Math.round(val)}`,
      label: "IQ 84, 165cm, 성적 최하위 등급",
      icon: Brain
    },
    { 
      start: 0,
      end: 30, 
      format: (val: number) => `${Math.round(val)}+`,
      label: "30년+ 광고기획 / 시각디자인 / AI마케팅",
      icon: Clock
    },
    { 
      start: new Date("2000-01-01").getTime(),
      end: new Date("2015-09-09").getTime(),
      format: (val: number) => {
        const d = new Date(val);
        return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
      },
      label: "국내 최초 고려대학교 AI온라인마케팅과정 개설",
      icon: GraduationCap
    },
    { 
      start: 0,
      end: 4, 
      format: (val: number) => Math.round(val).toString(),
      label: "베스트셀러 『동두천 장미미용실』 등 4권의 저서",
      icon: BookOpen
    },
    { 
      start: 0,
      end: 13989, // 3 * 3600 + 53 * 60 + 9
      format: (val: number) => {
        const total = Math.round(val);
        const h = Math.floor(total / 3600);
        const m = Math.floor((total % 3600) / 60);
        const s = total % 60;
        return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
      },
      label: "2024 춘천마라톤 풀코스 완주 기록",
      icon: Footprints
    },
  ];

  return (
    <section id="profile" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-stretch">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h2 className="text-2xl font-bold text-brand uppercase tracking-widest mb-4">WHO'S LEE?</h2>
            <h3 className="text-[32px] sm:text-[36px] lg:text-[44px] font-black text-white mb-8 leading-[1.3] break-keep tracking-tighter">
              세상을 바꿀 원대한 꿈이 있어도<br />
              <span className="text-gray-500">실행 없이는 일장춘몽이다!</span>
            </h3>
            
            <div className="space-y-6 text-gray-300 text-[15px] sm:text-base leading-relaxed font-light break-keep pb-4">
              <p>
                나는 찢어지게 가난한 환경에 태어나 IQ 84, 키순 1번, 성적 최하위 등급의 루져였다.<br />
                대학 진학은 꿈도 꾸지 못했다.
              </p>
              <p>
                그러나 지금은 시각 디자이너로서 35년!<br />
                25세에 창업해 1인기업에서 글로벌 기업까지 업종불문 1,000개 이상 기업들의 광고기획 및 컨설팅 30년!<br />
                업종이 다른 열개 이상의 브랜드를 직접 만들고 성공시켰다.
              </p>
              <p>
                33세에 전문대학에 입학해 4년 6개월 만에 석사학위를 취득했으며, 7년 만에 모교 교수가 되었고,<br />
                온라인 마케팅 입문 1년 만에 업계의 독보적 위치를 만들었으며,<br />
                2015년 국내 최초로 고려대학교 미래교육원에 AI온라인마케팅 최고경영자과정을 개설,<br />
                현재, 전문가과정과 함께 정원 초과, 조기마감의 인기 과정을 운영하고 있다.
              </p>
              <p>
                또한, 『동두천 장미미용실』 등 4권의 책을 집필한 베스트셀러 작가이며,<br />
                골프 티칭 프로 라이선스 보유, 춘천마라톤 풀코스 첫 출전 03:53:09를 기록했다.<br />
                그리고 지금 쉰다섯, 예전부터 배우고 싶었던 상담심리학과 졸업을 앞두고 있다.
              </p>
              <p>
                내게 어제는 중요하지 않았다.<br />
                눈앞에 있는 것에서 최대의 성과를 내려는 방법을 찾고 실행하니 여기까지 왔다.<br />
                나는 이 성공 전략을 『동두천 장미미용실』을 통해 예견된 기적 '3TAI 전략'이라 칭했다.
              </p>
              <div className="pt-4">
                <a 
                  href="https://blog.naver.com/newsad1/221441802457" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3.5 font-bold rounded-full text-[14px] sm:text-[15px] transition-all duration-300 bg-brand text-black hover:bg-brand-hover shadow-[0_0_15px_rgba(255,140,0,0.3)] hover:shadow-[0_0_25px_rgba(255,140,0,0.5)]"
                >
                  이영현 교수 더 알아보기
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col h-full space-y-4 lg:space-y-0 lg:pt-[54px] lg:justify-between"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-[#111111] p-6 lg:p-8 rounded-2xl border border-white/5 hover:border-brand/40 transition-all group relative overflow-hidden flex items-center justify-between">
                <div className="z-10 relative">
                  <AnimatedStat start={stat.start} end={stat.end} format={stat.format} />
                  <div className="text-sm lg:text-base text-gray-400 font-medium break-keep leading-snug">{stat.label}</div>
                </div>
                {/* Right Icon - Orange Line Art */}
                <div className="z-0 opacity-20 group-hover:opacity-60 transition-opacity absolute right-4 lg:right-8 top-1/2 -translate-y-1/2">
                  <stat.icon size={80} className="text-brand stroke-1" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
