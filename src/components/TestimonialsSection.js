export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Parent of Class 8 Student",
      msg: "My child improved a lot in Maths and Science after joining here.",
    },
    {
      name: "Parent of Class 10 Student",
      msg: "Very dedicated teachers and regular feedback.",
    },
    {
      name: "Student (Class 9)",
      msg: "Concepts are easy to understand and homework helps a lot.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Parents & Students Say
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow"
          >
            <p className="text-gray-600 mb-4">“{t.msg}”</p>
            <h4 className="font-semibold">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
