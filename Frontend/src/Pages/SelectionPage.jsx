
import React from "react";
import CategoryCard from '../Components/CategoryCard'

function SelectionPage() {
    const Categories = [
        "Just Passed 12th",
        "FY",
        "SY",
        "TY",
        "BY",
        "M.Tech"
    ]

    return (
        <div className="bg-card rounded-2xl shadow-sm border border-border p-10 md:p-14 max-w-4xl w-full h-100">
            <div className="text-center mb-12">
                <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Select Your Category</p>
                <h1 className="text-2xl md:text-3xl font-bold text-text-heading">Welcome Back, Utkarsh</h1>
                <p className="text-text-muted mt-2 text-sm">Choose where you are in your engineering journey</p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 justify-items-center">
                {Categories.map((item, index) => (
                    <CategoryCard key={index} title={item} />
                ))}
            </div>
        </div>
    )
}

export default SelectionPage;