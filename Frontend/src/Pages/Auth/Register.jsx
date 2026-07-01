import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/EWlogo.png";

function Register() {
  const navigate = useNavigate();

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] relative">

      {/* Logo Top Right
      <div className="absolute top-6 right-8 flex flex-col items-center">
        <img
          src={logo}
          alt="EngiWorld Logo"
          className="w-20 h-20 object-contain"
        />

        <h1 className="mt-1 text-2xl font-bold text-[#FF6B6B] tracking-wide">
          EngiWorld
        </h1>
      </div> */}

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

      {/* Form Section */}
      <div className="flex justify-center items-center min-h-screen px-4 py-10">

        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-lg border border-gray-200 p-8 md:p-10">

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Create Account 🚀
          </h2>

          <p className="text-center text-gray-500 mb-10">
            Join EngiWorld and start your engineering journey
          </p>

          <form className="space-y-10">

            {/* Personal Details */}
            <div>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-gray-300"></div>

                <h3 className="text-xl font-semibold text-[#FF6B6B]">
                  Personal Details
                </h3>

                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block mb-2 text-gray-700 font-medium">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#FF6B6B]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-medium">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#FF6B6B]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-medium">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#FF6B6B]"
                  />
                </div>

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

              </div>
            </div>

            {/* Account Security */}
            <div>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-gray-300"></div>

                <h3 className="text-xl font-semibold text-[#FF6B6B]">
                  Account Security
                </h3>

                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              <div className="max-w-md mx-auto">

                <button
                  type="button"
                  onClick={() => setOtpSent(true)}
                  className="w-full bg-[#FF6B6B] text-white py-4 rounded-xl font-semibold hover:bg-[#ff5252] transition"
                >
                  {otpSent ? "OTP Sent ✓" : "Send OTP"}
                </button>

                {otpSent && (
                  <div className="mt-6">

                    <label className="block text-center text-gray-700 font-medium mb-4">
                      Enter OTP
                    </label>

                    <div className="flex justify-center gap-2 mb-5">

                      {[...Array(6)].map((_, index) => (
                        <input
                          key={index}
                          maxLength={1}
                          className="w-12 h-12 border border-gray-300 rounded-xl text-center text-lg font-semibold outline-none focus:ring-2 focus:ring-[#FF6B6B]"
                        />
                      ))}

                    </div>

                    {!otpVerified && (
                      <button
                        type="button"
                        onClick={() => setOtpVerified(true)}
                        className="w-full bg-[#FF6B6B] text-white py-3 rounded-xl font-semibold hover:bg-[#ff5252] transition"
                      >
                        Verify OTP
                      </button>
                    )}

                    {otpVerified && (
                      <div className="bg-green-50 border border-green-300 text-green-700 rounded-xl p-3 text-center mt-4">
                        ✓ OTP Verified Successfully
                      </div>
                    )}

                  </div>
                )}

              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">

                <div>
                  <label className="block mb-2 text-gray-700 font-medium">
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="Create Password"
                    className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#FF6B6B]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-medium">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#FF6B6B]"
                  />
                </div>

              </div>

            </div>

            {/* Create Account */}
            <div className="flex justify-center">

              <button
                type="button"
                onClick={() => navigate("/")}
                className="px-16 py-4 bg-[#FF6B6B] text-white font-semibold rounded-xl hover:bg-[#ff5252] transition"
              >
                Create Account
              </button>

            </div>

          </form>

          <p className="text-center mt-8 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/"
              className="text-[#FF6B6B] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;