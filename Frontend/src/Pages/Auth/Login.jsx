import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/EWlogo.png";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center pt-28 px-4">

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

      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg border border-gray-200 p-10">

        <h2 className="text-3xl font-bold text-[#1F2937] text-center">
          Welcome Back 👋
        </h2>

        <p className="text-gray-500 text-center mt-2 mb-8">
          Login to continue your learning journey
        </p>

        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-[#FF6B6B]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-[#FF6B6B]"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-[#FF6B6B] font-medium hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="button"
            onClick={() => navigate("/select-year")}
            className="w-full bg-[#FF6B6B] text-white py-4 rounded-xl font-semibold hover:bg-[#ff5252] transition"
          >
            Login
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>

          <span className="px-4 text-gray-500">
            OR
          </span>

          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google Button */}
        <button className="w-full border border-gray-300 py-4 rounded-xl font-medium hover:bg-gray-50 transition">
          Continue with Google
        </button>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[#FF6B6B] font-semibold hover:underline"
          >
            Create Account
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;