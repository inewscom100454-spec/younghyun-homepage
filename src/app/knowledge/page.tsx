import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Eye } from "lucide-react";

export default async function KnowledgePage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-[80vh] pt-48 pb-20 bg-black text-white px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl animate-fade-in-up text-left">
        
        <div className="mb-10 text-center w-full">
          <h1 className="text-3xl font-bold mb-4">성공의 비밀노트</h1>
          <hr className="border-white/20 mb-6" />
          <p className="text-gray-400 leading-relaxed text-[15px] break-keep">
            환영합니다, <strong className="text-white">{user.firstName || "회원"}</strong>님!<br />
            오직 회원분들에게만 제공되는 프리미엄 마케팅 인사이트 공간입니다.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-3 text-brand break-keep">각종 모임에서 인간관계 못 맺고 좋은 인맥 못 만드는 10가지 이유</h2>
            <div className="flex items-center gap-3 text-gray-400 mb-4 text-sm">
              <span>2026. 03. 29</span>
              <div className="flex items-center gap-1.5" title="조회수">
                <Eye size={14} />
                <span>999</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-[15px] break-keep">
              대한민국 사람들은 모임을 정말 좋아한다. 세 사람만 모여도 모임을 만든다. 나이가 같으면 띠 모임, 아이들을 빌미로 학부모 모임, 같은 이름 모임, 동창 모임, 취미 모임, 사교 모임, 스터디 모임 등 헤아릴 수가 없다. 인터넷이...
            </p>
            <a href="https://blog.naver.com/newsad1/222806373637" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-brand font-medium hover:underline text-sm">본문 계속 읽기 &rarr;</a>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-3 text-brand">단 한 문장으로 반백년의 삶을 반성하게 한 책!</h2>
            <div className="flex items-center gap-3 text-gray-400 mb-4 text-sm">
              <span>2026. 03. 15</span>
              <div className="flex items-center gap-1.5" title="조회수">
                <Eye size={14} />
                <span>999</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              카말라라는 유명한 기생인 한 여인을 만나고 사랑에 빠진다. 만난 첫날, 시 한수 읊어주고 입맞춤에 성공하는 싯다르타. 거지와 다름없는 싯다르타. 그러나...
            </p>
            <a href="https://blog.naver.com/newsad1/221663359001" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-brand font-medium hover:underline text-sm">본문 계속 읽기 &rarr;</a>
          </div>
        </div>

      </div>
    </div>
  );
}
