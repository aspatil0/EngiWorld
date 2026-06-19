import { useNavigate } from "react-router-dom";
import CategoryCard from "../../Components/CategoryCard";

// const categories = [
//     { id: "fy", title: "FY", emoji: "FY", description: "First Year" },
//     { id: "sy", title: "SY", emoji: "SY", description: "Second Year" },
//     { id: "ty", title: "TY", emoji: "TY", description: "Third Year" },
//     { id: "by", title: "BY", emoji: "BE", description: "Final Year" },
//     { id: "mtech", title: "M.Tech", emoji: "MT", description: "Post Graduate" },
// ];
 const categories = [
        { id: "FY", title: "FY", emoji: "🎓", description: "First Year"  },
        { id: "SY", title: "SY", emoji: "📚", description: "Second Year" },
        { id: "TY", title: "TY", emoji: "🔬", description: "Third Year"  },
        { id: "BE", title: "BE", emoji: "🎯", description: "Final Year"  },
        { id: "M.Tech", title: "M.Tech", emoji: "🏆", description: "Post Graduate" },
    ]


function SelectYear() {
    const navigate = useNavigate();

    const handleSelect = (year) => {
        if (year === "FY") {
            navigate("/FY");
            return;
        }

        navigate(`/select-department/${year}`);
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
                            Select Your Year
                        </span>
                    </div>

                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-heading leading-tight animate-fade-in-up"
                        style={{ animationDelay: "200ms" }}
                    >
                        Welcome Back, <span className="gradient-text">Utkarsh</span>
                    </h1>

                    <p
                        className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-text-muted max-w-md mx-auto leading-relaxed animate-fade-in-up"
                        style={{ animationDelay: "300ms" }}
                    >
                        Choose where you are in your engineering journey
                    </p>
                </div>

                <div className="flex flex-nowrap justify-center items-center gap-4 w-full overflow-x-auto pb-4 px-4 scrollbar-none">
                    {categories.map((item, index) => (
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

export default SelectYear;
