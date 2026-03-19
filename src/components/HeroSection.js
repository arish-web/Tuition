import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-900">
      {/* Background Image with Parallax-like feel */}
      <div
        className="absolute inset-0 z-0 scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2338&auto=format&fit=crop')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />

      {/* Premium Gradient Overlay: Darker on edges, lighter in middle for focus */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-950/90"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Subtle Pre-heading badge */}
        <span className="inline-block py-1 px-4 mb-6 text-sm font-medium tracking-widest text-blue-400 uppercase border border-blue-400/30 bg-blue-400/10 rounded-full">
          Child-Centred Learning
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight text-white">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Strong Foundations</span> in Literacy
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-12 font-light leading-relaxed">
          Wiss Learn Space is a child-focused centre building strong foundations in literacy and essential skills through <span className="text-white font-normal text-base md:text-xl">Phonics, Grammar, Creative Writing</span> and <span className="text-white font-normal text-base md:text-xl">Hand Writing</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/#enquiry"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-500 shadow-lg shadow-blue-900/20"
          >
            Enquire Admission
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <Link
            to="/#categories"
            className="px-8 py-4 font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition backdrop-blur-sm"
          >
            Explore Programs
          </Link>
        </div>
      </div>

      {/* Bottom decorative fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>
    </section>
  );
}