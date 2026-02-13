import React from 'react';
import { MapPin, Phone, Clock, Navigation, ArrowRight } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="location" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">
            Visit Our Campus
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Wiss Learn Space
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            A premium, safe, and focused learning environment designed specifically
            for Nursery to Class V students to thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* LEFT: INFORMATION */}
          <div className="lg:col-span-5 space-y-8">
            <div className="grid gap-6">
              {/* Address Card */}
              <div className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Our Address</h4>
                    <p className="text-slate-600 leading-relaxed">
                      38-3/11 Kailashnathar Koil Street,<br />
                      Big Natham, Chengalpattu - 603 002
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Get in Touch</h4>
                    <p className="text-slate-600">+91 89252 46493</p>
                    <p className="text-xs text-slate-400 mt-1 italic">Available via Call or WhatsApp</p>
                  </div>
                </div>
              </div>

              {/* Timing Card */}
              <div className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Learning Hours</h4>
                    <p className="text-slate-600">Monday – Saturday</p>
                    <p className="text-slate-900 font-semibold">4:00 PM – 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#enquiry"
                className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200"
              >
                Enquire Now <ArrowRight size={18} />
              </a>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                <Navigation size={18} /> Get Directions
              </a>
            </div>
          </div>

          {/* RIGHT: MAP CONTAINER */}
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[450px] rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3!2d79.9!3d12.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQyJzAwLjAiTiA3OcKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}