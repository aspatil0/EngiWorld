import { Outlet, useParams, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";

const yearLabels = {
    FY: "First Year",
    SY: "Second Year",
    TY: "Third Year",
    BE: "Final Year",
    MTech: "M.Tech",
    "M.Tech": "M.Tech",
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

export default function MainLayout() {
    const { year, department, username } = useParams();
    const selectedYear = yearLabels[year] ?? "Dashboard";
    const selectedDepartment = department ? (departmentLabels[department] ?? "Dashboard") : "";
    const basePath = department ? `/${year}/${department}` : `/${year}`;
    const isHome = location.pathname.replace(/\/$/, "") === basePath.replace(/\/$/, "");

    return (
        <div className="min-h-screen bg-bg text-text-heading w-full justify-item-center ">
            <Navbar />

            <main className="mx-auto w-full h-full px-4 pb-8 pt-35 sm:px-6">
                {isHome && (
                    <section className="p-15 w-full mb-6 animate-fade-in-up">
                        <p className="text-2xl font-semibold uppercase tracking-widest text-text-muted justify-center">
                            Dashboard
                        </p>
                        <h2 className="mt-2 text-6xl font-bold  text-primary justify-center">
                            Welcome back,Siddhi
                        </h2>
                        <p className="mt-3 max-w-6xl text-text-body justify-center">
                            Selected: {selectedYear}
                            {selectedDepartment ? ` | ${selectedDepartment}` : ""}
                        </p>
                    </section>
                )}
                <Outlet />
            </main>
        </div>
    );
}