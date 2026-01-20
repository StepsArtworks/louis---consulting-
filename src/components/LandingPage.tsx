import { CheckCircle, MessageCircle, Clock, TrendingUp, Target, Briefcase, Award, Globe, Users, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { ref, isVisible };
}

export default function LandingPage() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const whatsappNumber = '+27716771749';
  const message = "Hi Louis, I'm interested to book a consultation call";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  const hero = useScrollAnimation();
  const credentials = useScrollAnimation();
  const whatYouLearnTitle = useScrollAnimation();
  const learnItem1 = useScrollAnimation();
  const learnItem2 = useScrollAnimation();
  const learnItem3 = useScrollAnimation();
  const learnItem4 = useScrollAnimation();
  const learnItem5 = useScrollAnimation();
  const learnItem6 = useScrollAnimation();
  const learnPlus = useScrollAnimation();
  const additionalServices = useScrollAnimation();
  const cta = useScrollAnimation();
  const footer = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div
          ref={hero.ref}
          className={`text-center mb-12 transition-all duration-1000 ${
            hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative inline-block mb-8">
            <img
              src="https://yt3.googleusercontent.com/g4ypl6Ho8SiDnACdOh6_CO8f3rrRGydcGr972NV36oPUzj77cQQTXrHV3XzLj9CfUYQ-D4s72g=s160-c-k-c0x00ffffff-no-rj"
              alt="Louis - Your English Teaching Mentor"
              className="w-40 h-40 rounded-full shadow-2xl object-cover border-4 border-white"
            />
            <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-3 shadow-lg">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Start Your Online<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              English Teaching Journey
            </span>
          </h1>

          <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
            Launch your profitable online teaching career with my expert guidance
          </p>

          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md mb-8">
            <Clock className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-gray-900">1-Hour Expert Consultation</span>
            <span className="text-2xl font-bold text-blue-600">R500</span>
          </div>
        </div>

        <div
          ref={credentials.ref}
          className={`bg-white rounded-3xl shadow-xl p-8 md:p-10 mb-12 transition-all duration-1000 delay-100 ${
            credentials.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Hi I'm Louis</h2>
            <p className="text-lg text-gray-600">Native English Speaker & Online Business Builder</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">7+ Years</h3>
              <p className="text-sm text-gray-700">Full-time online teaching experience</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-600 mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Johannesburg-Based</h3>
              <p className="text-sm text-gray-700">Native speaker with clear South African accent</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Built from Scratch</h3>
              <p className="text-sm text-gray-700">Independent teaching business with proven results</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-6 text-white">
            <h3 className="font-bold text-xl mb-3">Expert in High-Demand Niches</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">Conversation English</span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">Business English</span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">IELTS Prep</span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">TOEIC Prep</span>
            </div>
          </div>

          <p className="text-center text-gray-700 mt-6 leading-relaxed">
            I'm passionate about helping native English speakers build flexible, rewarding online teaching careers just like I did.
          </p>
        </div>

        <div
          ref={whatYouLearnTitle.ref}
          className={`text-center mb-10 transition-all duration-1000 delay-200 ${
            whatYouLearnTitle.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">What You'll Learn</h2>
          <p className="text-gray-600">Everything you need to start earning as an online English teacher</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div
            ref={learnItem1.ref}
            className={`bg-white rounded-2xl shadow-lg p-6 transition-all duration-700 delay-300 ${
              learnItem1.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Why Online Teaching?</h3>
                <p className="text-sm text-gray-600">Discover the opportunities and benefits of teaching English online</p>
              </div>
            </div>
          </div>

          <div
            ref={learnItem2.ref}
            className={`bg-white rounded-2xl shadow-lg p-6 transition-all duration-700 delay-[350ms] ${
              learnItem2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Mindset Basics</h3>
                <p className="text-sm text-gray-600">Build the right foundation for long-term success</p>
              </div>
            </div>
          </div>

          <div
            ref={learnItem3.ref}
            className={`bg-white rounded-2xl shadow-lg p-6 transition-all duration-700 delay-[400ms] ${
              learnItem3.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Hardware Essentials</h3>
                <p className="text-sm text-gray-600">Know exactly what equipment you need to get started</p>
              </div>
            </div>
          </div>

          <div
            ref={learnItem4.ref}
            className={`bg-white rounded-2xl shadow-lg p-6 transition-all duration-700 delay-[450ms] ${
              learnItem4.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Platforms to Find Students</h3>
                <p className="text-sm text-gray-600">Access the best platforms where students are actively looking</p>
              </div>
            </div>
          </div>

          <div
            ref={learnItem5.ref}
            className={`bg-white rounded-2xl shadow-lg p-6 transition-all duration-700 delay-[500ms] ${
              learnItem5.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Audience Types & Best Practices</h3>
                <p className="text-sm text-gray-600">Match your teaching style with the right student demographics</p>
              </div>
            </div>
          </div>

          <div
            ref={learnItem6.ref}
            className={`bg-white rounded-2xl shadow-lg p-6 transition-all duration-700 delay-[550ms] ${
              learnItem6.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Supporting Tools</h3>
                <p className="text-sm text-gray-600">Essential software and resources to enhance your teaching</p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={learnPlus.ref}
          className={`bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 border-2 border-blue-200 mb-8 transition-all duration-1000 delay-[600ms] ${
            learnPlus.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-3 mb-2">
            <Target className="w-6 h-6 text-blue-600" />
            <h3 className="font-bold text-gray-900">Plus: Next Steps & Q&A</h3>
          </div>
          <p className="text-gray-700">Get personalized answers to all your questions and a clear action plan</p>
        </div>

        <div
          ref={additionalServices.ref}
          className={`bg-white rounded-3xl shadow-xl p-8 md:p-10 mb-12 transition-all duration-1000 ${
            additionalServices.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className="w-full flex items-center justify-between gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-gray-900" />
              <h2 className="text-2xl font-bold text-gray-900">Additional Consultation Services</h2>
            </div>
            <ChevronDown
              className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                isServicesOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ${
              isServicesOpen ? 'max-h-[800px] opacity-100 mt-6' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Platform selection & profile setup</p>
              </div>

              <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <TrendingUp className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Rate strategy & student attraction</p>
              </div>

              <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Tool configuration & lesson flow</p>
              </div>

              <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <TrendingUp className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Avoiding common beginner mistakes</p>
              </div>

              <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Tailored plan for your niche</p>
              </div>

              <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <TrendingUp className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Payment platforms setup</p>
              </div>

              <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors md:col-span-2">
                <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Tax setup & financial guidance</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-6 italic">Specialized niches: Conversation, Business English, IELTS, TOEIC prep & more</p>
          </div>
        </div>

        <div
          ref={cta.ref}
          className={`text-center transition-all duration-1000 ${
            cta.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg px-10 py-5 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-6 h-6" />
            Book Your Consultation Now
          </a>

          <p className="text-gray-600 mt-6 text-sm">
            Chat with me on WhatsApp to schedule your session
          </p>
        </div>

        <div
          ref={footer.ref}
          className={`mt-16 text-center transition-all duration-1000 ${
            footer.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Career?</h3>
            <p className="text-gray-700 leading-relaxed">
              Join countless others who have successfully launched their online English teaching careers.
              With the right guidance, you can start earning within weeks, work from anywhere,
              and build a flexible lifestyle on your own terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
