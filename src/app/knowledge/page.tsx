import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function KnowledgePage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-black text-white px-4">
      <div className="max-w-4xl mx-auto animate-fade-in-up">
        
        <div className="bg-brand/10 border border-brand/20 p-8 rounded-3xl mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">당신의 지식 창고</h1>
          <p className="text-xl text-gray-300">
            환영합니다, {user.firstName || "회원"}님! 오직 회원분들에게만 제공되는 프리미엄 마케팅 인사이트 공간입니다.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-3 text-brand">최신 인사이트: AI 시대의 콘텐츠 전략</h2>
            <p className="text-gray-400 mb-4 text-sm">2026. 03. 29</p>
            <p className="text-gray-300 leading-relaxed">
              AI가 작성하는 본문 정보보다 중요한 것은 결국 '실행'과 '경험'입니다. 
              온라인 마케팅에서 살아남기 위해서는 기존의 틀을 깨고 초개인화된 맞춤형 콘텐츠를...
              (회원 전용 프리미엄 콘텐츠 영역 샘플입니다.)
            </p>
            <button className="mt-4 text-brand font-medium hover:underline text-sm">본문 계속 읽기 &rarr;</button>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-3 text-brand">이달의 추천 도서 및 리뷰</h2>
            <p className="text-gray-400 mb-4 text-sm">2026. 03. 15</p>
            <p className="text-gray-300 leading-relaxed">
              이번달 추천 도서는 베스트셀러 『동두천 장미미용실』입니다. 스토리텔링이 비즈니스에 어떻게 
              적용될 수 있는지에 대한 실전 가이드를 요약해 보았습니다...
            </p>
            <button className="mt-4 text-brand font-medium hover:underline text-sm">본문 계속 읽기 &rarr;</button>
          </div>
        </div>

      </div>
    </div>
  );
}
