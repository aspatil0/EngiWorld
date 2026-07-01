import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import SubjectCard from "../../Components/SubjectCards";
import ResourceCard from "../../Components/ResourceCard";

function PYQ() {
  const { year, department } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Subject structure mimicking database
  const subjectList = [
    { id: "dsa", title: "Data Structures & Algorithms", code: "310241", semester: 3, pyqCount: 3 },
    { id: "dbms", title: "Database Management Systems", code: "310242", semester: 5, pyqCount: 4 },
    { id: "toc", title: "Theory of Computation", code: "310243", semester: 5, pyqCount: 2 },
  ];

  // PYQs data indexed by subjectId
  const pyqsDatabase = {
    dbms: [
      { title: "DBMS INSEM 2023 Paper", type: "pdf", href: "/pyq/dbms-insem-2023.pdf", meta: "INSEM" },
      { title: "DBMS ENDSEM 2023 Paper", type: "pdf", href: "/pyq/dbms-endsem-2023.pdf", meta: "ENDSEM" },
      { title: "DBMS ENDSEM 2022 Paper", type: "pdf", href: "/pyq/dbms-endsem-2022.pdf", meta: "ENDSEM" },
    ],
    dsa: [
      { title: "DSA ENDSEM 2023 Paper", type: "pdf", href: "/pyq/dsa-endsem-2023.pdf", meta: "ENDSEM" },
    ]
  };
  // Filter subjects matching search and route parameters
  const filteredSubjects = useMemo(() => {
    return subjectList.filter((sub) =>
      sub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.code.includes(searchQuery)
    );
  }, [searchQuery]);

  return (
    <section className="flex flex-col gap-6 max-w-5xl mx-auto py-4">
      <div className="text-xs font-semibold uppercase tracking-wider text-primary">
        {department?.toUpperCase()} &gt; {year?.toUpperCase()} &gt; PYQs
      </div>

      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-heading">Previous Year Papers</h1>
          <p className="mt-2 text-text-body">Search subjects and download their past university papers.</p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search subject or code..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-10 py-2 rounded-xl border border-border bg-white focus:outline-none focus:border-primary/50 text-sm"
          />
        </div>
      </div>

      {/* Subject list */}
      <div>
        <h2 className="text-md font-bold mb-3 text-text-heading">Select Subject</h2>
        <div className="flex flex-wrap gap-6">
          {filteredSubjects.map((sub, idx) => (
            <SubjectCard
              key={sub.id}
              title={sub.title}
              code={sub.code}
              semester={sub.semester}
              pyqCount={sub.pyqCount}
              onClick={() => setSelectedSubject(sub)}
              index={idx}
            />
          ))}
        </div>
      </div>

      {/* Render selected subject's PYQs */}
      {selectedSubject && (
        <div className="animate-fade-in-up mt-4">
          <h2 className="text-md font-bold mb-3 text-text-heading">
            PYQ PDFs for {selectedSubject.title}
          </h2>
          <div className="flex flex-wrap gap-6">
            {pyqsDatabase[selectedSubject.id] && pyqsDatabase[selectedSubject.id].length > 0 ? (
              pyqsDatabase[selectedSubject.id].map((pyq, index) => (
                <ResourceCard
                  key={index}
                  title={pyq.title}
                  type={pyq.type}
                  meta={pyq.meta}
                  href={pyq.href}
                  index={index}
                />
              ))
            ) : (
              <p className="text-text-muted text-sm italic">No PYQ papers found for this subject.</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default PYQ;
