export default function HardwareEssentials() {
  const items = [
    {
      title: 'Reliable Computer/Laptop',
      description: 'Modern laptop or desktop (at least 8GB RAM recommended for smooth video calls)'
    },
    {
      title: 'High-Quality Webcam',
      description: 'Built-in HD (1080p) or external HD webcam for clear video—students need to see your face and expressions sharply'
    },
    {
      title: 'Noise-Canceling Headset/Microphone',
      description: 'Professional headset with mic (or separate USB mic) for crystal-clear audio—no background noise distractions'
    },
    {
      title: 'Stable High-Speed Internet',
      description: 'Broadband connection (minimum 20 Mbps download & 10 Mbps upload, wired preferred for reliability)'
    },
    {
      title: 'Good Lighting Setup',
      description: 'Natural window light or ring light/desk lamp to look professional and well-lit (avoids shadows/dark face)'
    },
    {
      title: 'Quiet Teaching Space',
      description: 'Dedicated, distraction-free area (home office, bedroom corner) with neutral background'
    },
    {
      title: 'Optional but Helpful',
      description: 'External accessories like laptop stand (for eye-level camera) or backup power (e.g., for load shedding in SA)'
    },
    {
      title: 'Meeting Etiquette',
      description: 'Dress appropriately and maintain professional appearance throughout lessons'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold mb-12">Hardware Essentials</h2>

      <div className="grid grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 transform transition-all hover:scale-105 hover:border-teal-400"
          >
            <h3 className="text-lg font-bold mb-3 text-blue-400">{item.title}</h3>
            <p className="text-sm text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
