import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="pt-28 pb-20 bg-[#FFF5F5] overflow-hidden">
      {/* <div className="max-w-7xl mx-auto px-6 lg:px-10"> */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">

        {/* <div className="grid lg:grid-cols-2 gap-14 items-center"> */}
        <div className="grid lg:grid-cols-[1fr_1.35fr] gap-10 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Badge */}
            <span className="inline-block bg-[#FFE5E5] text-[#FF6B6B] px-5 py-2 rounded-full font-semibold">
              🚀 One Platform for Every Engineering Student
            </span>

            {/* Heading */}
            <h1 className="mt-7 text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">

              Learn.
              <br />

              Build.
              <br />

              Grow with{" "}

              <span className="text-[#FF6B6B]">
                EngiWorld
              </span>

            </h1>

            {/* Description */}
            <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl">
              Access Notes, Previous Year Question Papers,
              Syllabus, Internship Opportunities,
              Placement Resources and Career Guidance —
              all in one place.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/register"
                className="bg-[#FF6B6B] text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-[#ff5252] hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </Link>

              <a
                href="#features"
                className="border-2 border-[#FF6B6B] text-[#FF6B6B] px-8 py-4 rounded-xl font-semibold hover:bg-[#FF6B6B] hover:text-white transition-all duration-300"
              >
                Explore Features
              </a>

            </div>

            {/* Small Stats */}
            <div className="flex flex-wrap gap-8 mt-12">

              <div>
                <h3 className="text-2xl font-bold text-[#FF6B6B]">
                  5000+
                </h3>
                <p className="text-gray-500">
                  Students
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#FF6B6B]">
                  1000+
                </h3>
                <p className="text-gray-500">
                  Notes
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#FF6B6B]">
                  150+
                </h3>
                <p className="text-gray-500">
                  Colleges
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >

            <div className="relative">

              {/* Background Circle */}
              <div className="absolute inset-0 rounded-full bg-[#FFE5E5] blur-3xl scale-90"></div>

              <motion.img
                src={heroImage}
                alt="Engineering Student"
                // className="relative w-full max-w-lg"
                className="relative w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
              />

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;