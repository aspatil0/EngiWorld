import { useNavigate, useParams } from "react-router-dom";
import DepartmentCard from "../../Components/DepartmentCard";

const departments = [
    {
        id: "cs",
        title: "Computer Engineering",
        icon: "💻",
        tag: "CS",
        description: "AI • Web Dev • Cloud • Cyber Security",
    },
    {
        id: "it",
        title: "Information Technology",
        icon: "🌐",
        tag: "IT",
        description: "Networks • Software • Databases",
    },
    {
        id: "aids",
        title: "AI & Data Science",
        icon: "🤖",
        tag: "AI&DS",
        description: "Machine Learning • Analytics • NLP",
    },
    {
        id: "aiml",
        title: "AI & Machine Learning",
        icon: "🧠",
        tag: "AI&ML",
        description: "Deep Learning • Neural Nets • CV",
    },
    {
        id: "mech",
        title: "Mechanical Engineering",
        icon: "⚙️",
        tag: "ME",
        description: "Thermodynamics • Manufacturing • CAD",
    },
    {
        id: "civil",
        title: "Civil Engineering",
        icon: "🏗️",
        tag: "CE",
        description: "Structures • Surveying • Materials",
    },
    {
        id: "entc",
        title: "Electronics Engineering",
        icon: "📡",
        tag: "ENTC",
        description: "VLSI • Embedded • Signal Processing",
    },
    {
        id: "electrical",
        title: "Electrical Engineering",
        icon: "⚡",
        tag: "EE",
        description: "Power • Control Systems • Machines",
    },
];

function SelectDepartment() {
    const navigate = useNavigate();
    const { year } = useParams();

    const handleSelect = (department) => {
        navigate(`/${year}/${department}`);
    };

    return (
        <div className="relative min-h-screen w-full bg-bg flex flex-col items-center justify-start md:justify-center px-4 pt-20 pb-28 sm:px-6 md:px-8 overflow-hidden">

            {/* Floating background orbs */}
            <div className="absolute top-[-10%] left-[-5%] w-[550px] h-[550px] rounded-full bg-primary/25 blur-[80px] animate-float pointer-events-none -z-0" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[450px] h-[450px] rounded-full bg-primary-light/20 blur-[60px] animate-float-reverse pointer-events-none -z-0" />
            <div className="absolute top-1/3 right-1/4 w-56 h-56 rounded-full bg-primary/12 blur-[50px] animate-float pointer-events-none -z-0" style={{ animationDelay: "4s" }} />

            <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
                <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">

                    <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-6"
                        style={{ animationDelay: "100ms" }}
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest">
                            Select Your Department
                        </span>
                    </div>

                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-heading leading-tight animate-fade-in-up"
                        style={{ animationDelay: "200ms" }}
                    >
                        Choose Your <span className="gradient-text">Branch</span>
                    </h1>

                    <p
                        className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-text-muted max-w-md mx-auto leading-relaxed animate-fade-in-up"
                        style={{ animationDelay: "300ms" }}
                    >
                        Choose your department to continue
                    </p>
                </div>

                {/* Department grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 w-full max-w-4xl px-2 py-8">
                    {departments.map((dept, index) => (
                        <DepartmentCard
                            key={dept.id}
                            id={dept.id}
                            title={dept.title}
                            icon={dept.icon}
                            tag={dept.tag}
                            description={dept.description}
                            index={index}
                            onClick={() => handleSelect(dept.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SelectDepartment;
