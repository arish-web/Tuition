import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Arul Raj",
      role: "Parent of Grade 4 Student",
      msg: "The transformation in my child's approach to Mathematics and Science is remarkable. The conceptual clarity provided here is unmatched.",
      initials: "AR"
    },
    {
      name: "Sanjay Naveen",
      role: "Parent of Grade 7 Student",
      msg: "Exceptional dedication from the faculty. The regular feedback loops and personalized attention have built immense confidence in my son.",
      initials: "SN"
    },
    {
      name: "Preethi",
      role: "Parent of Grade 3 Student",
      msg: "The curriculum makes complex concepts incredibly accessible. The daily homework guidance ensures consistent progress every single day.",
      initials: "P"
    },
  ];

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative Quote Background */}
      <div className="absolute top-10 left-10 text-slate-200 text-[20rem] font-serif leading-none select-none opacity-40">
        “
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold tracking-[0.3em] text-xs uppercase block mb-4">
            Voice of Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            Parent & Student <span className="font-serif italic text-slate-400">Reflections</span>
          </h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group bg-white p-10 rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] 
                         hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 
                         flex flex-col border border-slate-100 relative"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-600 italic leading-relaxed mb-10 font-light text-lg">
                "{t.msg}"
              </p>

              <div className="mt-auto flex items-center gap-4">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-200">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-none mb-1">{t.name}</h4>
                  <p className="text-xs text-slate-400 font-medium tracking-wide">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}