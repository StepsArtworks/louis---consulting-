export default function Agenda() {
  const items = [
    'Why online Teaching?',
    'Mindset Basics.',
    'Hardware essentials.',
    'Platforms to find Students.',
    'Supporting tools.',
    'Next Steps and Q&A.'
  ];

  return (
    <div className="w-full max-w-5xl mx-auto text-center">
      <h2 className="text-6xl font-bold mb-6">Agenda for Today</h2>
      <p className="text-2xl text-slate-300 mb-16">Your roadmap to building a flexible teaching career.</p>

      <div className="space-y-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 transform transition-all hover:scale-105 hover:border-teal-400"
          >
            <p className="text-2xl font-medium">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
