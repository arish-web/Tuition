import React from 'react';

export default function MultiSensoryLearning() {
    const activities = [
        {
            title: "Actions and Songs",
            label: "Rhythmic Auditory",
            desc: "🎶 Engaging actions and songs to anchor phonological awareness and linguistic patterns.",
        },
        {
            title: "Flashcards and Visual Aids",
            label: "Visual Stimuli",
            desc: "🃏 High-fidelity visual tools designed to accelerate pattern recognition and retention.",
        },
        {
            title: "Hands-on Activities",
            label: "Tactile Exploration",
            desc: "✋ Engaging the 'learning-by-doing' philosophy through physical manipulatives and sensory-rich experiments.",
        },
        {
            title: "Games and Storytelling",
            label: "Narrative Logic",
            desc: "🎲 Immersive storytelling and gamified logic that bridge the gap between theory and application.",
        },
    ];

    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Left Content Side */}
                    <div className="lg:w-5/12">
                        <header className="mb-12">
                            <span className="text-blue-600 font-bold tracking-[0.3em] text-xs uppercase block mb-4">
                                Our Pedagogy
                            </span>
                            <h2 className="text-4xl md:text-6xl font-light text-slate-900 leading-[1.1] mb-6">
                                Multi-Sensory <br />
                                <span className="font-serif italic text-slate-400 text-5xl md:text-7xl">Learning</span>
                            </h2>
                            <p className="text-slate-500 text-lg font-light leading-relaxed">
                                We recognize that every child learns differently.
                                Our approach harmonizes visual, auditory, and kinesthetic pathways to ensure
                                <span className="text-slate-900 font-normal"> deep understanding and joyful discovery.</span>
                            </p>
                        </header>

                        <div className="space-y-8">
                            {activities.map((item, index) => (
                                <div key={item.title} className="group flex gap-6 items-start">
                                    <span className="text-xs font-serif italic text-blue-600 pt-1">0{index + 1}</span>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">
                                            {item.label}
                                        </p>
                                        <p className="text-slate-500 text-sm font-light leading-relaxed max-w-sm">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Visual Side */}
                    <div className="lg:w-7/12 relative">
                        {/* Decorative background element */}
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60"></div>

                        <div className="relative group">
                            {/* Main Image */}
                            <div className="overflow-hidden rounded-[2.5rem] shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1619633376278-d8652961ce02?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Multi-Sensory Learning"
                                    className="w-full h-[650px] object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>

                            {/* Premium Floating Badge */}
                            <div className="absolute -bottom-10 -left-10 bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/20 z-20 max-w-xs hidden xl:block">
                                <div className="space-y-4">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-5xl font-light text-slate-900 tracking-tighter">100</span>
                                        <span className="text-2xl text-blue-600 font-serif">%</span>
                                    </div>
                                    <p className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
                                        Active Engagement
                                    </p>
                                    <div className="h-[1px] w-full bg-slate-200"></div>
                                    <p className="text-sm text-slate-500 font-light italic leading-relaxed">
                                        "Bridging the gap between curiosity and academic mastery through sensory immersion."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}