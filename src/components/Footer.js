export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-4">
        {/* About */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">
            Wiss Learn Space
          </h3>
          <p className="text-sm leading-relaxed">
            Providing quality tuition for Nursery to Class V students. Personal
            attention, strong basics, and a safe learning environment for young
            minds in Chennai.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#why" className="hover:text-white">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#subjects" className="hover:text-white">
                Subjects
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-white">
                Gallery
              </a>
            </li>
            <li>
              <a href="#enquiry" className="hover:text-white">
                Enquiry
              </a>
            </li>
          </ul>
        </div>

        {/* Classes */}
        <div>
          <h4 className="text-white font-semibold mb-3">Classes Offered</h4>
          <ul className="space-y-2 text-sm">
            <li>Nursery</li>
            <li>LKG / UKG</li>
            <li>Class I – V</li>
            <li>Homework Support</li>
            <li>Exam Preparation</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Chengalpattu, Tamil Nadu</li>
            <li>📞 91 8925 2464 93</li>
            <li>📞 +974 7758 1473</li>
            <li>🕘 Mon – Sat: 4 PM – 8 PM</li>
            <li>📧 wisslearnspace@gmail.com</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-white" aria-label="WhatsApp">
              💬
            </a>
            <a href="#" className="hover:text-white" aria-label="Facebook">
              📘
            </a>
            <a href="#" className="hover:text-white" aria-label="Instagram">
              📸
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Wiss Learn Space. All rights reserved.
      </div>
    </footer>
  );
}
