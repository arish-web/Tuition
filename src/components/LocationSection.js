export default function LocationSection() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Visit Our Tuition Center
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h3 className="font-semibold text-lg mb-2">Bright Tuition Center</h3>
          <p className="text-gray-600 mb-2">
            No. 12, Main Road,<br />
            Your Area, Your City
          </p>
          <p className="text-gray-600 mb-2">📞 +91 98765 43210</p>
          <p className="text-gray-600">🕘 Mon – Sat : 4 PM – 8 PM</p>
        </div>

        <iframe
          title="Location Map"
          src="https://www.google.com/maps?q=chennai&output=embed"
          className="w-full h-64 rounded-lg border"
          loading="lazy"
        />
      </div>
    </section>
  );
}
