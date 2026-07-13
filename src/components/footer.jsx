import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Company */}
          <div className="lg:col-span-2">
            <h2
              className="text-3xl text-white"
              style={{ fontFamily: "Federo, sans-serif" }}
            >
              Nepal Flower
              <span className="text-green-500"> & Decor</span>
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Nepal Flower and Decor is a professional wedding decoration,
              floral design and event management company based in Kathmandu,
              Nepal. We specialize in weddings, engagements, receptions,
              birthdays, corporate events and luxury floral styling.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-600 transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 transition flex items-center justify-center"
              >
                <FaYoutube />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-500 transition flex items-center justify-center"
              >
                <FaWhatsapp />
              </a>

            </div>
          </div>

          {/* Services */}

          <div>
            <h3 className="text-xl text-white font-semibold mb-5">
              Services
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#" className="hover:text-green-500">
                  Wedding Decoration
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-green-500">
                  Reception Decoration
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-green-500">
                  Mandap Decoration
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-green-500">
                  Birthday Decoration
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-green-500">
                  Corporate Events
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-green-500">
                  Floral Arrangements
                </a>
              </li>

            </ul>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl text-white font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li><a href="#" className="hover:text-green-500">Home</a></li>

              <li><a href="#about" className="hover:text-green-500">About Us</a></li>

              <li><a href="#" className="hover:text-green-500">Gallery</a></li>

              <li><a href="#testimony" className="hover:text-green-500">Testimonials</a></li>

              <li><a href="/contact" className="hover:text-green-500">Contact</a></li>

            </ul>
          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl text-white font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <MapPin className="text-green-500 mt-1" size={18} />

                <p>
                  New Baneshwor,
                  <br />
                  Kathmandu, Nepal
                </p>

              </div>

              <div className="flex gap-3">

                <Phone className="text-green-500" size={18} />

                <a
                  href="tel:+977 9808244699"
                  className="hover:text-green-500"
                >
                 +977 9808244699
                </a>

              </div>

              <div className="flex gap-3">

                <Mail className="text-green-500" size={18} />

                <a
                  href="mailto:nepalfloweranddecor7@gmail.com"
                  className="hover:text-green-500"
                >
                  nepalfloweranddecor7@gmail.com
                </a>

              </div>

              <div className="flex gap-3">

                <Clock className="text-green-500" size={18} />

                <p>
                  Sun - Fri
                  <br />
                  9:00 AM - 7:00 PM
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* Bottom */}

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-center md:text-left text-gray-500">
            © {year}{" "}
            <span className="text-white">
              Nepal Flower & Decor
            </span>
            . All Rights Reserved.
          </p>

          <div className="flex gap-6">

            <a href="#" className="hover:text-green-500">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-green-500">
              Terms
            </a>

            <a href="https://maps.app.goo.gl/JhyRWwSRqptfNDGQ7" className="hover:text-green-500">
              Sitemap
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}