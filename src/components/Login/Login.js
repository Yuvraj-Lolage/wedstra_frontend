import React, { useState } from "react";
import { Link, Route, useNavigate } from "react-router-dom";
import axiosInstance from "../../API/axiosInstance";
import { InputLabel } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import "./login.css";


const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    const loginData = {
      username,
      password
    }

    try {
      const response = await axiosInstance.post("/vendor/login", loginData);

      if (response.status === 200) {
        console.log(response.data);
        localStorage.setItem("token", response.data); // Store JWT token
        sessionStorage.setItem("message", "Login Successful!"); // Store username
        navigate("/home"); // Redirect after successful login
      }
      else {
        setError("Login failed");
      }
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      {/* <Typography variant="h2" align="center" color="primary" gutterBottom>Hello</Typography>   */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          // anchorOrigin={{vertical: top, horizontal:right }}
          autoHideDuration={3000}
          onClose={handleClose}
          severity="success"
          size="lg"
          variant="filled"
          sx={{ width: '100%' }}
          // key={top + right}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
      <div class="text-center">
        <div class="row">
          <div class="col-lg-6 left-col">
            <h1 className="form-title">Back to Business</h1>
            <h4 className="form-subtitle">Log in to track orders, update listings, and stay ahead of customer needs.</h4>
            <section class="form-container">
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleLogin}>
                <InputLabel htmlFor="outlined-required" className="label" >Username</InputLabel>
                <input type="text" className="form-control input-field" placeholder="Enter username" value={username}
                  onChange={(e) => setUsername(e.target.value)} required />
                
                <InputLabel htmlFor="outlined-required" className="label" >Password</InputLabel>
                <input type="password" className="form-control input-field" placeholder="••••••••" value={password}
                onChange={(e) => setPassword(e.target.value)} required />

                <button type="submit" className="btn login-btn w-100">Login</button>
              </form>
              <p className="forgot-password"><Link>Forgot your password?</Link></p>
              <p className="register-text">Don't have an account? <span><Link to={"/vendor-register"} >Register here.</Link></span></p>
            </section>
          </div>
          <div class="col-lg-6 right-col">
            <h1 className="title">Make a Dream Wedding.</h1>
            <h4 className="subtitle">Craft a celebration as unique as your love story. Log in to start planning every detail, from the first kiss to the last dance.</h4>
          </div>
        </div>
      </div>



      {/* <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow-lg p-4" style={{ width: "400px" }}>
          <h2 className="text-center mb-4">Login</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Username:</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
 */}



    </>
  );
};

export default LoginForm;
