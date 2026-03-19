import { Link } from "react-router-dom";

const creativeWritingTopics = [
    {
        emoji: "💡",
        title: "Idea Generation",
        desc: "Thinking skills to create stories and ideas",
        color: "from-yellow-50 to-yellow-100",
        border: "border-yellow-200",
        accent: "text-yellow-600",
        dot: "bg-yellow-500",
    },
    {
        emoji: "🧠",
        title: "Sentence Expansion",
        desc: "Turning simple sentences into detailed ones",
        color: "from-purple-50 to-purple-100",
        border: "border-purple-200",
        accent: "text-purple-600",
        dot: "bg-purple-500",
    },
    {
        emoji: "📖",
        title: "Story Writing",
        desc: "Beginning, middle, and ending structure",
        color: "from-blue-50 to-blue-100",
        border: "border-blue-200",
        accent: "text-blue-600",
        dot: "bg-blue-500",
    },
    {
        emoji: "🎨",
        title: "Descriptive Writing",
        desc: "Using adjectives, similes, and imagination",
        color: "from-pink-50 to-pink-100",
        border: "border-pink-200",
        accent: "text-pink-600",
        dot: "bg-pink-500",
    },
    {
        emoji: "🗣️",
        title: "Expression Skills",
        desc: "Writing thoughts clearly and creatively",
        color: "from-orange-50 to-orange-100",
        border: "border-orange-200",
        accent: "text-orange-600",
        dot: "bg-orange-500",
    },
    {
        emoji: "📝",
        title: "Paragraph Writing",
        desc: "Organizing ideas in a structured format",
        color: "from-green-50 to-green-100",
        border: "border-green-200",
        accent: "text-green-600",
        dot: "bg-green-500",
    },
    {
        emoji: "🔤",
        title: "Vocabulary Building",
        desc: "Learning new and powerful words",
        color: "from-teal-50 to-teal-100",
        border: "border-teal-200",
        accent: "text-teal-600",
        dot: "bg-teal-500",
    },
    {
        emoji: "📚",
        title: "Guided Writing Practice",
        desc: "Step-by-step writing support",
        color: "from-indigo-50 to-indigo-100",
        border: "border-indigo-200",
        accent: "text-indigo-600",
        dot: "bg-indigo-500",
    },
    {
        emoji: "🏆",
        title: "Confidence in Writing",
        desc: "Developing creativity and originality",
        color: "from-rose-50 to-rose-100",
        border: "border-rose-200",
        accent: "text-rose-600",
        dot: "bg-rose-500",
    },
];

export default function CreativeWriting() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Banner */}
            <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
                <img
                    src="/creative_writing_hero.png"
                    alt="Creative Writing"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/40 to-slate-950/80" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/25 text-white text-xs font-bold tracking-[0.3em] uppercase backdrop-blur-md mb-6">
                        Ideas · Stories · Expression
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-4">
                        Creative Writing
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl font-light max-w-xl leading-relaxed">
                        Inspire young imaginations to craft vivid stories, rich descriptions,
                        and powerful paragraphs.
                    </p>
                    <Link
                        to="/#enquiry"
                        className="mt-10 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-full text-sm tracking-wide transition-all duration-300 shadow-xl shadow-blue-900/50 hover:shadow-blue-700/60 hover:scale-105"
                    >
                        Enquire Now
                    </Link>
                </div>
            </div>

            {/* Intro */}
            <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                <span className="text-blue-600 font-bold tracking-[0.3em] text-xs uppercase block mb-5">
                    What Your Child Will Learn
                </span>
                <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight mb-6">
                    Unleash Your Child's{" "}
                    <span className="font-serif italic text-slate-500">
                        Creative Voice
                    </span>
                </h2>
                <p className="text-slate-500 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                    Our Creative Writing programme nurtures imagination, builds vocabulary,
                    and teaches children how to structure their thoughts into compelling
                    stories and paragraphs — step by step.
                </p>
            </div>

            {/* Topics Grid */}
            <div className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {creativeWritingTopics.map((topic, i) => (
                        <div
                            key={topic.title}
                            className={`relative p-7 rounded-3xl bg-gradient-to-br ${topic.color} border ${topic.border} group hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                        >
                            <div className="text-3xl mb-4">{topic.emoji}</div>
                            <span
                                className={`text-[10px] font-bold tracking-[0.25em] uppercase ${topic.accent} mb-2 block`}
                            >
                                Topic {String(i + 1).padStart(2, "0")}
                            </span>
                            <h3 className="text-slate-900 font-bold text-lg mb-2 leading-tight">
                                {topic.title}
                            </h3>
                            <p className="text-slate-600 text-sm font-light leading-relaxed">
                                {topic.desc}
                            </p>
                            <div
                                className={`absolute top-6 right-6 w-2 h-2 rounded-full ${topic.dot} opacity-60`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Strip */}
            <div className="bg-slate-950 py-24 text-center px-6">
                <h3 className="text-white text-4xl md:text-5xl font-black mb-4 tracking-tight">
                    Ready to get started?
                </h3>
                <p className="text-slate-400 text-lg font-light mb-10 max-w-lg mx-auto">
                    Help your child find their unique voice. Enrol in our Creative Writing
                    programme today.
                </p>
                <Link
                    to="/#enquiry"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-900"
                >
                    Enquire Now
                </Link>
            </div>
        </div>
    );
}
