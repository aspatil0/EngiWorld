import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/EWlogo.png";
import "./Profile.css";

function Profile() {
    const [studentType, setStudentType] = useState("");
    const navigate = useNavigate();

    return (
        <div className="profile-container">

        {/* Header */}
        <div className="header">
            <h1 className="header-title">EngiWorld</h1>

            <img
            src={logo}
            alt="EngiWorld Logo"
            className="logo"
            />
        </div>

        {/* Profile Card */}
        <div className="profile-card">

            <h2>My Profile 👤</h2>
            <p>Manage your account information</p>

            {/* Profile Picture */}
            <div className="profile-image-section">
            <div className="profile-image">
                👤
            </div>

            <button className="upload-btn">
                Upload Photo
            </button>
            </div>

            <form>

            <div className="form-group">
                <label>Full Name</label>
                <input
                type="text"
                placeholder="Enter your name"
                />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input
                type="email"
                placeholder="Enter your email"
                />
            </div>

            <div className="form-group">
                <label>Mobile Number</label>
                <input
                type="tel"
                placeholder="Enter mobile number"
                />
            </div>

            <div className="form-group">
                <label>Student Type</label>

                <select
                value={studentType}
                onChange={(e) =>
                    setStudentType(e.target.value)
                }
                >
                <option value="">
                    Select Student Type
                </option>

                <option value="degree">
                    Current Degree Student
                </option>

                <option value="diploma">
                    Diploma Student
                </option>

                <option value="passedout">
                    Passed Out Graduate
                </option>
                </select>
            </div>

            {studentType !== "passedout" && (
                <>
                <div className="form-group">
                    <label>Year</label>

                    <select>
                    <option>Select Year</option>
                    <option>FE</option>
                    <option>SE</option>
                    <option>TE</option>
                    <option>BE</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Department</label>

                    <select>
                    <option>Select Department</option>
                    <option>Computer Engineering</option>
                    <option>Information Technology</option>
                    <option>AI & DS</option>
                    <option>AI & ML</option>
                    <option>Electronics & Telecom</option>
                    <option>Mechanical</option>
                    <option>Civil</option>
                    <option>Electrical</option>
                    </select>
                </div>
                </>
            )}

            <button
                type="submit"
                className="update-btn"
                onClick={() => navigate("/dashboard")}
            >
                Complete Profile
            </button>

            </form>

        </div>

        </div>
    );
}

export default Profile;