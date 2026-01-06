export default function StudyGallery() {
  const images = [
    // school kids + classroom + tuition style
    "https://images.unsplash.com/photo-1588072432836-e10032774350",
    "https://images.unsplash.com/photo-1544717305-2782549b5136",
    "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    "https://images.unsplash.com/photo-1513258496099-48168024aec0",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our Learning Environment
        </h2>

        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          A safe, focused, and child-friendly tuition environment designed for
          Nursery to Class V students.
        </p>

        {/* Gallery */}
        <div className="grid gap-6 md:grid-cols-3">
          {images.map((src, i) => (
            <div
              key={i}
              className="group h-56 w-full overflow-hidden rounded-lg
                         shadow-sm hover:shadow-xl
                         transition-all duration-300
                         hover:-translate-y-1"
            >
              <img
                src={src}
                alt="School students learning"
                loading="lazy"
                className="h-full w-full object-cover
                           transition-transform duration-300
                           group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Download App CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-3
                       bg-green-600 text-white
                       px-8 py-4 rounded-lg
                       font-semibold text-lg
                       hover:bg-green-700
                       transition"
          >
            📲 Download Our App
          </a>
        </div>
      </div>
    </section>
  );
}

