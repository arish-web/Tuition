import loginImg from "../accets/gallery/login.png";
import workspaceImg from "../accets/gallery/workspace.png";
import mathsImg from "../accets/gallery/maths.png";
import uploadImg from "../accets/gallery/upload.png";
import profileImg from "../accets/gallery/profile.png";
import React from 'react';
/* Import your images as before */

const AppScreen = ({ src, title, delay }) => (
  <div
    className="relative group flex flex-col items-center"
    style={{ transitionDelay: `${delay}ms` }}
  >
    {/* Device Frame Simulation */}
    <div className="relative z-10 w-full aspect-[9/19] rounded-[2.5rem] p-3 bg-slate-900 shadow-2xl overflow-hidden border-[6px] border-slate-800 group-hover:border-blue-600 transition-colors duration-500">
      {/* Notch/Camera Area */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-b-xl z-20"></div>

      {/* Image */}
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover rounded-[1.8rem] transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    {/* Reflection/Glow effect */}
    <div className="absolute -inset-2 bg-blue-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <p className="mt-6 text-slate-400 font-bold tracking-widest text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
      {title}
    </p>
  </div>
);

export default function StudyGallery() {
  const screens = [
    { src: loginImg, title: "Secure Access", delay: 0 },
    { src: workspaceImg, title: "Interactive Hub", delay: 100 },
    { src: mathsImg, title: "Concept Mastery", delay: 200 },
    { src: uploadImg, title: "Progress Tracking", delay: 300 },
    { src: profileImg, title: "Student Profile", delay: 400 },
  ];

  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="text-center mb-24">
          <span className="text-blue-600 font-bold tracking-[0.3em] text-xs uppercase block mb-4">
            Digital Ecosystem
          </span>
          <h2 className="text-4xl md:text-6xl font-light text-slate-900 leading-tight mb-6">
            Our Learning <span className="font-serif italic text-slate-400">Environment</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            A seamless bridge between physical tuition and digital excellence,
            crafted specifically for the intuitive needs of young learners.
          </p>
        </div>

        {/* Premium Grid: Asymmetric & Overlapping */}
        <div className="relative">
          {/* Decorative background text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-slate-200/40 select-none z-0 pointer-events-none">
            WISS
          </div>

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 items-end">
            {screens.map((screen) => (
              <AppScreen key={screen.title} {...screen} />
            ))}
          </div>
        </div>

        {/* Premium Download CTA */}
        <div className="mt-28 text-center">
          <div className="inline-block p-1 rounded-[2rem] bg-gradient-to-r from-blue-600 to-green-500 shadow-xl shadow-blue-200">
            <a
              href="#"
              className="flex items-center gap-4 bg-white hover:bg-transparent hover:text-white text-slate-900 px-12 py-5 rounded-[1.8rem] transition-all duration-300 group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">📲</span>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Available for Students</p>
                <p className="text-xl font-bold">Download Our App</p>
              </div>
            </a>
          </div>

          <p className="mt-6 text-slate-400 text-xs tracking-wide">
            Experience personalized learning on any iOS or Android device.
          </p>
        </div>
      </div>
    </section>
  );
}