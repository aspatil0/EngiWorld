import React from "react";
import {Link,useParams} from "react-router-dom";
import { FaFileAlt,FaDownload,FaBookOpen } from "react-icons/fa";
function Info() {
  const {year , department} =useParams();
  const basePath=department ? `/${year}/${department}`:`/${year}`;
  const hubCards = [
    {
      title: "Previous Year Papers",
      description: "Download subject-wise previous year papers and question banks.",
      link: `${basePath}/pyq`,
      icon: <FaDownload className="text-3xl text-primary" />,
      gradient: "from-amber-500/10 to-orange-500/10 hover:border-amber-500/30",
    },
    {
      title: "Syllabus",
      description: "Access latest 2019 and 2024 Course Pattern syllabus structures.",
      link: `${basePath}/syllabus`,
      icon: <FaFileAlt className="text-3xl text-blue-500" />,
      gradient: "from-blue-500/10 to-indigo-500/10 hover:border-blue-500/30",
    },
    {
      title: "Resources",
      description: "Get curated notes, lecture slides (PPTs), and learning playlists.",
      link: `${basePath}/resources`,
      icon: <FaBookOpen className="text-3xl text-emerald-500" />,
      gradient: "from-emerald-500/10 to-teal-500/10 hover:border-emerald-500/30",
    },
  ];
  
  return (
    <section className="flex flex-col gap-8 max-w-6xl mx-auto py-4">
      <div className="rounded-2xl border-border-border bg-white p-6 shadow-sm">
        <h1 className="text-xl font-bold text-text-heading">Academic Resource Hub</h1>
        <p className="mt-2 text-text-body">Explore previous papers, official university syllabus documents, and learning resources custom-tailored for your branch.</p>
      </div>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hubCards.map((card, index) => (
          <Link key={index} to={card.link} className="group">
            <div className={`glass-card p-6 h-full flex flex-col justify-between border border-border/50 rounded-2xl bg-gradient-to-br ${card.gradient} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}>
              <div>
                <div className="mb-4 p-3 bg-white rounded-xl w-fit shadow-sm">{card.icon}</div>
                <h3 className="text-lg font-bold text-text-heading group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="mt-2 text-sm text-text-body">{card.description}</p>
              </div>
              <div className="mt-6 text-xs font-semibold text-primary group-hover:underline flex items-center gap-1">
                Explore Module &rarr;
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}


export default Info;
