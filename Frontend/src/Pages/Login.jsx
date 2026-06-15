//import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../assets/EWlogo.png";

function Login() {
    const navigate = useNavigate();

    return (
        <div className="login-container">
            <div className="header">
                <h1 className="header-title">EngiWorld</h1>

                <img
                    src={logo}
                    alt="EngiWorld Logo"
                    className="logo"
                />
            </div>

       
        
            <div className="login-card">
                <h2>Welcome Back 👋</h2>
                <p>Login to continue your learning journey</p>

                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="forgot-password">
                        <Link to="/forgotpass">
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type="button"
                        className="login-btn"
                        onClick={() => navigate("/dashboard")}
                        >
                        Login
                    </button>
                </form>

                <div className="divider">
                    <span>OR</span>
                </div>

                <button className="google-btn">
                    Continue with Google
                </button>

                <p className="register-link">
                    Don't have an account?{" "}
                    <Link to="/register">Create Account</Link>
                </p>
            </div>
        </div>
    
  );
}

export default Login;