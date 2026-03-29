import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-black text-white flex justify-center items-center">
      <div className="max-w-6xl w-full mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* 회원가입 혜택 안내 영역 */}
        <div className="space-y-8 animate-fade-in-up">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-brand">이영현 교수</span>의 특별한 혜택
            </h2>
            <p className="text-gray-400 text-lg">회원이 되시면 프리미엄 인사이트와 네트워킹 기회를 제공합니다.</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-brand/50 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-white">1. 지식 창고 무제한 열람 📚</h3>
              <p className="text-gray-400">인사이트가 담긴 독점 지식 창고 메뉴를 마음껏 열람하실 수 있습니다.</p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-brand/50 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-white">2. 베스트셀러 증정 이벤트 🎁</h3>
              <p className="text-gray-400">매월 신규 회원 중 3명을 추첨하여 『동두천 장미미용실』 도서를 증정합니다.</p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-brand/50 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-white">3. 오프라인/온라인 특강 혜택 💡</h3>
              <p className="text-gray-400">특강 우선 초대권 및 수강 할인 혜택을 제공해 드립니다.</p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-brand/50 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-white">4. 다이렉트 컨설팅 및 뉴스레터 📩</h3>
              <p className="text-gray-400">1:1 컨설팅 소통 창구 제공 및 엄선된 마케팅 인사이트 뉴스레터를 발송합니다.</p>
            </div>
          </div>
        </div>

        {/* Clerk 회원가입 폼 */}
        <div className="flex flex-col items-center lg:items-end">
          <SignUp />
          <p className="mt-4 text-[13px] text-gray-500 text-center lg:text-right max-w-[400px]">
            회원가입 시 <Link href="/terms" className="underline hover:text-brand transition-colors">서비스 이용약관</Link> 및 <Link href="/privacy" className="underline hover:text-brand transition-colors">개인정보 처리방침</Link>, 특별한 혜택 및 정보(마케팅) 수신에 동의하는 것으로 간주됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}
