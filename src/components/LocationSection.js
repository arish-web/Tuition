// export default function LocationSection() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <h2 className="text-3xl font-bold text-center mb-12">
//         Visit Our Tuition Center
//       </h2>

//       <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2 items-center">
//         <div>
//           <h3 className="font-semibold text-lg mb-2">Bright Tuition Center</h3>
//           <p className="text-gray-600 mb-2">
//             No. 2, block-2, EGB swaroobam<br />
//             Matha Kovil Street, Chennai
//           </p>
//           <p className="text-gray-600 mb-2">📞 +91 8012011705</p>
//           <p className="text-gray-600">🕘 Mon – Sat : 4 PM – 8 PM</p>
//         </div>

//         <iframe
//           title="Location Map"
//           src="https://www.google.com/maps?q=chennai&output=embed" 
//           className="w-full h-64 rounded-lg border"
//           loading="lazy"
//         />
//       </div>
//     </section>
//   );
// }

export default function LocationSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Visit Our Tuition Center
        </h2>

        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* LEFT: DETAILS */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-xl mb-2">
                Bright Tuition Center
              </h3>
              <p className="text-gray-600">
                A safe and focused learning space for Nursery to Class V students.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-white p-4 rounded-lg border shadow-sm">
                <p className="font-medium mb-1">📍 Address</p>
                <p className="text-gray-600 text-sm">
                  No. 2, Block-2, EGB Swaroobam<br />
                  Matha Kovil Street,<br />
                  Chennai
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border shadow-sm">
                <p className="font-medium mb-1">📞 Contact</p>
                <p className="text-gray-600 text-sm">
                  +91 80120 11705<br />
                  Call or WhatsApp
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border shadow-sm">
                <p className="font-medium mb-1">🕒 Timings</p>
                <p className="text-gray-600 text-sm">
                  Monday – Saturday<br />
                  4:00 PM – 8:00 PM
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border shadow-sm">
                <p className="font-medium mb-1">🚌 Nearby Landmark</p>
                <p className="text-gray-600 text-sm">
                  Near Matha Kovil<br />
                  Easy access from main road
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <a
                href="#enquiry"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded font-medium hover:bg-blue-700 transition"
              >
                Enquire Now
              </a>

              <a
                href="https://www.google.com/maps?q=No.2+Block-2+EGB+Swaroobam+Matha+Kovil+Street+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded font-medium hover:bg-blue-50 transition"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* RIGHT: MAP */}
          <div className="w-full h-full">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps?q=No.2+Block-2+EGB+Swaroobam+Matha+Kovil+Street+Chennai&output=embed"
              className="w-full h-[360px] rounded-lg border shadow-sm"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

