export default function TitleSlide() {
  return (
    <div className="w-full max-w-6xl mx-auto text-center">
      <div className="mb-12 flex justify-center">
        <div className="relative w-32 h-32">
          <div className="absolute -left-8 top-0 w-32 h-32 bg-blue-600 transform -rotate-12 opacity-80"
               style={{ clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0 100%)' }}></div>
          <div className="absolute -left-4 top-4 w-32 h-32 bg-teal-400 transform -rotate-12"
               style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)' }}></div>
        </div>
      </div>

      <h1 className="text-7xl font-bold mb-6 leading-tight">
        Your First Step to<br />
        Teaching<br />
        English Online
      </h1>

      <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
        A Simple Introduction for Native Speakers<br />
        Ready to Build a Flexible Business
      </p>
    </div>
  );
}
