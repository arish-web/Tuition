import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Small Batch Teaching",
      desc: "Personalized attention through restricted student-to-teacher ratios.",
      icon: "👥",
    },
    {
      title: "Daily Review",
      desc: "Rigorous daily homework tracking and constructive feedback loops.",
      icon: "📝",
    },
    {
      title: "Elite Faculty",
      desc: "Mentorship by seasoned educators with profound subject expertise.",
      icon: "🎓",
    },
    {
      title: "Parent Synergy",
      desc: "Transparent, real-time insights into your child's academic journey.",
      icon: "🤝",
    },
    {
      title: "Bespoke Mentoring",
      desc: "One-on-one sessions tailored to bridge specific learning gaps.",
      icon: "🎯",
    },
    {
      title: "Strategic Testing",
      desc: "Weekly analytical assessments to measure and master growth.",
      icon: "📊",
    },
    {
      title: "Exam Mastery",
      desc: "Curriculum-aligned strategies for peak board performance.",
      icon: "🏆",
    },
    {
      title: "Holistic Growth",
      desc: "A disciplined yet nurturing ecosystem for intellectual confidence.",
      icon: "✨",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-3">
            The Wiss Advantage
          </h2>
          <p className="text-4xl md:text-5xl font-light text-slate-900">
            Why Choose <span className="font-semibold italic">Wiss Learn Space</span>
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1.2, centeredSlides: true },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-16 !px-2" // Space for pagination dots
        >
          {points.map((p, i) => (
            <SwiperSlide key={i} className="h-full">
              <div className="group h-full bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-start text-left">
                {/* Icon Wrapper */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-2xl mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-500">
                  <span className="group-hover:filter group-hover:brightness-200">{p.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h3>

                <p className="text-slate-500 leading-relaxed text-sm md:text-base font-light">
                  {p.desc}
                </p>

                {/* Subtle Decorative Line */}
                <div className="mt-auto pt-6 w-full">
                  <div className="h-[2px] w-0 group-hover:w-full bg-blue-600 transition-all duration-700 opacity-20"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #2563eb !important;
          width: 20px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
}