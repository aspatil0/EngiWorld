import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contact"
      className="bg-white border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* About */}
          <div>

            <h2 className="text-3xl font-bold text-[#FF6B6B]">
              EngiWorld
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Your one-stop platform for engineering resources
              including Notes, PYQs, Syllabus, Projects,
              Internships, Placements and Career Guidance.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold text-gray-800 mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="text-gray-600 hover:text-[#FF6B6B] transition"
              >
                Home
              </Link>

              <a
                href="#features"
                className="text-gray-600 hover:text-[#FF6B6B] transition"
              >
                Features
              </a>

              <a
                href="#departments"
                className="text-gray-600 hover:text-[#FF6B6B] transition"
              >
                Departments
              </a>

              <a
                href="#faq"
                className="text-gray-600 hover:text-[#FF6B6B] transition"
              >
                FAQ
              </a>

            </div>

          </div>

          {/* Resources */}
          <div>

            <h3 className="text-xl font-semibold text-gray-800 mb-5">
              Resources
            </h3>

            <div className="flex flex-col gap-3 text-gray-600">

              <p>📚 Notes</p>

              <p>📝 PYQs</p>

              <p>📖 Syllabus</p>

              <p>💼 Internships</p>

              <p>🚀 Placements</p>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold text-gray-800 mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-600">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#FF6B6B]" />
                <span>support@engiworld.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#FF6B6B]" />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#FF6B6B] mt-1" />
                <span>Pune, Maharashtra, India</span>
              </div>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-12 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            {/* Copyright */}
            <p className="text-gray-500 text-center">
              © {new Date().getFullYear()} EngiWorld.
              All Rights Reserved.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#FFF5F5] flex items-center justify-center text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#FFF5F5] flex items-center justify-center text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#FFF5F5] flex items-center justify-center text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#FFF5F5] flex items-center justify-center text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white transition-all duration-300"
              >
                <FaGithub />
              </a>

            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-11 h-11 rounded-full bg-[#FF6B6B] text-white flex items-center justify-center hover:bg-[#ff5252] transition-all duration-300 hover:scale-110"
            >
              <FaArrowUp />
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;