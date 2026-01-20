export default function AudienceProfessionals() {
  const tips = [
    'Lead the Conversation — Guide discussions confidently with clear structure; model professional flow, small talk, and transitioning to business topics',
    'Provide Real Value-Add — Tailor lessons to students\' jobs/industry (e.g., role-plays for meetings, negotiations, emails, presentations); deliver practical, immediately usable skills and feedback that boosts career goals',
    'Dress to Impress — Wear professional/business attire (smart casual or formal) on camera—mirrors corporate expectations and builds credibility with busy executives',
    'Use a Neutral Background — Keep virtual background clean and minimal (plain wall, subtle office setup, or professional blur)—avoids distractions and maintains a polished, boardroom-like feel',
    'Create a Private Working Space — Teach from a quiet, dedicated area with no interruptions—ensures focus and shows respect for students\' time and professionalism',
    'Be Punctual & Structured — Start/end on time; use clear agendas/objectives—professionals appreciate efficiency and goal-oriented lessons',
    'Incorporate Role-Plays & Authentic Scenarios — Simulate real workplace situations (e.g., client calls, presentations, negotiations)—gives hands-on practice with corrections on fluency, idioms, and cultural nuances',
    'Focus on Productive Skills — Prioritize speaking/writing practice (e.g., presentations, debates, email drafting)—with targeted feedback to help them communicate confidently in global teams'
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold mb-8 text-center">Audience types and what works best</h2>
      <h3 className="text-4xl font-bold mb-12 text-center text-teal-400">Professionals</h3>

      <div className="space-y-3">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-sm transform transition-all hover:scale-105 hover:border-teal-400"
          >
            <p className="text-slate-200">{tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
