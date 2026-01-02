export default function TeachingMethodSection() {
  const steps = [
    {
      title: "Concept Explanation",
      desc: "Clear explanation of topics using simple examples.",
    },
    {
      title: "Guided Practice",
      desc: "In-class practice to ensure understanding.",
    },
    {
      title: "Daily Homework",
      desc: "Homework assigned and reviewed regularly.",
    },
    {
      title: "Weekly Tests",
      desc: "Performance tracking through regular tests.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Teaching Method
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-4 text-center">
        {steps.map((s, i) => (
          <div key={s.title} className="border rounded-lg p-6">
            <div className="text-2xl font-bold text-blue-600 mb-3">
              {i + 1}
            </div>
            <h3 className="font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
