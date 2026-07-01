import {
  FaLaptopCode,
  FaRobot,
  FaMicrochip,
  FaCogs,
  FaBolt,
  FaBuilding,
  FaBroadcastTower,
} from "react-icons/fa";

function Departments() {
  const departments = [
    {
      icon: <FaLaptopCode />,
      title: "Computer Engineering",
      description:
        "Notes, PYQs, syllabus, projects and placement resources.",
    },
    {
      icon: <FaMicrochip />,
      title: "Information Technology",
      description:
        "Study material, coding resources and internship guidance.",
    },
    {
      icon: <FaRobot />,
      title: "AI & DS",
      description:
        "Artificial Intelligence, Data Science and Machine Learning resources.",
    },
    {
      icon: <FaRobot />,
      title: "AI & ML",
      description:
        "Latest AI, ML roadmaps, notes and practical projects.",
    },
    {
      icon: <FaBroadcastTower />,
      title: "Electronics & Telecommunication",
      description:
        "Communication systems, electronics and embedded resources.",
    },
    {
      icon: <FaCogs />,
      title: "Mechanical Engineering",
      description:
        "CAD, manufacturing, thermal and design study resources.",
    },
    {
      icon: <FaBuilding />,
      title: "Civil Engineering",
      description:
        "Structural design, surveying and construction resources.",
    },
    {
      icon: <FaBolt />,
      title: "Electrical Engineering",
      description:
        "Power systems, machines and electrical engineering materials.",
    },
  ];

  return (
    <section
      id="departments"
      className="py-20 bg-[#FFF5F5]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Explore Engineering Departments
          </h2>

          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Browse department-wise study resources specially curated
            for engineering students.
          </p>
        </div>

        {/* Department Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {departments.map((dept, index) => (
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
                  rounded-full
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
                "
              >
                {dept.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#FF6B6B] transition-colors">
                {dept.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-7">
                {dept.description}
              </p>

              {/* Button */}
              <button
                className="
                  mt-6
                  text-[#FF6B6B]
                  font-semibold
                  hover:translate-x-1
                  transition-all
                  duration-300
                "
              >
                Explore →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Departments;