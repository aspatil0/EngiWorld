import {
  FaBookReader,
  FaClock,
  FaUserGraduate,
  FaLaptopCode,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaBookReader />,
      title: "All Resources in One Place",
      description:
        "Access notes, PYQs, syllabus, projects, internships and placement resources without searching multiple websites.",
    },
    {
      icon: <FaClock />,
      title: "Save Time",
      description:
        "Quickly find the right study material and focus more on learning instead of searching.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Student Friendly",
      description:
        "Designed especially for engineering students with an easy-to-use and organized interface.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Industry Ready",
      description:
        "Learn practical skills, coding, projects and placement preparation for your career.",
    },
    {
      icon: <FaUsers />,
      title: "Community Support",
      description:
        "Connect with seniors and fellow students to share knowledge and grow together.",
    },
    {
      icon: <FaLightbulb />,
      title: "Continuous Learning",
      description:
        "Stay updated with new resources, technologies and opportunities throughout your engineering journey.",
    },
  ];

  return (
    <section className="py-24 bg-[#FFF5F5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block bg-[#FFE5E5] text-[#FF6B6B] px-5 py-2 rounded-full font-semibold">
            Why EngiWorld?
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-800">
            Why Students Choose{" "}
            <span className="text-[#FF6B6B]">
              EngiWorld
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-500 max-w-3xl mx-auto leading-8">
            EngiWorld is built to simplify the academic and career journey
            of engineering students by providing everything they need
            in one organized platform.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {reasons.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl border border-gray-200 shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >

              {/* Icon */}

              <div className="w-16 h-16 rounded-2xl bg-[#FF6B6B] flex items-center justify-center text-white text-3xl shadow-md">

                {item.icon}

              </div>

              {/* Title */}

              <h3 className="mt-6 text-2xl font-bold text-gray-800">

                {item.title}

              </h3>

              {/* Description */}

              <p className="mt-4 text-gray-500 leading-7">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
