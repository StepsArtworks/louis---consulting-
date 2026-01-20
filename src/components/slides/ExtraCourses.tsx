export default function ExtraCourses() {
  const courses = [
    'Platform selection & profile setup',
    'Rate strategy & student attraction',
    'Tool configuration & lesson flow',
    'Avoiding common beginner mistakes',
    'Tailored plan for your niches (conversation, business, IELTS, TOEIC)',
    'Payment platforms setup',
    'Tax setup'
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-6xl font-bold mb-16 text-center">Extra courses</h2>

      <div className="space-y-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 transform transition-all hover:scale-105 hover:border-teal-400"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              <p className="text-xl">{course}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
