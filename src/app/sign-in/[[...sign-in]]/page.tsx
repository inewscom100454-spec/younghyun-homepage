import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-[80vh] pt-32 pb-20 bg-black text-white flex flex-col justify-center items-center px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">로그인</h1>
        <p className="text-gray-400">이영현 교수의 프리미엄 지식 창고에 오신 것을 환영합니다.</p>
      </div>
      <div className="w-full max-w-md flex justify-center animate-fade-in-up">
        <SignIn />
      </div>
    </div>
  );
}
