
import React from "react";
import CategoryCard from '../Components/CategoryCard'
import './SelectionPage'

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
        <div>
            <div className="Header">
                <h1>Welocme Back Utkarsh</h1>
                <p>We are here for You... </p>
            </div>

            <div className="grid-Layout">
                {Categories.map((item, index) => (
                    <CategoryCard key={index} title={item} />
                ))}

            </div>

        </div>
    )


}
export default SelectionPage;