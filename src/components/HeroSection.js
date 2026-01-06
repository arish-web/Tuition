export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Building Strong Academic Foundations
        </h1>

        <p className="max-w-2xl mx-auto text-lg mb-8">
          Personal attention, daily homework, and expert guidance
          for school students.
        </p>

        <a
          href="#enquiry"
          className="inline-block bg-green-500 hover:bg-green-600 px-10 py-3 rounded font-semibold transition"
        >
          Enquire Admission
        </a>
      </div>
    </section>
  );
}
