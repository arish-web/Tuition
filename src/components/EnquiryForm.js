import React from 'react';

export default function EnquiryForm() {
  return (
    <section id="enquiry" className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 rounded-full blur-[120px] -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-emerald-100/40 rounded-full blur-[100px] -ml-20 -mb-20" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/5 overflow-hidden border border-slate-100 flex flex-col md:flex-row">

          {/* LEFT COLUMN: BRANDING/INFO */}
          <div className="md:w-2/5 bg-slate-900 p-10 md:p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold leading-tight mb-6">
                Start Your Child's <span className="text-blue-400">Journey</span> With Us
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Enroll your child in a space where curiosity meets excellence. We'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                </div>
                Personalized Attention
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                </div>
                Safe Learning Environment
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: THE FORM */}
          <div className="md:w-3/5 p-10 md:p-12 bg-white">
            <h4 className="text-xl font-bold text-slate-900 mb-8">Student Admission Enquiry</h4>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 ml-1">Student Name</label>
                <input
                  type="text"
                  className="w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-xl outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 text-slate-900 placeholder:text-slate-400"
                  placeholder="e.g. Arjun Kumar"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative group">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 ml-1">Class / Grade</label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-xl outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 text-slate-900 placeholder:text-slate-400"
                    placeholder="Class IV"
                  />
                </div>
                <div className="relative group">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 ml-1">Age</label>
                  <input
                    type="number"
                    className="w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-xl outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 text-slate-900 placeholder:text-slate-400"
                    placeholder="9"
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 ml-1">Parent Contact Number</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">+91</span>
                  <input
                    type="tel"
                    className="w-full bg-slate-50 border-2 border-slate-100 p-4 pl-14 rounded-xl outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 text-slate-900 placeholder:text-slate-400"
                    placeholder="98765 43210"
                  />
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2 group">
                Submit Enquiry
                <svg className="group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </button>

              <p className="text-center text-xs text-slate-400 mt-4">
                By submitting, you agree to our contact terms.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}