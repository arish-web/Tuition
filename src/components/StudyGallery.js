import loginImg from "../accets/gallery/login.png";
import workspaceImg from "../accets/gallery/workspace.png";
import mathsImg from "../accets/gallery/maths.png";
import uploadImg from "../accets/gallery/upload.png";
import profileImg from "../accets/gallery/profile.png";

const ImageCard = ({ src }) => (
  <div
    className="w-full max-w-[360px]
               aspect-[9/19]
               bg-gray-50
               rounded-xl overflow-hidden
               shadow-sm hover:shadow-xl
               transition-all duration-300"
  >
    <img
      src={src}
      alt="App screen"
      className="w-full h-full object-contain"
    />
  </div>
);

export default function StudyGallery() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our Learning Environment
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A safe, focused, and child-friendly tuition environment designed for
          Nursery to Class V students.
        </p>

        {/* ROW 1 — 3 images */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {[loginImg, workspaceImg, mathsImg].map((src, i) => (
            <ImageCard key={i} src={src} />
          ))}
        </div>

        {/* ROW 2 — 2 images CENTERED, SAME WIDTH */}
        <div className="flex justify-center gap-8">
          {[uploadImg, profileImg].map((src, i) => (
            <ImageCard key={i} src={src} />
          ))}
        </div>

        {/* Download CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-3
                       bg-green-600 text-white
                       px-10 py-4 rounded-xl
                       font-semibold text-lg
                       shadow-md
                       hover:bg-green-700 hover:shadow-xl
                       transition"
          >
            📲 Download Our App
          </a>
        </div>
      </div>
    </section>
  );
}


