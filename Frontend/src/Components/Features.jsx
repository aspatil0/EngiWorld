import {
  FaBookOpen,
  FaFileAlt,
  FaClipboardList,
  FaGraduationCap,
  FaBriefcase,
  FaLaptopCode,
  FaRoad,
  FaUsers,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaBookOpen />,
      title: "Notes",
      description:
        "Access semester-wise and department-wise study notes curated for engineering students.",
    },
    {
      icon: <FaFileAlt />,
      title: "Previous Year Papers",
      description:
        "Practice with previous university examination papers and improve preparation.",
    },
    {
      icon: <FaClipboardList />,
      title: "Syllabus",
      description:
        "Stay updated with the latest university syllabus for every semester.",
    },
    {
      icon: <FaRoad />,
      title: "Learning Roadmaps",
      description:
        "Follow structured roadmaps for academics, coding and placements.",
    },
    {
      icon: <FaBriefcase />,
      title: "Internships & Placements",
      description:
        "Discover internships, placement drives and career opportunities.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Projects",
      description:
        "Explore innovative engineering projects with source code and documentation.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Career Guidance",
      description:
        "Receive guidance from seniors and industry professionals.",
    },
    {
      icon: <FaUsers />,
      title: "Student Community",
      description:
        "Connect, discuss and collaborate with engineering students.",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-[#FFF5F5]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <h2 className="text-4xl font-bold text-gray-800">
            Everything You Need in One Platform
          </h2>

          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            EngiWorld brings together all the essential
            resources required by engineering students
            throughout their academic journey.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature, index) => (

            <div
              key={index}
              className="
                group
                bg-white
                border
                border-gray-200
                rounded-3xl
                p-8
                shadow-md
                hover:shadow-lg
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              {/* Icon */}
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-[#FFF5F5]
                  flex
                  items-center
                  justify-center
                  text-[#FF6B6B]
                  text-3xl
                  mb-6
                  transition-all
                  duration-300
                  group-hover:bg-[#FFE5E5]
                  group-hover:scale-105
                  group-hover:rotate-3
                "
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-[#FF6B6B]">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-7">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;