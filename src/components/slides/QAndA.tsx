export default function QAndA() {
  const recapItems = [
    "You've now discovered the key reasons to teach online (income potential, flexibility, helping others)",
    "Mastered mindset basics – leverage your native fluency and passion",
    "Know the essential hardware for professional lessons",
    "Familiar with core tools (Kami, Google Drive, Linguahouse, Engoo)",
    {
      main: "Identified the main platforms to find students:",
      sub: [
        "Build your own business: Preply.com & Classgap.com",
        "Work for companies: Explore jobs via TeacherRecord.com"
      ]
    },
    "Learnt to focus on high-demand niches like conversation, business English, IELTS, TOEIC"
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-5xl font-bold mb-8">Recap</h2>
        <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 transform transition-all hover:scale-105 hover:border-teal-400">
          <ul className="space-y-4">
            {recapItems.map((item, index) => (
              <li key={index} className="flex items-start text-lg">
                <span className="text-teal-400 mr-4 text-2xl">•</span>
                <div>
                  {typeof item === 'string' ? (
                    <span>{item}</span>
                  ) : (
                    <>
                      <span>{item.main}</span>
                      <ul className="ml-6 mt-2 space-y-1">
                        {item.sub.map((subItem, subIndex) => (
                          <li key={subIndex} className="text-slate-300">○ {subItem}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-7xl font-bold text-teal-400">Q&A</h2>
        <p className="text-2xl text-slate-300 mt-6">Questions? Let's discuss your path forward!</p>
      </div>
    </div>
  );
}
