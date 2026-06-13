import React from "react";
import StudentImg from '../assets/Student.png'
import './SelectionPage.css'
function Selectionpage() {
    return (
        <div className="SelectionPage">
            <div className="frame">
                <div className="passout-12th">
                    <img src={StudentImg} alt="Student" />
                </div>
                <div className="Fy">
                    <img src={StudentImg} alt="Student" />
                </div>
                <div className="SY">
                    <img src={StudentImg} alt="Student" />
                </div>
                <div className="TY">
                    <img src={StudentImg} alt="Student" />
                </div>
                <div className="BY">
                    <img src={StudentImg} alt="Student" />
                </div>
            </div>
        </div>
    );
}

export default Selectionpage;