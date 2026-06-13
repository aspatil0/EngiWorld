import React from "react"
import Stulogo from '../assets/Student.jpg'

function CategoryCard({ title }) {
    return (
        <div className="card">
            <img src={Stulogo} alt={title} />
            <p>{title}</p>
        </div>
    )
};

export default CategoryCard;