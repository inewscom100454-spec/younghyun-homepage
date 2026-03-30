export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-black text-white">
      <div className="max-w-3xl mx-auto animate-fade-in-up">
        <h1 className="text-3xl font-bold mb-8">개인정보 처리방침</h1>
        <div className="prose prose-invert max-w-none text-gray-300 space-y-6 bg-white/5 border border-white/10 p-8 rounded-2xl">
          <p><strong>1. 수집하는 개인정보 항목</strong><br />이영현 교수 공식 홈페이지(이하 "사이트")는 회원가입, 원활한 혜택 안내 및 원활한 서비스 제공을 위해 아래와 같은 개인정보를 원칙적으로 수집하고 있습니다.<br />- 필수항목: 이름, 이메일 주소<br />- 선택항목: 전화번호 등 (추가 기재 시)<br />- 자동 수집 항목: 접속 IP 정보, 쿠키, 방문 기기 식별값 등</p>
          <p><strong>2. 개인정보 수집 목적</strong><br />사이트는 수집한 개인정보를 다음의 핵심 목적을 위해 안전하게 활용합니다.<br />- 회원 관리: 프리미엄 비밀노트 접근 권한 부여 및 본인 식별<br />- 마케팅 활용(특별 혜택 제공): 오프라인 특강 초대 메시지 전송, 뉴스레터 발송, 서적 증정 이벤트 참여 등</p>
          <p><strong>3. 개인정보 보관 기간</strong><br />원칙적으로, 회원의 개인정보 수집 및 이용 목적이 정상적으로 달성된 후에는 해당 정보를 지체 없이 파기 및 완전히 소거합니다. 단, 사용자 본인이 직접 회원 탈퇴를 요청하거나 이메일 마케팅 수신 동의를 철회할 경우 해당 데이터는 즉각 파기 및 이용 중단됩니다.</p>
          <p><strong>4. 보안 의무와 처리 위탁</strong><br />운영자는 이용자의 개인정보를 가장 안전하게 암호화하여 취급하며, 글로벌 스탠다드 인증 솔루션인 Clerk 등 보안 기준이 국제적으로 검증된 데이터 서비스에 회원 인증 관리를 일임하고 있습니다.</p>
          <hr className="border-white/10 my-8" />
          <p className="text-sm text-gray-500">※ 본 처리방침은 사이트 최초 구축에 따른 기본 표준 안내문이며, 나중에 사이트 운영 및 관리를 위한 상세 위탁/처리 방침이 추가되면 고지될 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
}
