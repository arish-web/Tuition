import React from 'react';

export default function ResultsSection() {
  const stats = [
    { value: "95%", label: "Success Rate", sub: "Academic Excellence" },
    { value: "50+", label: "Top Scorers", sub: "District Rankers" },
    { value: "10+", label: "Years Experience", sub: "Pedagogical Mastery" },
    { value: "1K+", label: "Alumni", sub: "Empowered Students" },
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-green-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.4em] text-blue-500 uppercase mb-4">
            Our Legacy
          </h2>
          <p className="text-4xl md:text-5xl font-light text-white">
            Results & <span className="font-serif italic text-slate-400">Achievements</span>
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`relative px-8 text-center ${i !== stats.length - 1 ? "lg:border-r border-slate-800" : ""
                }`}
            >
              <div className="mb-4">
                <span className="text-5xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">
                  {s.value}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-white font-bold tracking-widest uppercase text-xs md:text-sm">
                  {s.label}
                </h3>
                <p className="text-slate-500 text-[10px] md:text-xs uppercase tracking-widest font-medium">
                  {s.sub}
                </p>
              </div>

              {/* Decorative line for mobile/tablet grid */}
              <div className="mt-8 h-[1px] w-12 bg-blue-600/30 mx-auto lg:hidden"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Aesthetic Border Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
    </section>
  );
}