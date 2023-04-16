import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";
const Login = () => {
  const [email, setEmailo] = useState("");
  const [password, setPasswordo] = useState("");
  const [auth, setAuth] = useAuth();

  const navigateo = useNavigate();
  const locationo = useLocation();

  // form function
  const handleSubmito = async (e) => {
    e.preventDefault();
    try {
      const reso = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email,
        password,
      });
      if (reso && reso.data.success) {
        toast.success(reso.data && reso.data.message);
        setAuth({
          ...auth,
          user: reso.data.user,
          token: reso.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(reso.data));
        navigateo(locationo.state || "/");
      } else {
        toast.error(reso.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
      <div className="form-container " style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmito}>
          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
            <input
              type="email"
              autoFocus
              value={email}
              onChange={(e) => setEmailo(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPasswordo(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <button
              type="button"
              className="btn forgot-btn"
              onClick={() => {
                navigateo("/forgot-password");
              }}
            >
              Forgot Password
            </button>
          </div>

          <button type="submito" className="btn btn-primary">
            LOGIN
          </button>
        </form>
      </div>
  );
};

export default Login;