export default function WhyChooseUs() {
  const points = [
    {
      title: "Small Batch Teaching",
      desc: "Limited students per batch ensures personal attention."
    },
    {
      title: "Daily Homework & Review",
      desc: "Consistent practice with regular correction."
    },
    {
      title: "Experienced Faculty",
      desc: "Qualified teachers with strong subject knowledge."
    },
    {
      title: "Parent Interaction",
      desc: "Regular updates on student performance."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Bright Tuition Center
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {points.map((p) => (
            <div
              key={p.title}
              className="border rounded-lg p-6 text-center hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                {p.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
