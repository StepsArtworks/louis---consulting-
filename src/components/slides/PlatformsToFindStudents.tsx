export default function PlatformsToFindStudents() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold mb-12 text-center">Platforms to find Students.</h2>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 transform transition-all hover:scale-105 hover:border-teal-400">
          <h3 className="text-3xl font-bold mb-4 text-teal-400">Build Your Own Business</h3>
          <p className="text-lg text-slate-300 mb-6">(More Flexibility & Control & Higher Potential)</p>

          <ul className="space-y-4 text-sm">
            <li>
              <strong>Independent Path</strong> — Set your own rates & schedule, perfect for teachers focusing on niches like conversation, business terminology, IELTS, or TOEIC.
            </li>
            <li className="mt-4">
              <strong className="text-teal-400">Recommended Platforms:</strong>
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <a href="https://preply.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    Preply.com
                  </a> — Popular marketplace where you create a profile, attract students globally, and run your own lessons.
                </li>
                <li>
                  <a href="https://classgap.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    Classgap.com
                  </a> — Flexible tutoring platform with built-in virtual classroom tools for personalized 1-on-1 sessions.
                </li>
              </ul>
            </li>
            <li className="mt-4">
              <strong>Key Benefits</strong> — Full independence, potential for higher earnings as you build reviews, tailor to your specialties.
            </li>
            <li>
              <strong>Note</strong> — Many teachers start here for freedom—scale from side hustle to full business.
            </li>
          </ul>
        </div>

        <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 transform transition-all hover:scale-105 hover:border-teal-400">
          <h3 className="text-3xl font-bold mb-4 text-blue-400">Work for a Teaching Company</h3>
          <p className="text-lg text-slate-300 mb-6">(Structured Jobs, Easier Entry, Set Salary)</p>

          <ul className="space-y-4 text-sm">
            <li>
              <strong>Company Path</strong> — Join established online teaching companies for provided materials, steady students, and less marketing effort—great starting point for natives with strong accents.
            </li>
            <li className="mt-4">
              <strong>Where to Look</strong> — <a href="https://teacherrecord.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                TeacherRecord.com
              </a> — A leading ESL job board that aggregates online teaching positions from various companies (online ESL roles, often preferring natives for certain gigs).
            </li>
            <li className="mt-4">
              <strong>Key Benefits</strong> — Structured lessons, reliable pay, less setup - ideal if you want to focus on teaching rather than building from scratch.
            </li>
            <li>
              <strong>Note</strong> — Browse for roles in conversation, exam prep (IELTS/TOEIC), or business English - many suit native speakers.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
