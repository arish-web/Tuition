import React from "react";
import loginImg from "../accets/gallery/login.png";
import workspaceImg from "../accets/gallery/workspace.png";
import mathsImg from "../accets/gallery/maths.png";
import uploadImg from "../accets/gallery/upload.png";
import profileImg from "../accets/gallery/profile.png";

/* ---------------- SCREEN CARD ---------------- */

const AppScreen = ({ src, title, index }) => {
  // Only stagger on EXTRA LARGE screens
  const verticalOffset = index % 2 === 0 ? "xl:mt-0" : "xl:mt-24";

  return (
    <div
      className={`relative group ${verticalOffset} transition-all duration-500 hover:-translate-y-3`}
    >
      {/* Glow */}
      <div className="absolute inset-x-0 -bottom-6 h-24 bg-blue-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 mx-auto w-full max-w-[240px] sm:max-w-none overflow-hidden rounded-3xl bg-slate-900 shadow-xl border border-slate-800 p-1 group-hover:border-blue-500/40 transition-all">
        <div className="overflow-hidden rounded-2xl bg-slate-950 aspect-[9/16] sm:aspect-[9/18]">
          <img
            src={src}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-4 text-center px-2">
        <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 block mb-1">
          Module 0{index + 1}
        </span>
        <h3 className="text-white font-semibold text-sm sm:text-base group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );
};

/* ---------------- MAIN SECTION ---------------- */

export default function StudyGallery() {
  const screens = [
    { src: loginImg, title: "Secure Access" },
    { src: workspaceImg, title: "Interactive Hub" },
    { src: mathsImg, title: "Concept Mastery" },
    { src: uploadImg, title: "Progress Tracking" },
    { src: profileImg, title: "Student Profile" },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-slate-950 text-white overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #3b82f6 1px, transparent 1px),
              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_90%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 lg:mb-24">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-10 bg-blue-500" />
              <span className="text-blue-400 font-bold tracking-widest text-xs uppercase">
                Digital Ecosystem
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-tight">
              Learning <br />
              <span className="italic font-serif font-light text-slate-500">
                Reimagined.
              </span>
            </h2>
          </div>

          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed lg:max-w-sm border-l-2 border-blue-500/30 pl-5">
            A high-performance interface built for modern education.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 xl:gap-8 justify-items-center">
          {screens.map((screen, idx) => (
            <AppScreen
              key={screen.title}
              src={screen.src}
              title={screen.title}
              index={idx}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <button className="group relative inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-10 py-5 bg-blue-600 text-white rounded-2xl transition-all hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:-translate-y-1 active:scale-95">
            <div className="text-center sm:text-left">
              <p className="text-xs uppercase font-bold text-blue-100 tracking-widest mb-1">
                Secure Entrance
              </p>
              <p className="text-lg sm:text-xl font-bold tracking-tight">
                Access Portal
              </p>
            </div>

            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md">
              <span className="text-2xl group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </button>

          <div className="mt-12 flex justify-center items-center gap-4 text-slate-500 opacity-40">
            <div className="h-px w-8 bg-slate-800" />
            <p className="text-xs font-bold uppercase tracking-widest">
              Command Center v2.0
            </p>
            <div className="h-px w-8 bg-slate-800" />
          </div>
        </div>
      </div>
    </section>
  );
}