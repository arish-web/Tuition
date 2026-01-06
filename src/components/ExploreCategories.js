export default function ExploreCategories() {

const categories = [
  {
    title: "Nursery",
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "LKG",
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "UKG",
    img: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Class I",
    img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Class II",
    img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Class III",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Class IV",
    img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Class V",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
  },
];



  return (
    <section className="bg-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Categories
        </h2>

        {/* 4 + 4 layout guaranteed */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
              <p className="text-center font-medium py-3">
                {c.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




