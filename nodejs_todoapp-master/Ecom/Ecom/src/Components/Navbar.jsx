import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GrCart } from "react-icons/gr";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const name = localStorage.getItem("name");

  const handleLogout = () => {
    localStorage.removeItem("name"); // Remove the user's name from localStorage
    navigate("/login");
  };

  const navLinkStyle = (path) => ({
    boxShadow: location.pathname === path ? "0 4px 0px #333" : "none", // Underline active link
    color: location.pathname === path ? "#000" : "#555", // Active link color
    padding: "10px 15px",
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 0.3s ease",
  });

  const navLinkHoverStyle = {
    color: "#000", // Darker on hover
  };

  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "20px",
    fontSize: "14px",
    marginLeft: "10px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const loginButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#28a745",
    color: "#fff",
  };

  const registerButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#dc3545",
    color: "#fff",
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "darksalmon", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ fontSize: "35px", fontWeight: "bold", color: "black"}}>Pullo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={navLinkStyle("/")}
                  onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color}
                  onMouseLeave={(e) => e.target.style.color = location.pathname === "/" ? "#000" : "#555"}
                  onClick={() => navigate("/")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={navLinkStyle("/shop")}
                  onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color}
                  onMouseLeave={(e) => e.target.style.color = location.pathname === "/shop" ? "#000" : "#555"}
                  onClick={() => navigate("/shop")}
                >
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={navLinkStyle("/about")}
                  onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color}
                  onMouseLeave={(e) => e.target.style.color = location.pathname === "/about" ? "#000" : "#555"}
                  onClick={() => navigate("/about")}
                >
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={navLinkStyle("/contact")}
                  onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color}
                  onMouseLeave={(e) => e.target.style.color = location.pathname === "/contact" ? "#000" : "#555"}
                  onClick={() => navigate("/contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
            <p style={{ fontSize: "30px", cursor: "pointer", margin: "0 20px" }} onClick={() => navigate("/cart")}><GrCart /></p>
            {name ? (
              <>
                <button
                  className='btn'
                  style={{ ...buttonStyle, backgroundColor: "#ff5722", color: "#fff" }}
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <button
                  className='btn'
                  style={loginButtonStyle}
                  onClick={() => navigate("/login")}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#218838"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "#28a745"}
                >
                  Login
                </button>
                <button
                  className='btn'
                  style={registerButtonStyle}
                  onClick={() => navigate("/register")}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#c82333"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "#dc3545"}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
