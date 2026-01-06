// export default function WhyChooseUs() {
//   const points = [
//     {
//       title: "Small Batch Teaching",
//       desc: "Limited students per batch ensures personal attention."
//     },
//     {
//       title: "Daily Homework & Review",
//       desc: "Consistent practice with regular correction."
//     },
//     {
//       title: "Experienced Faculty",
//       desc: "Qualified teachers with strong subject knowledge."
//     },
//     {
//       title: "Parent Interaction",
//       desc: "Regular updates on student performance."
//     }
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           Why Choose Bright Tuition Center
//         </h2>

//         <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
//           {points.map((p) => (
//             <div
//               key={p.title}
//               className="border rounded-lg p-6 text-center hover:shadow-md transition"
//             >
//               <h3 className="text-lg font-semibold text-blue-600 mb-2">
//                 {p.title}
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 {p.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Small Batch Teaching",
      desc: "Limited students per batch ensures personal attention.",
    },
    {
      title: "Daily Homework & Review",
      desc: "Consistent practice with regular correction.",
    },
    {
      title: "Experienced Faculty",
      desc: "Qualified teachers with strong subject knowledge.",
    },
    {
      title: "Parent Interaction",
      desc: "Regular updates on student performance.",
    },
    {
      title: "Individual Doubt Clearing",
      desc: "Dedicated time for students to clarify doubts without hesitation.",
    },
    {
      title: "Regular Assessments",
      desc: "Weekly tests to track progress and strengthen weak areas.",
    },
    {
      title: "Exam-Oriented Preparation",
      desc: "Focused training aligned with school exams and board patterns.",
    },
    {
      title: "Supportive Environment",
      desc: "Positive, disciplined atmosphere that encourages confidence and focus.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Bright Tuition Center
        </h2>

        <Swiper
          modules={[Autoplay]}
          loop
          loopFillGroupWithBlank
          speed={800}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1, // mobile
            },
            640: {
              slidesPerView: 2, // tablet
            },
            1024: {
              slidesPerView: 4, // desktop
            },
          }}
        >
          {points.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="border rounded-lg p-6 text-center bg-white hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
