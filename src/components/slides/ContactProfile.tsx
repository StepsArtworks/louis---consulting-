import { MessageCircle } from 'lucide-react';

export default function ContactProfile() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-6xl font-bold mb-12 text-center">Let's Connect!</h2>

      <div className="bg-gradient-to-br from-teal-900/40 to-slate-800/50 rounded-2xl p-12 border border-teal-700/50">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative">
            <img
              src="https://yt3.googleusercontent.com/g4ypl6Ho8SiDnACdOh6_CO8f3rrRGydcGr972NV36oPUzj77cQQTXrHV3XzLj9CfUYQ-D4s72g=s160-c-k-c0x00ffffff-no-rj"
              alt="Louis"
              className="w-48 h-48 rounded-full object-cover border-4 border-teal-400/50"
            />
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-teal-400 rounded-full border-4 border-slate-900"></div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-4xl font-bold mb-4">Louis</h3>
            <p className="text-2xl text-teal-400 mb-6">
              Native English Speaker & Online Teaching Expert
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Interested in the extra courses? Need help getting started with a demo or practice class?
              I'm here to guide you every step of the way. Let's connect!
            </p>

            <div className="flex justify-center md:justify-start">
              <a
                href="https://wa.me/27844589181"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-teal-600 hover:bg-teal-500 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-teal-500/50"
              >
                <MessageCircle size={24} />
                Message on WhatsApp
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-slate-400 mb-4">Based in Johannesburg, South Africa</p>
              <p className="text-sm text-slate-500">
                7+ years of online teaching experience | Helping native speakers build their teaching careers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-slate-400 text-lg">
          Want to explore the extra courses or book a demo class?
        </p>
        <p className="text-teal-400 text-xl font-semibold mt-2">
          Message me to learn more and take your first step!
        </p>
      </div>
    </div>
  );
}
