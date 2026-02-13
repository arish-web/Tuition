import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Minimalist High-End SVGs
const Icons = {
  Batch: () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 stroke-[1px]">
      <path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Z" />
    </svg>
  ),
  Review: () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 stroke-[1px]">
      <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
  ),
  Faculty: () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 stroke-[1px]">
      <path d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347" />
    </svg>
  ),
  Growth: () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 stroke-[1px]">
      <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
};

export default function WhyChooseUs() {
  const points = [
    {
      title: "Small Batch",
      subtitle: "Focused Learning",
      desc: "Restricted student-to-teacher ratios ensuring every voice is heard.",
      icon: <Icons.Batch />,
    },
    {
      title: "Daily Review",
      subtitle: "Mastery Loop",
      desc: "Rigorous tracking and constructive feedback loops to eliminate doubt.",
      icon: <Icons.Review />,
    },
    {
      title: "Elite Faculty",
      subtitle: "Expert Mentors",
      desc: "Seasoned educators with profound subject expertise and passion.",
      icon: <Icons.Faculty />,
    },
    {
      title: "Holistic Growth",
      subtitle: "Beyond Grades",
      desc: "Architecting futures through a disciplined academic ecosystem.",
      icon: <Icons.Growth />,
    },
    {
      title: "Parent Synergy",
      subtitle: "Real-time Insights",
      desc: "Transparent tracking and constant communication on student progress.",
      icon: <Icons.Batch />,
    },
  ];

  return (
    <section className="relative pt-32 pb-60 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-blue-500 font-bold tracking-[0.5em] text-[10px] uppercase mb-6">
            The Wiss Advantage
          </h2>
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
            Why We Are{" "}
            <span className="italic font-serif font-light text-slate-400">
              Different.
            </span>
          </h3>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Our methodology is designed for those who seek precision in
            education and excellence in results.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView="auto"
          centeredSlides
          centeredSlidesBounds
          loop
          speed={900}
          spaceBetween={60}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".luxury-pagination" }}
          className="!overflow-visible"
        >
          {points.map((p, i) => (
            <SwiperSlide key={i} className="!w-[520px]">
              {({ isActive }) => (
                <div
                  className={`
                  relative p-14 rounded-[3.5rem] border transition-all duration-700
                  ${
                    isActive
                      ? "bg-slate-900 border-slate-700 scale-100 opacity-100 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.6)]"
                      : "bg-transparent border-transparent scale-90 opacity-30"
                  }
                `}
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-10 transition-all duration-700 ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "bg-slate-800 text-slate-500"
                    }`}
                  >
                    {p.icon}
                  </div>

                  <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">
                    {p.subtitle}
                  </span>

                  <h4 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
                    {p.title}
                  </h4>

                  <p className="text-slate-400 text-lg leading-relaxed font-light mt-6">
                    {p.desc}
                  </p>

                  {/* Number */}
                  <div
                    className={`absolute top-12 right-12 text-7xl font-black transition-opacity duration-700 ${
                      isActive ? "opacity-10 text-slate-100" : "opacity-0"
                    }`}
                  >
                    0{i + 1}
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="luxury-pagination flex justify-center gap-4 mt-20"></div>
      </div>

      {/* Wavy Finish SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(130%+1.3px)] h-[120px] fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <style jsx global>{`
        .luxury-pagination .swiper-pagination-bullet {
          width: 30px;
          height: 2px;
          background: #334155;
          opacity: 1;
          border-radius: 0;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .luxury-pagination .swiper-pagination-bullet-active {
          background: #3b82f6;
          width: 80px;
        }
      `}</style>
    </section>
  );
}