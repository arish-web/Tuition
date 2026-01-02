export default function StaffSection() {
  return (
    <section className="bg-gray-50 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Teaching Staff
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Mrs. Anitha",
            role: "Mathematics Teacher",
            img: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd",
          },
          {
            name: "Mr. Rajesh",
            role: "Science Teacher",
            img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
          },
          {
            name: "Ms. Priya",
            role: "English Teacher",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
          },
        ].map(t => (
          <div key={t.name} className="bg-white p-6 rounded shadow text-center">
            <img
              src={t.img}
              alt={t.name}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold">{t.name}</h3>
            <p className="text-sm text-gray-600">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
