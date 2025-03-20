import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [key, setKey] = useState(0);
  const reloadComponent = () => {
    setKey(prevKey => prevKey + 1); // Change key to force re-render
  };

  const [userRole, setUserRole] = useState(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    return storedUser?.role || "Dead"; // Set initial value
  });


  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = JSON.parse(localStorage.getItem("currentUser"));
      setUserRole(storedUser?.role || "Dead");
    };

    // Listen for localStorage updates
    window.addEventListener("storage", handleStorageChange);

    // Cleanup event listener
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
        setUserRole("Dead");
        navigate('/vendor-login');
        console.log("Logout function");
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">MyApp</Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vendor-register">Vendor Registration</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">{ userRole }</Link>
            </li>
             {/* ✅ Conditionally show Vendor Dashboard */}
             {userRole === "VENDOR" && (
              <li className="nav-item">
                <Link className="nav-link" to="/vendor-dashboard">Vendor Dashboard</Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/vendor-login">Vendor Login</Link>
            </li>
          </ul>

          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
