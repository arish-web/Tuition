import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 mt-16 font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section: Brand & Contact CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-12 mb-12 gap-8">
          <div className="max-w-md">
            <h3 className="text-2xl font-bold text-white mb-2">Wiss Learn Space</h3>
            <p className="text-sm text-slate-500 italic">
              Wiss Learn Space is a child-focused centre building strong foundations in literacy and essential skills. Through phonics, multi-sensory learning, and small groups, we nurture confident, independent learners.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="https://wa.me/918925246493" className="p-3 bg-slate-800 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </a>
            <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 pb-12">

          {/* Column 1: Core Values */}
          <div className="space-y-4">
            <h4 className="text-white font-bold tracking-wider uppercase text-xs">The Excellence</h4>
            <p className="text-sm leading-7 text-slate-400">
              Located in Chengalpattu, we specialize in building strong foundations in Phonics, Grammar, and Creative Writing. We believe every child is unique and deserves a tailored learning path.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-white font-bold tracking-wider uppercase text-xs mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'Why Choose Us', 'Subjects', 'Gallery', 'Enquiry'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '')}`} className="text-sm hover:text-blue-400 transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-blue-400 transition-all mr-0 group-hover:mr-2"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Expertise */}
          <div>
            <h4 className="text-white font-bold tracking-wider uppercase text-xs mb-6">Expertise</h4>
            <ul className="space-y-4">
              {['Phonics Mastery', 'Advanced Grammar', 'Creative Writing', 'Calligraphy'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h4 className="text-white font-bold tracking-wider uppercase text-xs mb-6">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                </span>
                <span>Big Natham, Chengalpattu,<br />Tamil Nadu - 603002</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </span>
                <span>+91 89252 46493</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                </span>
                <span>wisslearnspace@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500 uppercase tracking-widest">
          <p>© {currentYear} Wiss Learn Space</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}