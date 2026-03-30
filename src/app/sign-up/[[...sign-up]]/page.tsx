import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-[80vh] pt-48 pb-20 bg-black text-white flex flex-col justify-center items-center px-4">
      <div className="mb-10 text-center w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-4">회원가입</h1>
        <hr className="border-white/20 mb-6" />
        <p className="text-gray-400 leading-relaxed text-[15px] break-keep">
          환영합니다.<br />
          회원가입을 하시면 이영현 교수의 강좌 할인 혜택 및 비밀노트 열람, 뉴스레터 등을 받아 보실 수 있습니다.<br />
          프리미엄 혜택을 누려보세요.
        </p>
      </div>
      <div className="w-full max-w-md flex flex-col items-center">
        <SignUp />
        <p className="mt-4 text-[13px] text-gray-500 text-center max-w-[400px]">
          회원가입 시 <Link href="/terms" className="underline hover:text-brand transition-colors">서비스 이용약관</Link> 및 <Link href="/privacy" className="underline hover:text-brand transition-colors">개인정보 처리방침</Link>, 특별한 혜택 및 정보(마케팅) 수신에 동의하는 것으로 간주됩니다.
        </p>
      </div>
    </div>
  );
}
