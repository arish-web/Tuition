export default function TeachingMethodSection() {
  const steps = [
    {
      title: "Concept Explanation",
      desc: "Deep-dive sessions where complex topics are distilled into intuitive, simple insights.",
    },
    {
      title: "Guided Practice",
      desc: "Interactive in-class applications to bridge the gap between theory and mastery.",
    },
    {
      title: "Daily Homework",
      desc: "Structured assignments designed to reinforce memory and build disciplined habits.",
    },
    {
      title: "Weekly Tests",
      desc: "Rigorous analytical assessments to measure growth and ensure long-term retention.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] text-blue-600 uppercase mb-3">
            The Wiss Methodology
          </h2>
          <p className="text-4xl md:text-5xl font-light text-slate-900">
            A Proven Path to <span className="italic font-serif">Success</span>
          </p>
        </div>

        {/* Process Flow Container */}
        <div className="relative">
          {/* Horizontal Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

          <div className="grid gap-12 md:grid-cols-4 relative">
            {steps.map((s, i) => (
              <div key={s.title} className="group flex flex-col items-center text-center">
                {/* Number Circle */}
                <div className="relative z-10 w-24 h-24 mb-8 flex items-center justify-center">
                  {/* Outer Glow/Ring */}
                  <div className="absolute inset-0 rounded-full bg-blue-50 scale-100 group-hover:scale-125 group-hover:bg-blue-600 transition-all duration-500 opacity-50 group-hover:opacity-10"></div>

                  {/* The Main Circle */}
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center text-xl font-bold text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl shadow-blue-200/50">
                    0{i + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="px-4">
                  <h3 className="text-xl font-bold text-slate-800 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                    {s.title}
                  </h3>
                  <div className="h-1 w-8 bg-slate-200 mx-auto mb-4 group-hover:w-16 group-hover:bg-blue-400 transition-all duration-500"></div>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-slate-50 rounded-full opacity-50 pointer-events-none"></div>
    </section>
  );
}