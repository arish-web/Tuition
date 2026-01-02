export default function FaqSection() {
  const faqs = [
    {
      q: "What is the batch size?",
      a: "We maintain small batches to ensure personal attention.",
    },
    {
      q: "Do you provide homework?",
      a: "Yes, daily homework is provided and checked regularly.",
    },
    {
      q: "Is this online or offline?",
      a: "We primarily offer offline classes with guidance support.",
    },
    {
      q: "How are parents informed?",
      a: "Regular updates are shared with parents.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto px-6 space-y-6">
        {faqs.map((f) => (
          <div key={f.q} className="border rounded-lg p-5">
            <h3 className="font-semibold mb-2">{f.q}</h3>
            <p className="text-sm text-gray-600">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
