export default function SubjectsSection() {
  const subjects = [
    {
      id: "01",
      name: "Phonics Mastery",
      info: "Sound-based learning to improve pronunciation, reading fluency, and word recognition.",
    },
    {
      id: "02",
      name: "Core Grammar",
      info: "Clear understanding of sentence structure, tenses, parts of speech, and usage.",
    },
    {
      id: "03",
      name: "Creative Writing",
      info: "Developing imagination, storytelling skills, and structured writing techniques.",
    },
    {
      id: "04",
      name: "Artistic Handwriting",
      info: "Improving letter formation, spacing, alignment, and overall writing clarity.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-50/50 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold tracking-[0.4em] text-blue-600 uppercase mb-4">
              Academic Disciplines
            </h2>
            <p className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">
              Subjects & <span className="font-serif italic text-blue-600">Curriculum</span>
            </p>
          </div>
          <div className="h-[1px] flex-grow mx-8 bg-slate-200 hidden md:block mb-4"></div>
          <p className="text-slate-500 font-light max-w-xs">
            A specialized approach to core literacy and communication skills.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((s) => (
            <div
              key={s.name}
              className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm 
                         hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 
                         transition-all duration-500 relative flex flex-col h-full"
            >
              {/* Decorative Numbering */}
              <span className="text-5xl font-extrabold text-slate-50 absolute top-4 right-6 group-hover:text-blue-50 transition-colors duration-500">
                {s.id}
              </span>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-500">
                  {s.name}
                </h3>

                <div className="w-10 h-1 bg-blue-600 mb-6 rounded-full group-hover:w-16 transition-all duration-500"></div>

                <p className="text-slate-500 leading-relaxed font-light text-sm md:text-base">
                  {s.info}
                </p>
              </div>

              {/* Bottom Decorative Circle */}
              <div className="mt-auto pt-8">
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}