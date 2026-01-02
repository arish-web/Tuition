export default function ResultsSection() {
  const stats = [
    { value: "95%", label: "Pass Percentage" },
    { value: "50+", label: "Top Scorers" },
    { value: "10+", label: "Years Experience" },
    { value: "1000+", label: "Students Trained" },
  ];

  return (
    <section className="py-16 bg-blue-600 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        Results & Achievements
      </h2>

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-4xl font-bold mb-2">{s.value}</div>
            <p className="text-sm opacity-90">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
