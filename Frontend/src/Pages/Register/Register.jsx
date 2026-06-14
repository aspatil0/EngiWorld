import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/EWlogo.png";
import "./Register.css";

function Register() {
  const [status, setStatus] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  return (
    <div className="register-container">

      {/* Header */}
      <div className="header">
        <h1 className="header-title">EngiWorld</h1>

        <img
          src={logo}
          alt="EngiWorld Logo"
          className="logo"
        />
      </div>

      {/* Register Card */}
      <div className="register-card">

        <h2>Create Account 🚀</h2>
        <p>Join EngiWorld and start your engineering journey</p>

        <form>

          {/* Full Name */}
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

            {/* Send OTP Button */}
          {!otpSent && (
            <button
              type="button"
              className="otp-btn"
              onClick={() => setOtpSent(true)}
            >
              Send OTP
            </button>
          )}

          {/* OTP Input */}
          {otpSent && !otpVerified && (
            <>
              <div className="form-group">
                <label>Enter OTP</label>
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                />
              </div>

              <button
                type="button"
                className="verify-btn"
                onClick={() => setOtpVerified(true)}
              >
                Verify OTP
              </button>
            </>
          )}

          {/* Success Message */}
          {otpVerified && (
            <p className="success-msg">
              ✓ OTP Verified Successfully
            </p>
          )}

          {/* Mobile */}
          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
            />
          </div>


          {/* Current Status */}
          {/* <div className="form-group">
            <label>Current Status</label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Select Status</option>
              <option value="degree">
                Current Degree
              </option>
              <option value="passedout">
                12th Passed Out
              </option>
            </select>
          </div> */}

          {/* Department */}
          {/* {status === "degree" && (
            <div className="form-group">
              <label>Department</label>

              <select>
                <option>Select Department</option>
                <option>Computer Engineering</option>
                <option>Information Technology</option>
                <option>AI & DS</option>
                <option>AI & ML</option>
                <option>
                  Electronics & Telecommunication
                </option>
                <option>Mechanical Engineering</option>
                <option>Civil Engineering</option>
                <option>Electrical Engineering</option>
              </select>
            </div>
          )} */}

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create password"
            />
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="register-btn"
          >
            Create Account
          </button>

        </form>

        <p className="login-link">
          Already have an account?{" "}
          <Link to="/">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;