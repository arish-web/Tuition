export default function SubjectsSection() {
  const subjects = [
    "Mathematics (Grade 1 – 10)",
    "Science (Physics, Chemistry, Biology)",
    "English Grammar & Writing",
    "Exam Preparation",
    "Homework Guidance",
    "Concept Revision"
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
              key={s}
              className="bg-white p-5 rounded border text-center"
            >
              <p className="font-medium">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
