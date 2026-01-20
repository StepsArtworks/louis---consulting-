export default function WhoAmI() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-8 flex items-center">
        <div className="relative mr-6">
          <div className="w-16 h-16 bg-blue-600 transform -rotate-12 opacity-80"
               style={{ clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0 100%)' }}></div>
          <div className="absolute top-2 left-2 w-16 h-16 bg-teal-400 transform -rotate-12"
               style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)' }}></div>
        </div>
      </div>

      <h2 className="text-6xl font-bold mb-12">Who am I?</h2>

      <div className="bg-slate-800/50 rounded-2xl p-10 border border-slate-700 transform transition-all hover:scale-105 hover:border-teal-400">
        <h3 className="text-3xl font-semibold mb-8 text-teal-400">
          Louis – Native English Speaker & Online English Business Builder
        </h3>

        <ul className="space-y-6 text-xl">
          <li className="flex items-start">
            <span className="text-teal-400 mr-4 text-2xl">•</span>
            <span>Johannesburg-based native English teacher (fluent, clear accent from South Africa)</span>
          </li>
          <li className="flex items-start">
            <span className="text-teal-400 mr-4 text-2xl">•</span>
            <span>7+ years full-time online teaching experience</span>
          </li>
          <li className="flex items-start">
            <span className="text-teal-400 mr-4 text-2xl">•</span>
            <span>Specialized in high-demand niches: Conversation, Business English, IELTS, TOEIC</span>
          </li>
          <li className="flex items-start">
            <span className="text-teal-400 mr-4 text-2xl">•</span>
            <span>Built my independent online teaching business from scratch</span>
          </li>
          <li className="flex items-start">
            <span className="text-teal-400 mr-4 text-2xl">•</span>
            <span>Passionate about helping other native speakers launch their own flexible, rewarding online teaching careers</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
