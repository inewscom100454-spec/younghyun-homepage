import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-[80vh] pt-48 pb-20 bg-black text-white flex flex-col justify-center items-center px-4">
      <div className="mb-10 text-center w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">로그인</h1>
        <hr className="border-white/20 mb-6" />
        <p className="text-gray-400 leading-relaxed">
          환영합니다.<br />
          이영현 교수의 프리미엄 비밀노트를 펼쳐보세요.
        </p>
      </div>
      <div className="w-full max-w-md flex justify-center">
        <SignIn />
      </div>
    </div>
  );
}
