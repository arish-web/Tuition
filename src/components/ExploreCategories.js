export default function ExploreCategories() {
  const categories = [
    {
      title: "Phonics",
      tag: "Linguistics",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
      desc: "Mastering sounds and letters for fluent, confident reading.",
    },
    {
      title: "Grammar",
      tag: "Structure",
      img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
      desc: "Building sophisticated foundations in language rules and syntax.",
    },
    {
      title: "Creative Writing",
      tag: "Expression",
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
      desc: "Unleashing imagination through the art of narrative storytelling.",
    },
    {
      title: "Hand Writing",
      tag: "Artistry",
      img: "https://images.unsplash.com/photo-1516533075015-a3838414c3ca?auto=format&fit=crop&w=1200&q=80",
      desc: "Refining elegance and precision through disciplined calligraphy.",
    },
  ];

  return (
    <section id="categories" className="bg-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Elegant Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.3em] text-blue-600 uppercase mb-4">
              Our Specializations
            </h2>
            <p className="text-4xl md:text-6xl font-light text-slate-900 leading-tight">
              Curated <span className="font-serif italic text-slate-500">Learning</span> Pathways
            </p>
          </div>
          <p className="text-slate-500 max-w-sm text-lg font-light leading-relaxed border-l border-slate-200 pl-6">
            Focused programs designed to transform fundamental skills into academic mastery.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <div
              key={c.title}
              className="group relative flex flex-col h-[500px] overflow-hidden rounded-3xl bg-slate-100 transition-all duration-700"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-950/90 transition-opacity duration-500 group-hover:opacity-80" />
              </div>

              {/* Top Tag - Glassmorphism */}
              <div className="relative z-10 p-8">
                <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase border border-white/30 backdrop-blur-md rounded-full bg-white/10">
                  {c.tag}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 mt-auto p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {c.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 max-h-0 group-hover:max-h-24 overflow-hidden">
                  {c.desc}
                </p>

                {/* Modern Link Button */}
                <div className="mt-6 flex items-center text-white text-xs font-bold tracking-widest uppercase gap-2 group-hover:text-blue-400 transition-colors">
                  <span className="w-8 h-[1px] bg-white group-hover:bg-blue-400 transition-all duration-500 group-hover:w-12"></span>
                  View Program
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}