export default function FortunePage() {
  return (
    <main className="min-h-screen bg-black pt-20 flex flex-col">
      <div className="flex-1 w-full relative">
        <iframe
          src="/fortune.html"
          className="w-full h-[calc(100vh-80px)] border-0"
          title="이영현 교수의 운칠보삼"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </main>
  );
}
