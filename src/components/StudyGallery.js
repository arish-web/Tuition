import loginImg from "../accets/gallery/login.png";
import workspaceImg from "../accets/gallery/workspace.png";
import mathsImg from "../accets/gallery/maths.png";
import uploadImg from "../accets/gallery/upload.png";
import profileImg from "../accets/gallery/profile.png";

/* Reusable image card */
const ImageCard = ({ src }) => {
  return (
    <div
      className="
        w-full
        sm:w-[48%]
        lg:w-[30%]
        aspect-[9/19]
        bg-gray-50
        rounded-xl
        overflow-hidden
        shadow-sm
        hover:shadow-xl
        transition-all duration-300
      "
    >
      <img
        src={src}
        alt="App screen"
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
};

export default function StudyGallery() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          Our Learning Environment
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A safe, focused, and child-friendly tuition environment designed for
          Nursery to Class V students.
        </p>

        {/* ROW 1 — Login, Workspace, Maths */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          <ImageCard src={loginImg} />
          <ImageCard src={workspaceImg} />
          <ImageCard src={mathsImg} />
        </div>

        {/* ROW 2 — Upload, Profile (centered, same width) */}
        <div className="flex flex-wrap justify-center gap-8">
          <ImageCard src={uploadImg} />
          <ImageCard src={profileImg} />
        </div>

        {/* Download CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="#"
            className="
              inline-flex items-center gap-3
              bg-green-600 text-white
              px-10 py-4 rounded-xl
              font-semibold text-lg
              shadow-md
              hover:bg-green-700 hover:shadow-xl
              transition
            "
          >
            📲 Download Our App
          </a>
        </div>
      </div>
    </section>
  );
}
