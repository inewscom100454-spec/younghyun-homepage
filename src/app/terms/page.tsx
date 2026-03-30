export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-black text-white">
      <div className="max-w-3xl mx-auto animate-fade-in-up">
        <h1 className="text-3xl font-bold mb-8">서비스 이용약관</h1>
        <div className="prose prose-invert max-w-none text-gray-300 space-y-6 bg-white/5 border border-white/10 p-8 rounded-2xl">
          <p><strong>제1조 (목적)</strong><br />본 약관은 이영현 교수 공식 홈페이지(이하 "사이트")가 제공하는 제반 서비스의 이용과 관련하여 운영자와 회원과의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
          <p><strong>제2조 (회원의 정의)</strong><br />"회원"이란 사이트에 접속하여 본 약관에 따라 소정의 회원가입 절차를 완료하고, 사이트가 제공하는 프리미엄 비밀노트 및 관련 정기 정보(마케팅 및 혜택 알림 포함)를 수신 및 이용하는 자를 말합니다.</p>
          <p><strong>제3조 (서비스의 제공)</strong><br />사이트는 회원에게 다음과 같은 서비스를 우선적으로 제공합니다.<br />1. 독점 비밀노트 메뉴 열람 권한<br />2. 서적 및 교재 증정 이벤트 참여 기회 부여<br />3. 오프라인/온라인 특강 시 우선 초대 및 수강 혜택 제공<br />4. 특별한 마케팅 인사이트 뉴스레터 발송</p>
          <p><strong>제4조 (효력 및 변경)</strong><br />운영자는 불가피한 사정이 있을 경우 서비스에 관련한 본 약관을 적법한 절차 내에서 개정할 수 있으며, 관련 기능 및 혜택은 상황에 따라 예고 없이 변경될 수 있습니다.</p>
          <p><strong>제5조 (회원 탈퇴 및 자격 상실)</strong><br />1. 회원은 로그인 후 계정 관리 메뉴(프로필 아이콘)를 통하거나, 홈페이지 우측 하단 챗봇, 또는 공식 관리자에게 연락하여 언제든지 자유롭게 회원 탈퇴를 요청할 수 있으며, 이 경우 운영자는 지체 없이 탈퇴 및 파기 처리합니다.<br />2. 회원이 타인의 권리를 침해하거나 서비스 운영을 고의로 방해하는 등 불법적인 목적으로 사이트를 이용하는 경우, 사전 통보 없이 회원 자격을 상실(강제 탈퇴)시킬 수 있습니다.</p>
          <hr className="border-white/10 my-8" />
          <p className="text-sm text-gray-500">※ 본 약관은 서비스 최초 운영을 위한 표준 양식이며, 추후 운영 방침 확장 및 구체화에 따라 보다 세부적인 조항이 보완되거나 갱신될 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
}
