import { Link } from "react-router-dom";

export default function ExploreCategories() {
  const categories = [
    {
      title: "Phonics",
      tag: "Linguistics",
      img: "/phonics_illustration.jpg",
      desc: "Mastering sounds and letters for fluent, confident reading.",
      link: "/phonics",
    },
    {
      title: "Grammar",
      tag: "Structure",
      img: "/grammar_illustration.png",
      desc: "Building sophisticated foundations in language rules and syntax.",
      link: "/grammar",
    },
    {
      title: "Creative Writing",
      tag: "Expression",
      img: "/creative_writing_illustration.jpg",
      desc: "Unleashing imagination through the art of narrative storytelling.",
      link: "/creative-writing",
    },
    {
      title: "Hand Writing",
      tag: "Artistry",
      img: "/handwriting_illustration.jpg",
      desc: "Refining elegance and precision through disciplined calligraphy.",
      link: "/handwriting",
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
            <Link
              key={c.title}
              to={c.link}
              className="group relative flex flex-col h-[500px] overflow-hidden rounded-3xl bg-white border border-slate-100 transition-all duration-700 hover:shadow-2xl hover:border-blue-100"
            >
              {/* Illustration Area */}
              <div className="relative h-3/5 overflow-hidden bg-white p-4">
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full object-contain transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Content Area */}
              <div className="relative z-10 flex-1 flex flex-col p-8 bg-slate-50 transition-colors duration-500 group-hover:bg-white">
                {/* Top Tag */}
                <span className="inline-block self-start px-3 py-1 text-[10px] font-bold tracking-widest text-blue-600 uppercase border border-blue-100 rounded-full bg-blue-50/50 mb-4">
                  {c.tag}
                </span>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {c.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 max-h-0 group-hover:max-h-24 overflow-hidden">
                  {c.desc}
                </p>

                {/* Modern Link Button */}
                <div className="mt-auto flex items-center text-blue-600 text-xs font-bold tracking-widest uppercase gap-2 transition-colors">
                  <span className="w-8 h-[1px] bg-blue-600 transition-all duration-500 group-hover:w-12"></span>
                  View Program
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}