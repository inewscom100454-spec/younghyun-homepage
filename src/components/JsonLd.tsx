import { faqData } from "@/lib/faq-data";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://20hyun.com/#person",
    name: "이영현",
    alternateName: ["Lee Young-Hyun", "실행부여가 이영현 교수", "이영현 교수"],
    url: "https://20hyun.com",
    image: "https://20hyun.com/lecture_vertical.jpg",
    jobTitle: [
      "고려대학교 미래교육원 AI온라인마케팅과정 주임교수",
      "세계 유일 실행부여가",
      "한국온라인마케팅연구원 원장",
      "뉴스컴 대표",
      "오드리북스 대표",
    ],
    description:
      "2015년 국내 최초 고려대학교 AI온라인마케팅과정 개설 및 운영. 30년 광고기획자, 15년 AI/SNS마케팅/동기부여 강사, 베스트셀러 저자, 세계 유일 실행부여가 이영현 교수.",
    email: "mailto:newsad1@naver.com",
    telephone: "+82-10-3767-2191",
    worksFor: [
      {
        "@type": "EducationalOrganization",
        name: "고려대학교 미래교육원",
        url: "https://www.kuamp.co.kr",
      },
      {
        "@type": "Organization",
        name: "한국온라인마케팅연구원",
        url: "https://koma.qshop.ai/8nmbuh7f",
      },
      {
        "@type": "Organization",
        name: "뉴스컴",
      },
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "아주대학교 경영대학원 마케팅MBA",
      },
    ],
    knowsAbout: [
      "SNS마케팅 교육",
      "SNS마케팅 강사",
      "온라인마케팅 교육 강사",
      "AI강사",
      "AI마케팅 강사",
      "마케팅 강사",
      "동기부여 강사",
      "자기계발 강사",
      "실행부여가 이영현 교수",
      "고려대학교 AI온라인마케팅과정",
      "행동유도디자인",
      "3TAI 전략",
      "브랜드 기획 및 광고기획",
    ],
    author: [
      {
        "@type": "Book",
        name: "동두천 장미미용실",
        publisher: "오드리북스",
        datePublished: "2024-04-15",
        url: "https://product.kyobobook.co.kr/detail/S000212988137",
      },
      {
        "@type": "Book",
        name: "키워드 전쟁",
        publisher: "투윙북스",
        datePublished: "2016-03-21",
        url: "https://www.yes24.com/product/goods/25099950",
      },
      {
        "@type": "Book",
        name: "이영현의 원맨쇼",
        publisher: "한국리더스포럼",
        datePublished: "2016-03-21",
        url: "https://www.yes24.com/product/goods/25099973",
      },
    ],
    sameAs: [
      "https://blog.naver.com/newsad1",
      "https://www.instagram.com/2_0_hyun_official",
      "https://youtube.com/@tv-mf8nn",
      "https://www.tiktok.com/@usern8ja7qafky",
      "https://www.kuamp.co.kr",
    ],
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": "https://20hyun.com/#course",
    name: "고려대학교 AI온라인마케팅 최고위과정 및 전문가과정",
    alternateName: ["고마최고", "고마전", "고려대학교 미래교육원 AI온라인마케팅과정"],
    description:
      "2015년 국내 대학 최초로 개설 및 운영 중인 고려대학교 미래교육원 AI온라인마케팅 최고위과정(고마최고) 및 전문가과정(고마전). 전국 1,000명 이상의 CEO와 전문가가 수료하고 500건 이상의 실전 마케팅 성공사례를 창출한 명문 AI·SNS·온라인마케팅 교육 과정.",
    url: "https://www.kuamp.co.kr",
    provider: {
      "@type": "CollegeOrUniversity",
      name: "고려대학교 미래교육원",
      sameAs: "https://www.kuamp.co.kr",
    },
    creator: {
      "@type": "Person",
      "@id": "https://20hyun.com/#person",
      name: "이영현 교수",
    },
    about: [
      "AI마케팅",
      "SNS마케팅 교육",
      "온라인마케팅 실무 및 전략",
      "브랜드 마케팅 및 콘텐츠 기획",
    ],
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        name: "고려대학교 AI온라인마케팅 최고위과정 (고마최고)",
        courseMode: "onsite",
        instructor: {
          "@type": "Person",
          "@id": "https://20hyun.com/#person",
          name: "이영현 교수",
        },
      },
      {
        "@type": "CourseInstance",
        name: "고려대학교 AI온라인마케팅 전문가과정 (고마전)",
        courseMode: "onsite",
        instructor: {
          "@type": "Person",
          "@id": "https://20hyun.com/#person",
          name: "이영현 교수",
        },
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://20hyun.com/#faq",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
