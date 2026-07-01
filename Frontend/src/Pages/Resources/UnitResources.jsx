import React from "react";
import ResourceCard from "../../Components/ResourceCard";

function UnitResources({ subject, unit, onBack }) {
    // Mock resources database query
    const mockResources = [
        { title: "Unit Study Notes PDF", type: "pdf", meta: "Notes", href: "/docs/unit-notes.pdf", description: "Detailed handwritten lecture notes." },
        { title: "Unit Questions & Bank", type: "pdf", meta: "Question Bank", href: "/docs/unit-qb.pdf", description: "In-sem and End-sem high-frequency questions." },
        { title: "YouTube Lectures Playlist", type: "video", meta: "Video Link", href: "https://youtube.com/example", description: "Curated list of tutorial videos." },
    ];

    return (
        <section className="flex flex-col gap-6 max-w-5xl mx-auto py-4">
            <div>
                <button onClick={onBack} className="text-sm font-semibold text-primary hover:underline mb-2">
                    &larr; Back to Units
                </button>
                <div className="text-xs font-bold uppercase text-primary">Unit {unit.number}</div>
                <h1 className="text-2xl font-bold text-text-heading">{unit.name}</h1>
            </div>

            <div className="flex flex-wrap gap-6">
                {mockResources.map((res, index) => (
                    <ResourceCard
                        key={index}
                        title={res.title}
                        type={res.type}
                        meta={res.meta}
                        href={res.href}
                        description={res.description}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}

export default UnitResources;
