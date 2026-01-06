export default function SubjectsSection() {
  const subjects = [
    {
      name: "Mathematics (Grade 1 – 10)",
      info: "Strong foundation in arithmetic, algebra, geometry, and problem solving.",
    },
    {
      name: "Science (Physics, Chemistry, Biology)",
      info: "Concept-based learning with practical examples and experiments.",
    },
    {
      name: "English Grammar & Writing",
      info: "Focus on grammar, vocabulary, comprehension, and writing skills.",
    },
    {
      name: "Exam Preparation",
      info: "Targeted coaching for school exams with revision and mock tests.",
    },
    {
      name: "Homework Guidance",
      info: "Daily homework support with explanation and corrections.",
    },
    {
      name: "Concept Revision",
      info: "Regular revision sessions to strengthen weak areas.",
    },
  ];

  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Subjects & Classes Offered
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {subjects.map((s) => (
            <div
              key={s.name}
              className="relative group bg-white p-5 rounded border text-center
                         hover:shadow-md transition cursor-pointer"
            >
              {/* Subject Name */}
              <p className="font-medium">{s.name}</p>

              {/* Hover Popup */}
              <div
                className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3
                           w-64 bg-gray-900 text-white text-sm rounded-lg px-4 py-3
                           opacity-0 scale-95 pointer-events-none
                           group-hover:opacity-100 group-hover:scale-100
                           transition-all duration-200 z-10"
              >
                {s.info}

                {/* Arrow */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full
                             w-3 h-3 bg-gray-900 rotate-45"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
