export default function StudyGallery() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Learning Environment
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid gap-6 md:grid-cols-3">
        {[
          "https://images.unsplash.com/photo-1513258496099-48168024aec0",
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
          "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
          "https://images.unsplash.com/photo-1509062522246-3755977927d7",
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        ].map((src, i) => (
          <div
            key={i}
            className="group h-56 w-full overflow-hidden rounded-lg
                       shadow-sm hover:shadow-xl
                       transition-all duration-300
                       hover:-translate-y-1 cursor-pointer"
          >
            <img
              src={src}
              alt="Learning environment"
              className="h-full w-full object-cover
                         transition-transform duration-300
                         group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
