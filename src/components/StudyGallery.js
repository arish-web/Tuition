// import loginImg from "../assets/gallery/login.png";
// import workspaceImg from "../assets/gallery/workspace.png";
// import mathsImg from "../assets/gallery/maths.png";
// import uploadImg from "../assets/gallery/upload.png";
// import profileImg from "../assets/gallery/profile.png";

// export default function StudyGallery() {

//   const images = [
//   loginImg,
//   workspaceImg,
//   mathsImg,
//   uploadImg,
//   profileImg,
// ];
//   return (
//     <section className="py-16 bg-white">
//       <h2 className="text-3xl font-bold text-center mb-10">
//         Our Learning Environment
//       </h2>

//       <div className="max-w-6xl mx-auto px-6 grid gap-6 md:grid-cols-3">
//         {[
//           "https://images.unsplash.com/photo-1513258496099-48168024aec0",
//           "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
//           "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
//           "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
//           "https://images.unsplash.com/photo-1509062522246-3755977927d7",
//           "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
//         ].map((src, i) => (
//           <div
//             key={i}
//             className="group h-56 w-full overflow-hidden rounded-lg
//                        shadow-sm hover:shadow-xl
//                        transition-all duration-300
//                        hover:-translate-y-1 cursor-pointer"
//           >
//             <img
//               src={src}
//               alt="Learning environment"
//               className="h-full w-full object-cover
//                          transition-transform duration-300
//                          group-hover:scale-110"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

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


