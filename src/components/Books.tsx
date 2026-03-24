"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function Books() {
  const books = [
    { 
      title: "동두천 장미미용실", 
      year: "오드리북스 | 2024.4.15", 
      isNew: true, 
      image: "/book1.jpg", 
      link: "https://product.kyobobook.co.kr/detail/S000212988137" 
    },
    { 
      title: "키워드 전쟁", 
      year: "투윙북스 | 2016.03.21", 
      isNew: false, 
      image: "/book2.jpg", 
      link: "https://www.yes24.com/product/goods/25099950" 
    },
    { 
      title: "이영현의 원맨쇼", 
      year: "한국리더스포럼 | 2016.03.21", 
      isNew: false, 
      image: "/book3.jpg", 
      link: "https://www.yes24.com/product/goods/25099973" 
    },
  ];

  return (
    <section id="books" className="py-24 bg-black">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-brand uppercase tracking-widest mb-4">Books</h2>
          <h3 className="text-4xl font-black text-white">주요 저서</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {books.map((book, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className={`relative rounded-3xl p-[1px] bg-gradient-to-b ${book.isNew ? 'from-brand to-brand/20' : 'from-white/20 to-transparent'} group`}
            >
              <div className="bg-[#0a0a0a] rounded-[23px] h-full p-8 flex flex-col items-center text-center relative overflow-hidden">
                {book.isNew && (
                  <div className="absolute top-6 right-6 bg-brand text-black text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg">
                    BEST
                  </div>
                )}
                {/* Book Cover Image Container */}
                <div className={`relative w-40 h-56 rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] mb-8 border border-white/10 overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-300`}>
                  <Image 
                    src={book.image} 
                    alt={book.title} 
                    fill 
                    className="object-cover" 
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                
                <span className="text-brand font-bold text-sm mb-2">{book.year}</span>
                <h4 className="text-2xl font-bold text-white mb-8">{book.title}</h4>
                
                <a 
                  href={book.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`mt-auto px-8 py-3.5 font-semibold rounded-full text-[15px] transition-all duration-300 w-full ${
                    book.isNew 
                      ? 'bg-brand text-black hover:bg-brand-hover shadow-[0_0_15px_rgba(255,140,0,0.3)] hover:shadow-[0_0_25px_rgba(255,140,0,0.5)]' 
                      : 'bg-[#1a1a1a] text-white hover:bg-[#222222] border border-white/10 hover:border-white/20'
                  }`}
                >
                  자세히 보기
                </a>
              </div>
            </motion.div>
          ))}
        </div>
       </div>
    </section>
  );
}
