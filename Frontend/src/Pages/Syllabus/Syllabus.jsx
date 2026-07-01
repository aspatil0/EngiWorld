import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "../../Components/CategoryCard";
import ResourceCard from "../../Components/ResourceCard";
function Syllabus() {
  const { year, department } = useParams();
  const [selectedPattern, setSelectedPattern] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  // Determine semesters based on selected year
  const getSemestersForYear = (yr) => {
    switch (yr?.toUpperCase()) {
      case "FY": return [1, 2];
      case "SY": return [3, 4];
      case "TY": return [5, 6];
      case "BE": return [7, 8];
      default: return [1, 2];
    }
  };
  const semesters = getSemestersForYear(year);
  // Simulated database for syllabus documents matching year, dept, pattern, and semester
  const syllabusData = {
    "pattern-2019": {
      5: { title: "Computer Engg. Sem 5 Syllabus (2019 Pat)", href: "/docs/sppu-cs-ty-sem5-2019.pdf" },
      6: { title: "Computer Engg. Sem 6 Syllabus (2019 Pat)", href: "/docs/sppu-cs-ty-sem6-2019.pdf" },
    },
    "pattern-2024": {
      5: { title: "Computer Engg. Sem 5 Syllabus (2024 Pat - NEP)", href: "/docs/sppu-cs-ty-sem5-2024.pdf" },
      6: { title: "Computer Engg. Sem 6 Syllabus (2024 Pat - NEP)", href: "/docs/sppu-cs-ty-sem6-2024.pdf" },
    }
  };
  return (
    <section className="flex flex-col gap-6 max-w-5xl mx-auto py-4">
      {/* Breadcrumb Info */}
      <div className="text-xs font-semibold uppercase tracking-wider text-primary">
        {department?.toUpperCase()} &gt; {year?.toUpperCase()} &gt; Syllabus
      </div>
      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-text-heading">Syllabus Documents</h1>
        <p className="mt-2 text-text-body">Select a course pattern and semester to fetch the curriculum guidelines.</p>
      </div>
      {/* Step 1: Pattern Selection */}
      <div>
        <h2 className="text-md font-bold mb-3 text-text-heading">Step 1: Select Course Pattern</h2>
        <div className="flex gap-4">
          <CategoryCard
            title="2019 Pattern"
            emoji="📚"
            description="SPPU CBCS course guidelines"
            onClick={() => { setSelectedPattern("pattern-2019"); setSelectedSemester(null); }}
            index={0}
          />
          <CategoryCard
            title="2024 Pattern"
            emoji="🎓"
            description="NEP alignment latest course syllabus"
            onClick={() => { setSelectedPattern("pattern-2024"); setSelectedSemester(null); }}
            index={1}
          />
        </div>
      </div>
      {/* Step 2: Semester Selection (if pattern is selected) */}
      {selectedPattern && (
        <div className="animate-fade-in-up">
          <h2 className="text-md font-bold mb-3 text-text-heading">Step 2: Choose Semester</h2>
          <div className="flex gap-3">
            {semesters.map((sem) => (
              <button
                key={sem}
                onClick={() => setSelectedSemester(sem)}
                className={`px-6 py-2.5 rounded-xl font-bold border transition-all ${
                  selectedSemester === sem
                    ? "bg-primary border-primary text-white shadow-md shadow-primary/20"
                    : "bg-white border-border text-text-heading hover:border-primary/50"
                }`}
              >
                Semester {sem}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Step 3: Display Syllabus download link */}
      {selectedPattern && selectedSemester && (
        <div className="animate-fade-in-up">
          <h2 className="text-md font-bold mb-3 text-text-heading">Step 3: Download Syllabus</h2>
          {syllabusData[selectedPattern]?.[selectedSemester] ? (
            <ResourceCard
              title={syllabusData[selectedPattern][selectedSemester].title}
              description="Official university curriculum document including unit-wise weightage and reference list."
              type="pdf"
              meta={`${year} Sem ${selectedSemester}`}
              href={syllabusData[selectedPattern][selectedSemester].href}
            />
          ) : (
            <p className="text-text-muted text-sm italic">Syllabus PDF not uploaded yet for this combination.</p>
          )}
        </div>
      )}
    </section>
  );
}
export default Syllabus;