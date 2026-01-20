export default function MindsetBasics() {
  const sections = [
    {
      title: 'Believe in Your Edge as a Native',
      subtitle: 'Your natural fluency, accent, and intuitive grasp of idioms/slang give you a strong starting advantage.'
    },
    {
      title: 'Leverage What Comes Naturally',
      subtitle: 'Native speakers excel at pronunciation coaching, natural conversation flow, and cultural insights—perfect for niches like business English, IELTS/TOEIC, or casual speaking practice'
    },
    {
      title: 'Adopt a Growth Mindset',
      subtitle: 'Even natives start with zero reviews—focus on persistence, great first lessons, and building a standout profile to attract and retain students'
    },
    {
      title: 'Stand Out in a Competitive Space',
      subtitle: 'Platforms are open to everyone—success comes from specialization, strong reviews, and marketing yourself (not just being native)'
    },
    {
      title: 'Must-Have Prerequisites',
      subtitle: 'Strong English command (as a native, you\'re set), passion for teaching, reliable setup basics (hardware details coming up)'
    },
    {
      title: 'Highly Recommended',
      subtitle: 'TEFL/TESOL certification (adds professional credibility, helps justify higher rates, and attracts serious students faster)'
    },
    {
      title: 'No Tech Wizardry Required',
      subtitle: 'Basic comfort with video calls and online tools is plenty—focus on teaching skills first!'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold mb-12 text-center">Mindset Basics.</h2>

      <div className="space-y-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 transform transition-all hover:scale-105 hover:border-teal-400"
          >
            <h3 className="text-xl font-bold mb-2 text-teal-400">{section.title}</h3>
            <p className="text-slate-300">{section.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
