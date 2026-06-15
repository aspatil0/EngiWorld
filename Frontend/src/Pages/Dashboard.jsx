import { useNavigate } from "react-router-dom";
import logo from "../assets/EWlogo.png";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const cards = [
    { title: "Notes", icon: "📚" },
    { title: "PYQs", icon: "📝" },
    { title: "Syllabus", icon: "📖" },
    { title: "Colleges", icon: "🎓" },
    { title: "Internships", icon: "💼" },
    { title: "Placements", icon: "🚀" },
    { title: "Profile", icon: "👤" },
    { title: "Notifications", icon: "🔔" },
  ];

  return (
    <div className="dashboard-container">

      {/* Header */}
      <div className="header">
        <h1 className="header-title">EngiWorld</h1>

        <img
          src={logo}
          alt="Logo"
          className="logo"
        />
      </div>

      {/* Welcome Section */}
      <div className="welcome-section">
        <h2>👋 Welcome to EngiWorld</h2>
        <p>
          Your Engineering Journey Starts Here
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="dashboard-grid">

        {cards.map((card, index) => (
          <div
            key={index}
            className="dashboard-card"
            onClick={() => {
              if (card.title === "Profile") {
                navigate("/profile");
              }
            }}
          >
            <span className="card-icon">
              {card.icon}
            </span>

            <h3>{card.title}</h3>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Dashboard;