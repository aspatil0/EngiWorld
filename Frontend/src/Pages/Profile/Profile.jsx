import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/EWlogo.png";

function Profile() {
  const [studentType, setStudentType] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg relative">

      {/* Logo Top Left */}
      <div className="absolute top-4 left-6 flex flex-col items-center">
        <img
          src={logo}
          alt="EngiWorld Logo"
          className="w-16 h-16 object-contain"
        />

        <h1 className="-mt-1 text-xl font-bold text-[#FF6B6B] tracking-wide">
          EngiWorld
        </h1>
      </div>

      {/* Profile Section */}
      <div className="flex justify-center items-center min-h-screen px-4 py-10">

        <div className="w-full max-w-[700px] bg-white rounded-3xl shadow-lg border border-gray-200 p-6 md:p-8">

          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            My Profile
          </h2>

          <p className="text-center text-gray-500 mb-8">
            Manage your account information
          </p>

          {/* Profile Picture */}
          <div className="flex flex-col items-center mb-6">

            <div className="w-28 h-28 rounded-full bg-[#FF6B6B] flex items-center justify-center text-5xl text-white shadow-md">
              👤
            </div>

            <button
              type="button"
              className="mt-4 px-6 py-2 bg-[#FF6B6B] text-white rounded-xl font-semibold hover:bg-[#ff5252] transition"
            >
              Upload Photo
            </button>

          </div>

          <form className="space-y-4">

            {/* Personal Information */}
            <div className="flex items-center gap-4 mb-5">
              <div className="flex-1 h-px bg-gray-300"></div>

              <h3 className="text-xl font-semibold text-[#FF6B6B]">
                Personal Information
              </h3>

              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Full Name */}
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                // className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#FF6B6B]"
                className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:border-[#FF6B6B] focus:ring-2 focus:ring-[#FF6B6B] focus:ring-opacity-30"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#FF6B6B]"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Mobile Number
              </label>

              <input
                type="tel"
                placeholder="Enter mobile number"
                className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#FF6B6B]"
              />
            </div>

            {/* Academic Information */}
            <div className="flex items-center gap-4 my-5">
              <div className="flex-1 h-px bg-gray-300"></div>

              <h3 className="text-xl font-semibold text-[#FF6B6B]">
                Academic Information
              </h3>

              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Student Type */}
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Student Type
              </label>

              <select
                value={studentType}
                onChange={(e) => setStudentType(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#FF6B6B]"
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

            {/* Year & Department */}
            {studentType !== "passedout" && (
              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block mb-2 text-gray-700 font-medium">
                    Year
                  </label>

                  <select className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#FF6B6B]">
                    <option>Select Year</option>
                    <option>FE</option>
                    <option>SE</option>
                    <option>TE</option>
                    <option>BE</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-medium">
                    Department
                  </label>

                  <select className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#FF6B6B]">
                    <option>Select Department</option>
                    <option>Computer Engineering</option>
                    <option>Information Technology</option>
                    <option>AI & DS</option>
                    <option>AI & ML</option>
                    <option>Electronics & Telecom</option>
                    <option>Mechanical Engineering</option>
                    <option>Civil Engineering</option>
                    <option>Electrical Engineering</option>
                  </select>
                </div>

              </div>
            )}

            {/* Complete Profile Button */}
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="w-full bg-[#FF6B6B] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#ff5252] transition"
            >
              Complete Profile
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Profile;
