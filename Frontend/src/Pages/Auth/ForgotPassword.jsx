import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/EWlogo.png";

function ForgotPassword() {
    const [otpSent, setOtpSent] = useState(false);

    return (
        <div className="min-h-screen bg-bg flex justify-center items-center pt-28 px-4">

            {/* Header */}
            <div className="fixed top-4 left-5 right-5 z-50">
                <div className="h-[75px] bg-white border border-gray-200 rounded-2xl shadow-md flex items-center justify-center relative">

                    <h1 className="text-[#FF6B6B] text-3xl font-bold">
                        EngiWorld
                    </h1>

                    <img
                        src={logo}
                        alt="EngiWorld Logo"
                        className="w-16 h-16 object-contain absolute right-6"
                    />
                </div>
            </div>

            {/* Forgot Password Card */}
            <div className="w-full max-w-md bg-white rounded-3xl shadow-lg border border-gray-200 p-10">

                <h2 className="text-3xl font-bold text-[#1F2937] text-center mb-3">
                    Forgot Password 🔐
                </h2>

                <p className="text-gray-500 text-center mb-8">
                    Enter your registered email address to receive a password reset link or OTP.
                </p>

                <form className="space-y-5">

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-[#FF6B6B]"
                        />
                    </div>

                    {/* Reset Link Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#FF6B6B] text-white py-4 rounded-xl font-semibold hover:bg-[#ff5252] transition"
                    >
                        Send Reset Link
                    </button>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-1 h-px bg-gray-300"></div>

                        <span className="px-4 text-gray-500 font-medium">
                            OR
                        </span>

                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    {/* Send OTP */}
                    <button
                        type="button"
                        onClick={() => setOtpSent(true)}
                        className="w-full bg-[#FF6B6B] text-white py-4 rounded-xl font-semibold hover:bg-[#ff5252] transition"
                    >
                        Send OTP
                    </button>

                    {/* OTP Section */}
                    {otpSent && (
                        <div className="mt-6">

                            <label className="block text-center text-gray-700 font-semibold mb-4">
                                Enter OTP
                            </label>

                            <div className="flex justify-center gap-2 mb-5">

                                {[...Array(6)].map((_, index) => (
                                    <input
                                        key={index}
                                        maxLength="1"
                                        className="w-12 h-12 border border-gray-300 rounded-xl text-center text-lg font-semibold outline-none focus:ring-2 focus:ring-[#FF6B6B]"
                                    />
                                ))}

                            </div>

                            <button
                                type="button"
                                className="w-full bg-[#FF6B6B] text-white py-4 rounded-xl font-semibold hover:bg-[#ff5252] transition"
                            >
                                Verify OTP
                            </button>

                        </div>
                    )}

                </form>

                {/* Back Link */}
                <p className="text-center mt-6">
                    <Link
                        to="/"
                        className="text-[#FF6B6B] font-semibold hover:underline"
                    >
                        ← Back to Login
                    </Link>
                </p>

            </div>

        </div>
    );
}

export default ForgotPassword;
