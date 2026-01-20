export default function SupportingTools() {
  const tools = [
    {
      name: 'Linguahouse',
      url: 'www.linguahouse.com',
      items: [
        'Lesson Plans - Conversation & Business',
        'Pre planned lesson materiel - IELTS, TOEIC'
      ],
      color: 'bg-purple-500'
    },
    {
      name: 'Engoo',
      url: 'www.engoo.com',
      items: [
        'Lesson Plans - Daily news & conversation',
        'Free'
      ],
      color: 'bg-purple-500'
    },
    {
      name: 'Kami',
      url: 'web.kamihq.com',
      items: [
        'Annotation software',
        'Free'
      ],
      color: 'bg-purple-500'
    },
    {
      name: 'Google Drive',
      url: 'drive.google.com',
      items: [
        'Lesson storage',
        'Share with students'
      ],
      color: 'bg-purple-500'
    },
    {
      name: 'PayPal',
      url: 'paypal.com',
      items: [
        'Receive payments'
      ],
      color: 'bg-purple-500'
    },
    {
      name: 'Payoneer',
      url: 'payoneer.com',
      items: [
        'Receive payments'
      ],
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold mb-12 text-center">Supporting Tools</h2>

      <div className="space-y-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex items-center gap-6"
          >
            <div className={`${tool.color} text-white px-8 py-4 rounded-r-full font-bold text-xl min-w-[280px] text-center transform transition-all hover:scale-105`}>
              {tool.name}
            </div>
            <div className="flex-1">
              <div className="text-blue-400 mb-2">
                <a href={`https://${tool.url}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {tool.url}
                </a>
              </div>
              <ul className="space-y-1">
                {tool.items.map((item, idx) => (
                  <li key={idx} className="text-slate-300">• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
