import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  const highlights = [
    {
      title: "Child-Centred Learning",
      icon: "🎓",
      desc: "Personalised teaching for every child to ensure they reach their full potential.",
    },
    {
      title: "Structured Phonics",
      icon: "📚",
      desc: "Strong foundations in reading and writing through systematic phonics instruction.",
    },
    {
      title: "Multi-Sensory Learning",
      icon: "🎧",
      desc: "Engaging activities including actions, songs, flashcards, and hands-on games.",
    },
    {
      title: "Small Groups",
      icon: "👥",
      desc: "Focused attention and better interaction with restricted student-to-teacher ratios.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-blue-600 font-bold tracking-[0.3em] text-xs uppercase block mb-4">
            Our Mission
          </span>
          <h1 className="text-4xl md:text-6xl font-light text-slate-900 leading-tight mb-8 max-w-4xl mx-auto">
            Building Strong <span className="font-serif italic text-slate-500">Foundations</span> in Literacy
          </h1>
          <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-10">
            Wiss Learn Space is a child-focused centre building strong foundations in literacy and essential skills through Phonics, Grammar, Creative Writing, and Hand Writing.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/#enquiry" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all">
              Join Us
            </Link>
            <Link to="/#categories" className="border border-slate-200 text-slate-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-all">
              Our Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Approach */}
      <section className="py-24 px-6 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Personalised <span className="text-blue-500 italic font-serif font-light">Teaching</span> for Every Child
              </h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
                At Wiss Learn Space, we believe every child is unique. Our multi-sensory approach harmonizes visual, auditory, and kinesthetic pathways to ensure deep understanding and joyful discovery.
              </p>
              <ul className="space-y-4">
                {[
                  "Actions & Songs for rhythmic engagement",
                  "Flashcards & Visual Aids for pattern recognition",
                  "Hands-on Activities for tactile exploration",
                  "Games & Storytelling for narrative logic"
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-slate-300 font-light">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square bg-blue-600/10 rounded-full blur-3xl absolute -inset-10" />
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
                alt="Child Learning"
                className="relative rounded-3xl shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
