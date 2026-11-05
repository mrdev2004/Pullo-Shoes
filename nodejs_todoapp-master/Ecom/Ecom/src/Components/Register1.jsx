import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Register1 = () => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, password };

    axios.post('http://localhost:5000/api/v1/users/new', data)
      .then(response => {
        setMessage("Successfully registered!");

        console.log("response:", response);
        if (response.data.name === data.name) {
          toast.error("There was an error registering!");
        } else {
          toast.success("Successfully registered");
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        }
      })
      .catch(error => {
        setMessage("There was an error registering!");
        toast.error("There was an error registering!");
        console.error('There was an error registering!', error);
      });

    console.log("Data:", data);
  }

  return (
    <div style={styles.container}>
      <Toaster />
      <div style={styles.formContainer}>
        <h2 style={styles.header}>Register</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div className="form-group" style={styles.inputContainer}>
            <label htmlFor="username" style={styles.label}>Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your name"
              required
              style={styles.input}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group" style={styles.inputContainer}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
              style={styles.input}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group" style={styles.inputContainer}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
              style={styles.input}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-lg" style={styles.button}>Register</button>
          <p style={styles.registerText}>
            Already registered? <Link to="/login" style={styles.registerLink}>Login</Link>
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
  inputContainer: {
    width: "100%",
    marginBottom: "20px",
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

export default Register1;
