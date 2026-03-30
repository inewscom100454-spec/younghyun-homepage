"use client";

import { useState, useEffect } from "react";
import { Eye } from "lucide-react";

interface Props {
  id: string;
  title: string;
  date: string;
  initialViews: number;
  previewText: string;
  link: string;
}

export function KnowledgeCard({ id, title, date, initialViews, previewText, link }: Props) {
  const [views, setViews] = useState(initialViews);

  // 컴포넌트 마운트 시 로컬스토리지에서 기존 조회수를 불러옵니다.
  useEffect(() => {
    const saved = localStorage.getItem(`views_${id}`);
    if (saved) {
      setViews(parseInt(saved, 10));
    } else {
      setViews(initialViews);
    }
  }, [id, initialViews]);

  // 박스 전체 클릭 시 호출되는 함수: 조회수를 1 증가시키고 새 창으로 링크를 엽니다.
  const handleClick = () => {
    const newViews = views + 1;
    setViews(newViews);
    localStorage.setItem(`views_${id}`, newViews.toString());
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-white/5 border border-white/10 p-6 rounded-2xl cursor-pointer hover:bg-white/10 hover:border-brand/50 transition-all duration-300 group flex flex-col items-start"
    >
      <h2 className="text-2xl font-bold mb-3 text-brand group-hover:underline break-keep">{title}</h2>
      
      <div className="flex items-center gap-3 text-gray-400 mb-4 text-sm">
        <span>{date}</span>
        <span className="text-white/20">|</span>
        <div className="flex items-center gap-1.5" title="조회수">
          <Eye size={14} />
          <span>{views.toLocaleString()}</span>
        </div>
      </div>
      
      <p className="text-gray-300 leading-relaxed text-[15px] break-keep">
        {previewText}
      </p>
      
      <div className="mt-4 text-brand font-medium group-hover:underline text-sm">
        본문 계속 읽기 &rarr;
      </div>
    </div>
  );
}
