import React from "react"
import Stulogo from '../assets/Student.jpg'

function CategoryCard({ title }) {
    return (
        <div className="flex flex-col items-center justify-center cursor-pointer group">
            <div className="w-22 h-22 rounded-xl bg-bg border border-border group-hover:border-primary/50 group-hover:shadow-md group-hover:shadow-primary/10 flex items-center justify-center overflow-hidden transition-all duration-300">
                <img src={Stulogo} alt={title} className="w-12 h-12 object-contain" />
            </div>
            <p className="mt-3 text-xs font-medium text-text-body group-hover:text-primary transition-colors duration-300">{title}</p>
        </div>
    )
};

export default CategoryCard;