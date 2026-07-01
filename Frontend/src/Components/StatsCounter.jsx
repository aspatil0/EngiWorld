import CountUp from "react-countup";

import { FaUsers, FaBookOpen, FaFileAlt, FaUniversity } from "react-icons/fa";

function StatsCounter() {
  const stats = [
    {
      icon: <FaUsers />,
      end: 25000,
      suffix: "+",
      title: "Students",
      color: "text-[#FF6B6B]",
    },
    {
      icon: <FaBookOpen />,
      end: 18000,
      suffix: "+",
      title: "Notes",
      color: "text-[#FF6B6B]",
    },
    {
      icon: <FaFileAlt />,
      end: 1200,
      suffix: "+",
      title: "PYQs",
      color: "text-[#FF6B6B]",
    },
    {
      icon: <FaUniversity />,
      end: 150,
      suffix: "+",
      title: "Colleges",
      color: "text-[#FF6B6B]",
    },
  ];

  return (
    <section className="py-20 bg-[#FFF5F5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-14">

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-300"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#FF6B6B] text-center">
              Trusted by Engineering Students
            </h2>

            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <p className="text-center text-gray-500 text-lg">
            Thousands of students rely on EngiWorld every day.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Icon */}
              <div
                className={`w-20 h-20 mx-auto mb-6 rounded-full bg-[#FFF5F5] flex items-center justify-center text-4xl ${item.color}`}
              >
                {item.icon}
              </div>

              {/* Counter */}
                <h3 className="text-4xl font-bold text-gray-800">
                    {item.end}
                    {item.suffix}
                </h3>

              {/* Title */}
              <p className="mt-3 text-gray-600 text-lg font-medium">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default StatsCounter;