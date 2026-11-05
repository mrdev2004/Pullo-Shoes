import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login1 = () => {
  // State variables
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Admin credentials
  const Admin_name = "dev";
  const Admin_pass = "dev123";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered credentials match the admin credentials
    if (name === Admin_name && password === Admin_pass) {
      toast.success("Admin login successful!");
      navigate("/admin/insert");
    } else {
      const data = { name, password };

      axios.post('http://localhost:5000/api/v1/users/login', data)
        .then(response => {
          setMessage("Login successful!");
          toast.success("Login successful!");
          setMessage(response.data.message);
          localStorage.setItem("name", response.data.message);

          setTimeout(() => {
            navigate("/");
          }, 500);
        })
        .catch(error => {
          setMessage("Login failed. Please check your credentials.");
          toast.error("Login failed. Please check your credentials.");
          console.error('There was an error logging in!', error);
        });
    }
  };

  return (
    <div style={styles.container}>
      <Toaster />
      <div style={styles.formContainer}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2 style={styles.header}>Sign In</h2>
          <div className="mb-3">
            <label htmlFor="username" className="form-label" style={styles.label}>Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              style={styles.input}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label" style={styles.label}>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              style={styles.input}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-lg" style={styles.button}>Login</button>
          <p style={styles.registerText}>
            Not registered? <Link to="/register" style={styles.registerLink}>Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

// CSS-in-JS styling
const styles = {
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f2f5", // Background color for the whole page
  },
  formContainer: {
    width: "400px",
    padding: "40px",
    backgroundColor: "#fff", // Form background color
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px", // Rounded corners for the form
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  },
  label: {
    fontSize: "14px",
    color: "#333",
    textAlign: "left",
    width: "100%",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "20px",
    fontSize: "16px",
    backgroundColor: "#f8f8f8",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745", // Green button color
    color: "#fff",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
  registerText: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#555",
  },
  registerLink: {
    color: "#007bff",
    textDecoration: "none",
  },
};

export default Login1;
