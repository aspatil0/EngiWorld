import React, { useState } from "react";
import UnitResources from "./UnitResources"; // UnitResources.jsx

function Subject({ subject, onBack }) {
  const [selectedUnit, setSelectedUnit] = useState(null);

  const units = [
    { number: 1, name: "Introduction & Basic Structures", description: "Asymptotic notations, arrays, linked lists." },
    { number: 2, name: "Stacks & Queues", description: "ADTs, applications, circular queues." },
    { number: 3, name: "Trees", description: "Binary search trees, AVL trees, traversals." },
    { number: 4, name: "Graphs", description: "BFS, DFS, Dijkstra's algorithm, Spanning trees." },
    { number: 5, name: "Search & Sort Techniques", description: "Hashing, collision resolution, quicksort, mergesort." },
    { number: 6, name: "File Structures", description: "Sequential, direct indexing, B-Trees." },
  ];

  if (selectedUnit) {
    return (
      <UnitResources 
        subject={subject} 
        unit={selectedUnit} 
        onBack={() => setSelectedUnit(null)} 
      />
    );
  }

  return (
    <section className="flex flex-col gap-6 max-w-5xl mx-auto py-4">
      {/* Back navigation and title */}
      <div>
        <button onClick={onBack} className="text-sm font-semibold text-primary hover:underline mb-2">
          &larr; Back to Subjects
        </button>
        <h1 className="text-2xl font-bold text-text-heading">{subject.title}</h1>
        <p className="text-sm text-text-muted">Subject Code: {subject.code}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {units.map((unit) => (
          <div 
            key={unit.number}
            onClick={() => setSelectedUnit(unit)}
            className="p-5 bg-white border border-border/50 rounded-2xl cursor-pointer hover:border-primary/30 hover:shadow-md transition-all duration-300 active:scale-98"
          >
            <div className="font-bold text-primary text-xs uppercase tracking-wider mb-1">
              Unit {unit.number}
            </div>
            <h3 className="font-bold text-text-heading text-base">{unit.name}</h3>
            <p className="text-xs text-text-body mt-2 leading-relaxed">{unit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Subject;
