import React ,{useState} from "react";
import { useParams } from "react-router-dom";
import SubjectCard from "../../Components/SubjectCards";
import SubjectDetails from "./Subject"
function Resources() {
    const {year,department}=useParams();
    const [selectedSubject,setselectedSubject]=useState(null);
    const subjectList=[
        { id: "dsa", title: "Data Structures & Algorithms", code: "310241", semester: 3, unitsCount: 6, resourcesCount: 15 },
        { id: "dbms", title: "Database Management Systems", code: "310242", semester: 5, unitsCount: 6, resourcesCount: 22 },
        { id: "toc", title: "Theory of Computation", code: "310243", semester: 5, unitsCount: 6, resourcesCount: 8 },
    ]

    if(selectedSubject){
        return(
            <SubjectDetails
                subject={selectedSubject}
                onBack={()=>setselectedSubject(null)}
            />
        );
    }
    return(
        <section className="flex flex-col gap-6 max-w-5xl mx-auto py-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary ">
                {department?.toUpperCase()} &gt; {year?.toUpperCase()} &gt; Resources
            </div>
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <h1 className="text-2xl font-bold text-text-heading">Learning Reosources</h1>
                <p className="mt-2 text-text-body">Selected a subject to access study guides, lectures notes, and video playlists</p>
            </div>
            <div className="mt-2 text-text-body">
                {subjectList.map((subject,idx) =>(
                    <SubjectCard
                    key={subject.id}
                    title={subject.title}
                    code={subject.code}
                    semester={subject.semester}
                    unitsCount={subject.unitsCount}
                    resourcesCount={subject.resourcesCount}
                    onClick={() => setselectedSubject(subject)}
                    index={idx}/>
                ))}
            </div>
        </section>
    )
   
}

export default Resources;
