import { Outlet, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

const yearLabels = {
    FY: "First Year",
    SY: "Second Year",
    TY: "Third Year",
    BY: "Final Year",
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
    const { year, department } = useParams();
    const selectedYear = yearLabels[year] ?? "Dashboard";
    const selectedDepartment = department ? (departmentLabels[department] ?? "Dashboard") : "";

    return (
        <div className="min-h-screen bg-bg text-text-heading">
            <Navbar />

            <main className="mx-auto max-w-6xl px-4 pb-8 pt-24 sm:px-6">
                <section className="rounded-lg border border-border bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-widest text-text-muted">
                        Dashboard
                    </p>
                    <h2 className="mt-2 text-2xl font-bold">
                        Welcome back, Utkarsh
                    </h2>
                    <p className="mt-3 max-w-2xl text-text-body">
                        Selected: {selectedYear}
                        {selectedDepartment ? ` | ${selectedDepartment}` : ""}
                    </p>
                </section>

                <Outlet />
            </main>
        </div>
    );
}
