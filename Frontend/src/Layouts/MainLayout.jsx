import { Outlet, useParams, useLocation } from "react-router-dom";
import CounsellingBanner from "../Components/CounsellingBanner";
import Navbar from "../Components/Navbar";
import DepartmentCard from "../Components/DepartmentCard";

const yearLabels = {
    FY: "First Year",
    SY: "Second Year",
    TY: "Third Year",
    BE: "Final Year",
    MTech: "M.Tech",

};

const departmentLabels = {
    cs: "Computer Engineering",
    it: "Information Technology",
    aids: "AI & DS",
    aiml: "AI & ML",
    mech: "Mechanical Engineering",
    civil: "Civil Engineering",
    entc: "Electronics Engineering",
    electrical: "Electrical Engineering",
};

const dashboardCards = [
    {
        id: "notes",
        title: "Notes",
        icon: "📝",
        tag: "NOTES",
        description: "Study Notes & PDFs",
    },
    {
        id: "pyq",
        title: "Previous Year Papers",
        icon: "📄",
        tag: "PYQ",
        description: "University Question Papers",
    },
    {
        id: "resources",
        title: "Resources",
        icon: "📦",
        tag: "RES",
        description: "Books • Videos • Articles",
    },
    {
        id: "subjects",
        title: "Subjects",
        icon: "📚",
        tag: "SUB",
        description: "Semester-wise Subjects",
    },
    {
        id: "syllabus",
        title: "Syllabus",
        icon: "📘",
        tag: "SYL",
        description: "Course Curriculum",
    },
    // {
    //     id: "ai",
    //     title: "AI Assistant",
    //     icon: "🤖",
    //     tag: "AI",
    //     description: "Ask Questions • Get Help",
    // },
];

export default function MainLayout() {
    const { year, department, username } = useParams();
    const location = useLocation();
    const selectedYear = yearLabels[year] ?? "Dashboard";
    const selectedDepartment = department ? (departmentLabels[department] ?? "Dashboard") : "";
    const basePath = department ? `/${year}/${department}` : `/${year}`;
    const isHome = location.pathname.replace(/\/$/, "") === basePath.replace(/\/$/, "");

    return (
        <div className="min-h-screen bg-bg text-text-heading w-full">
            <Navbar />

            <main className="mx-auto w-full h-full px-4 sm:px-6 pb-8 pt-35 flex flex-col items-center justify-start">
                {isHome && (
                    <section className="w-full max-w-4xl mb-6 animate-fade-in-up flex flex-col items-center">
                        <p className="text-2xl font-semibold uppercase tracking-widest text-text-muted">
                            Dashboard
                        </p>
                        <h2 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-bold text-primary">
                            Welcome back, Utkarsh
                        </h2>
                        <p className="mt-3 text-text-body max-w-2xl">
                            Selected: {selectedYear}
                            {selectedDepartment ? ` | ${selectedDepartment}` : ""}
                        </p>
                    </section>
                )}
                {isHome && (
                    <div className="w-full max-w-4xl flex flex-col items-center">
                        <h2 className="text-2xl font-bold mb-6 text-center w-full">Available resources</h2>
                        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center w-full">
                            {dashboardCards.map((item, index) => (
                                <DepartmentCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    icon={item.icon}
                                    tag={item.tag}
                                    description={item.description}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                )}
                <div className="w-full max-w-4xl">
                    <Outlet />
                </div>
            </main>

            <CounsellingBanner />
        </div>
    );
}