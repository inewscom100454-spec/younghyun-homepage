import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { KnowledgeCard } from "@/components/KnowledgeCard";

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
          <KnowledgeCard 
            id="post-reading-between-lines"
            title="행간 뜻 알아차리고 인간관계 성공하는 법"
            date="2026. 03. 30"
            initialViews={999}
            previewText="굳이 내 직업이 아니어도 대면보다 소셜미디어를 더 많이 접하는 세상인 만큼, 행간을 읽는 능력은 정말 중요하다. ..."
            link="https://blog.naver.com/newsad1/223022811666"
          />

          <KnowledgeCard 
            id="post-success-law"
            title="무조건 성공하는 법칙?"
            date="2026. 03. 30"
            initialViews={999}
            previewText="얼마 전 로버트 치알디니의 설득의 심리학 리뷰를 하면서 사회적 증거의 법칙에 대해 포스팅한 적이 있다. '개인은 대중의 선택을 의심 없이 따른다'라는 법칙이다."
            link="https://blog.naver.com/newsad1/222911057847"
          />

          <KnowledgeCard 
            id="post-human-relations"
            title="각종 모임에서 인간관계 못 맺고 좋은 인맥 못 만드는 10가지 이유"
            date="2026. 03. 29"
            initialViews={999}
            previewText="대한민국 사람들은 모임을 정말 좋아한다. 세 사람만 모여도 모임을 만든다. 나이가 같으면 띠 모임, 아이들을 빌미로 학부모 모임, 같은 이름 모임, 동창 모임, 취미 모임, 사교 모임, 스터디 모임 등 헤아릴 수가 없다. 인터넷이..."
            link="https://blog.naver.com/newsad1/222806373637"
          />

          <KnowledgeCard 
            id="post-siddhartha"
            title="단 한 문장으로 반백년의 삶을 반성하게 한 책!"
            date="2026. 03. 15"
            initialViews={999}
            previewText="카말라라는 유명한 기생인 한 여인을 만나고 사랑에 빠진다. 만난 첫날, 시 한수 읊어주고 입맞춤에 성공하는 싯다르타. 거지와 다름없는 싯다르타. 그러나..."
            link="https://blog.naver.com/newsad1/221663359001"
          />
        </div>

      </div>
    </div>
  );
}
