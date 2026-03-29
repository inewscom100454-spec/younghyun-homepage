import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://m.blog.naver.com/newsad1/221441802457" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-gray-500 hover:text-white transition-colors h-6" 
            aria-label="Naver Blog"
          >
            <span className="font-black text-[17px] tracking-tight lowercase">blog</span>
          </a>
          <a 
            href="https://www.instagram.com/2_0_hyun_official?igsh=YWVodXZtd3Rxc3J0" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-white transition-colors" 
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a 
            href="https://youtube.com/@tv-mf8nn?si=0VUTSOK0GnKt20V2" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-white transition-colors" 
            aria-label="YouTube"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
          <a 
            href="https://www.tiktok.com/@usern8ja7qafky?_r=1&_t=ZS-94voRDvOror" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-white transition-colors" 
            aria-label="TikTok"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
            </svg>
          </a>
        </div>
        
        <div className="flex justify-center items-center gap-4 text-[13px] text-gray-500 mb-6">
          <Link href="/terms" className="hover:text-brand transition-colors">이용약관</Link>
          <span className="text-gray-800">|</span>
          <Link href="/privacy" className="hover:text-brand transition-colors font-bold">개인정보처리방침</Link>
        </div>
        
        <p className="text-gray-500 text-sm mb-2">
          © {new Date().getFullYear()} 이영현 교수. All rights reserved. | Stop Thinking, Start Acting.
        </p>
        <p className="text-gray-400 text-sm">
          LEE YOUNG-HYUN | 82-10-3767-2191 | newsad1@naver.com
        </p>
      </div>
    </footer>
  );
}
