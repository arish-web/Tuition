import React from 'react';
import loginImg from "../accets/gallery/login.png";
import workspaceImg from "../accets/gallery/workspace.png";
import mathsImg from "../accets/gallery/maths.png";
import uploadImg from "../accets/gallery/upload.png";
import profileImg from "../accets/gallery/profile.png";

const AppScreen = ({ src, title, index }) => {
  const verticalOffset = index % 2 === 0 ? "mt-0" : "mt-12 lg:mt-24";
  
  return (
    <div className={`relative group ${verticalOffset} transition-all duration-700 ease-out hover:-translate-y-4`}>
      {/* Intense Blue Glow on Hover */}
      <div className="absolute inset-x-0 -bottom-10 h-32 bg-blue-600/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <div className="relative z-10 mx-auto w-full overflow-hidden rounded-[2.2rem] bg-slate-900 shadow-2xl border border-slate-800 p-1.5 transition-all duration-500 group-hover:border-blue-500/50">
        <div className="overflow-hidden rounded-[1.9rem] bg-slate-950 aspect-[9/19]">
          <img
            src={src}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-8 text-center px-4">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 block mb-2">
          Module 0{index + 1}
        </span>
        <h3 className="text-white font-bold text-base tracking-tight group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default function StudyGallery() {
  const screens = [
    { src: loginImg, title: "Secure Access" },
    { src: workspaceImg, title: "Interactive Hub" },
    { src: mathsImg, title: "Concept Mastery" },
    { src: uploadImg, title: "Progress Tracking" },
    { src: profileImg, title: "Student Profile" },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-slate-950 text-white overflow-hidden">
      
      {/* --- DARK BLUEPRINT GRID & GEOMETRIC BOXES --- */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* The Dark Blueprint Grid */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #3b82f6 1px, transparent 1px),
              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px',
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 90%)'
          }}
        ></div>

        {/* Floating Structural Boxes (Luminous) */}
        <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] border border-blue-500/10 rounded-[5rem] rotate-45 animate-[pulse_8s_ease-in-out_infinite]"></div>
        
        {/* Neon Accent Box */}
        <div className="absolute bottom-[15%] right-[5%] w-80 h-80 bg-blue-600/5 border border-blue-500/20 rounded-[4rem] -rotate-12 blur-sm"></div>
        
        {/* Secondary Grid (Smaller, tightly packed) */}
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '14px 14px',
          }}
        ></div>

        {/* Dark Radial Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_80%)]"></div>
      </div>
      {/* ------------------------------- */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-blue-500"></span>
              <span className="text-blue-400 font-bold tracking-[0.3em] text-[10px] uppercase">
                Digital Ecosystem
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-4">
              Learning <br />
              <span className="italic font-serif font-light text-slate-500">Reimagined.</span>
            </h2>
          </div>
          <div className="max-w-xs space-y-4">
            <p className="text-slate-400 text-lg font-light leading-relaxed border-l-2 border-blue-500/30 pl-6">
              A high-performance interface built for modern education.
            </p>
          </div>
        </div>

        {/* Floating Screen Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-12 lg:gap-8">
          {screens.map((screen, idx) => (
            <AppScreen 
                key={screen.title} 
                src={screen.src} 
                title={screen.title} 
                index={idx} 
            />
          ))}
        </div>

        {/* Dark Mode CTA */}
        <div className="mt-40 text-center">
          <button className="group relative inline-flex items-center gap-8 px-14 py-6 bg-blue-600 text-white rounded-2xl transition-all hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:-translate-y-1 active:scale-95">
            <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-blue-100 tracking-[0.2em] leading-none mb-1">Secure Entrance</p>
                <p className="text-xl font-bold leading-none tracking-tight">Access Portal</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md">
               <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </button>
          
          <div className="mt-12 flex justify-center items-center gap-4 text-slate-500">
            <div className="h-px w-8 bg-slate-800"></div>
            <p className="text-[10px] font-bold uppercase tracking-[0.5em]">Command Center v2.0</p>
            <div className="h-px w-8 bg-slate-800"></div>
          </div>
        </div>
      </div>
    </section>
  );
}