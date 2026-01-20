export default function AudienceChildren() {
  const tips = [
    'Keep Lessons Super Fun & High-Energy — Short bursts of excitement with lots of smiles, exaggerated expressions, and enthusiasm.',
    'Use Lots of Props & Real Objects — Everyday items, toys, puppets, silly hats/glasses/scarves, or flashcards to make vocabulary visual and memorable.',
    'Incorporate Movement & TPR (Total Physical Response) — Get kids acting out words/actions (stand up/sit down, jump, mime verbs).',
    'Play Interactive Games Every Lesson — Simple, no-prep games like Simon Says, charades/miming, Pictionary (draw on screen), or "What\'s Missing?"',
    'Sing Songs & Chants with Repetition — Catchy kids\' songs, rhymes, or chants (repeat choruses) for natural pronunciation, rhythm, and vocabulary retention.',
    'Tell Stories with Props & Voices — Use picture books, puppets, or surprise "story boxes" with character voices and dramatic effects.',
    'Fun & Changing Virtual Backgrounds — Switch themed backgrounds (zoo, space, underwater) to match topics and keep visual interest high.',
    'Praise & Rewards Often — Quick positive feedback, virtual stickers/stars, or "winner" moments to build confidence and motivation.'
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold mb-8 text-center">Audience types and what works best</h2>
      <h3 className="text-4xl font-bold mb-12 text-center text-blue-400">Children (5-13)</h3>

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
