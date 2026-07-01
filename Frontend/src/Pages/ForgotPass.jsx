import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/EWlogo.png";
import "./ForgotPass.css";

function ForgotPass() {

    const [otpSent, setOtpSent] = useState(false);

    return (
        <div className="forgot-container">

            {/* Header */}
            <div className="header">
                <h1 className="header-title">EngiWorld</h1>

                <img
                    src={logo}
                    alt="EngiWorld Logo"
                    className="logo"
                />
            </div>

            {/* Forgot Password Card */}
            <div className="forgot-card">

                <h2>Forgot Password 🔐</h2>

                <p>
                Enter your registered email address to
                receive a password reset link or OTP.
                </p>

                <form>

                    <div className="form-group">
                        <label>Email Address</label>

                        <input
                        type="email"
                        placeholder="Enter your email"
                        />
                    </div>

                    <button
                        type="submit"
                        className="reset-btn"
                    >
                        Send Reset Link
                    </button>

                    <div className="divider">
                        <span>OR</span>
                    </div>

                    <button
                        type="button"
                        className="reset-btn"
                        onClick={() => setOtpSent(true)}
                        >
                        Send OTP
                    </button>

                    {otpSent && (
                        <div className="otp-section">

                            <label>Enter OTP</label>

                            <div className="otp-boxes">
                                <input maxLength="1" />
                                <input maxLength="1" />
                                <input maxLength="1" />
                                <input maxLength="1" />
                                <input maxLength="1" />
                                <input maxLength="1" />
                            </div>

                            <button
                            type="button"
                            className="verify-btn"
                            >
                            Verify OTP
                            </button>

                        </div>
                    )}

                </form>

                <p className="back-link">
                <Link to="/">
                    ← Back to Login
                </Link>
                </p>

            </div>

        </div>
    );
}

export default ForgotPass;