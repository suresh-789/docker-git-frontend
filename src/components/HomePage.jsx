import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../services/authService";
import { FaUserCircle } from "react-icons/fa";
import "./style.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
    setDropdownOpen(false);
    navigate("/login");
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="container">
      {/* Modern Header with all navigation */}
      <header className="header modern-header">
        <div className="logo-title">
          <Link to="/home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <span className="logo">🛒</span>
            <h1 style={{ margin: 0 }}>E-Shop</h1>
          </Link>
        </div>
        <nav className="main-nav">
          <Link to="/home">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/computers">Computers</Link>
          <Link to="/mobiles">Mobiles</Link>
          <Link to="/laptops">Laptops</Link>
          <Link to="/pendrives">Pendrives</Link>
          {isAuthenticated && <Link to="/cart">Cart</Link>}
          {isAuthenticated && <Link to="/orders">Orders</Link>}
        </nav>
        <div className="header-right">
          {isAuthenticated ? (
            <div className="profile-menu">
              <FaUserCircle
                className="profile-icon"
                size={28}
                onClick={toggleDropdown}
              />
              {dropdownOpen && (
                <div className="dropdown">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login"><button>Login</button></Link>
              <Link to="/signup"><button>Sign Up</button></Link>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="main modern-main">
        <Outlet />
      </main>

      {/* Modern Footer */}
      <footer className="footer modern-footer">
        <span>© {new Date().getFullYear()} E-Shop. All rights reserved.</span>
      </footer>
    </div>
  );
};

export default HomePage;
