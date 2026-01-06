export default function ExploreCategories() {
  const categories = [
    {
      title: "Class 9 Tuition",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    },
    {
      title: "Class 10 Tuition",
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    },
    {
      title: "Class 11 Tuition",
      img: "https://images.unsplash.com/photo-1513258496099-48168024aec0",
    },
    {
      title: "Class 12 Tuition",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    },
    {
      title: "BTech Tuition",
      img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
    },
    {
      title: "Nursery - KG",
      img: "https://images.unsplash.com/photo-1544717305-2782549b5136",
    },
    {
      title: "Class I - V",
      img: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    },
    {
      title: "Class 6 Tuition",
      img: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60",
    },
    {
      title: "Class 7 Tuition",
      img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b",
    },
    {
      title: "Class 8 Tuition",
      img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
    },
  ];

  return (
    <section className="bg-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Categories
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((c) => (
            <div
              key={c.title}
              className="group bg-white rounded-lg overflow-hidden
             shadow-sm hover:shadow-xl
             transition-all duration-300
             hover:-translate-y-1 cursor-pointer"
            >
              <img
                src={c.img}
                alt={c.title}
                className="h-40 w-full object-cover
               transition-transform duration-300
               group-hover:scale-105"
              />
              <p className="text-center font-medium py-3">{c.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
