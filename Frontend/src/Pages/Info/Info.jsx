import React from "react";
import ResourceCard from "../../Components/ResourceCard"
import SubjectCard from "../../Components/SubjectCards"
function Info() {
  const subject = [
    {
      id: "DSA",
      title: "Data Structure and Algorithm",
      code: "12139",
      semester: 3,
      description: "The Study of Algorithm",
      pyqCount: 10,
      resourcesCount: 20,
      unitCount: 6,
    },
    {
      id: "DM",
      title: "Discrit Mathematics",
      code: "65491",
      semester: 3,
      description: "The Study of Discrit Math",
      pyqCount: 5,
      resourcesCount: 12,
      unitCount: 6,
    }
  ]
  const resource = [
    {
      title: "University SPPU Syllabus PDF",
      description: "Official SPPU syllabus structure guidelines.",
      type: "pdf",
      href: "https://example.com/syllabus.pdf",
      meta: "Syllabus Guide"
    },
    {
      title: "Reference video Playlist",
      description: "Curated learning videos for Second Year CS.",
      type: "video",
      href: "https://youtube.com/playlist?list=example",
      meta: "Video Lectures"
    }
  ]
  return (
    <section className="flex flex-col gap-7">
      <div className="rounded-2xl border-border-border bg-white p-6 shadow-sm">
        <h1 className="text-xl font-bold text-text-heading">Department Information</h1>
        <p className="mt-2 text-text-body">Quick overview of the course structure, subjects, and reference documents.</p>
      </div>
      <div>
        <h2 className="text-xl font-bold text-text-heading mb-4">Core Subject</h2>
        <div className="flex flex-wrap gap-6">
          {subject.map((subj, index) => (
            <SubjectCard
              key={subj.id} oplpijghjikk
              title={subj.title}
              code={subj.code}
              semester={subj.semester}
              description={subj.description}
              pyqCount={subj.pyqCount}
              resourcesCount={subj.resourcesCount}
              unitsCount={subj.unitCount}
            />
          ))}
        </div>
      </div>

      <div className="rounded-2xl border-border-border bg-white p-6 shadow-sm">
        <h1 className="text-xl font-bold text-text-heading">Resources For Clean Study</h1>
        <p className="mt-2 text-text-body">Various Resources availbale for you </p>
      </div>
      <div>
        <h2 className="text-xl font-bold text-text-heading mb-4">Resoruces</h2>
        <div className="flex flex-wrap gap-6">
          {resource.map((Res, index) => (
            <ResourceCard
              key={index}
              title={Res.title}
              description={Res.description}
              type={Res.type}
              meta={Res.meta}
              href={Res.href}
              index={index}
            />
          ))}
        </div>
      </div>

    </section>
  )
}


export default Info;
