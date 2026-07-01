import { Link } from "react-router-dom";
import { FaArrowRight, FaRocket } from "react-icons/fa";

function Banner() {
  return (
    <section className="py-20 bg-[#FFF5F5]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden">

          <div className="grid lg:grid-cols-2 items-center">

            {/* Left Content */}

            <div className="p-10 lg:p-16">

              <div className="inline-flex items-center gap-2 bg-[#FFE5E5] text-[#FF6B6B] px-4 py-2 rounded-full font-semibold mb-6">

                <FaRocket />

                <span>Start Your Engineering Journey</span>

              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">

                Everything an Engineering Student Needs

                <span className="text-[#FF6B6B]">
                  {" "}In One Place
                </span>

              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-8">

                Access Notes, Previous Year Question Papers,
                Syllabus, Projects, Internships,
                Placement Resources and Career Guidance —
                all through one smart platform.

              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                <div className="bg-[#FFF5F5] px-5 py-3 rounded-xl font-medium text-[#FF6B6B]">
                    📚 Notes
                </div>

                <div className="bg-[#FFF5F5] px-5 py-3 rounded-xl font-medium text-[#FF6B6B]">
                  📝 PYQs
                </div>

                <div className="bg-[#FFF5F5] px-5 py-3 rounded-xl font-medium text-[#FF6B6B]">
                  💼 Placements
                </div>

              </div>

            </div>

            {/* Right Side */}

            <div className="bg-[#FF6B6B] text-white p-10 lg:p-16 flex flex-col justify-center items-center text-center h-full">

              <h3 className="text-3xl font-bold">

                Ready to Join EngiWorld?

              </h3>

              <p className="mt-5 text-white/90 leading-7">

                Create your free account and unlock
                everything you need for your engineering
                journey.

              </p>

              <Link
                to="/register"
                className="mt-8 inline-flex items-center gap-3 bg-white text-[#FF6B6B] px-8 py-4 rounded-xl font-semibold border border-gray-200 hover:bg-[#FFF5F5] transition duration-300 shadow-md"
              >
                Get Started

                <FaArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Banner;