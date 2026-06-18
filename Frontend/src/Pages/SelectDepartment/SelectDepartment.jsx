
import { useNavigate, useParams } from "react-router-dom";
import CategoryCard from "../../Components/CategoryCard";

const departments = [
    { id: "cs", title: "Computer Engineering", emoji: "CS", description: "Computer branch" },
    { id: "it", title: "Information Technology", emoji: "IT", description: "IT branch" },
    { id: "aids", title: "AI & DS", emoji: "AI", description: "Artificial Intelligence and Data Science" },
    { id: "aiml", title: "AI & ML", emoji: "ML", description: "Artificial Intelligence and Machine Learning" },
    { id: "mech", title: "Mechanical Engineering", emoji: "ME", description: "Mechanical branch" },
    { id: "civil", title: "Civil Engineering", emoji: "CE", description: "Civil branch" },
    { id: "entc", title: "Electronics Engineering", emoji: "EC", description: "Electronics branch" },
    { id: "electrical", title: "Electrical Engineering", emoji: "EE", description: "Electrical branch" },
];

function SelectDepartment() {
    const navigate = useNavigate();
    const { year } = useParams();

    const handleSelect = (department) => {
        navigate(`/${year}/${department}`);
    };

    return (
        <div className="relative min-h-screen w-full bg-bg flex flex-col items-center justify-start md:justify-center px-4 py-20 sm:px-6 md:px-8">
            <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
                <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-6"
                        style={{ animationDelay: "100ms" }}
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest">
                            Select Your Department
                        </span>
                    </div>

                    <p
                        className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-text-muted max-w-md mx-auto leading-relaxed animate-fade-in-up"
                        style={{ animationDelay: "300ms" }}
                    >
                        Choose your department to continue
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-6 w-full max-w-4xl pb-4 px-4">
                    {departments.map((item, index) => (
                        <CategoryCard
                            key={item.id}
                            title={item.title}
                            emoji={item.emoji}
                            description={item.description}
                            index={index}
                            onClick={() => handleSelect(item.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SelectDepartment;
