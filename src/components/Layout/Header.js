import * as React from "react";
import ReactModal from "react-modal";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import {useRef} from 'react';

//header all elements
const Header = () => {
  //******************************   register form  ******************************
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const navigateo = useNavigate();
  const locationo = useLocation();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorElo, setAnchorElo] = React.useState(null);
    function refreshPage() {
      window.location.reload(false);
    }
    const scrollToBottom = () => {
      window.scrollTo({
        top: 1010,
        behavior: 'smooth',
      });
    };
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const openo = Boolean(anchorElo);
    const handleClicko = (event) => {
      setAnchorElo(event.currentTarget);
    };
    const handleCloseo = () => {
      setAnchorElo(null);
    };
  
    const [isOpen, setIsOpen] = useState(false);
  
    const [auth, setAuth] = useAuth();
    const [cart] = useCart();
    const categories = useCategory();
    const handleLogout = () => {
      setAuth({
        ...auth,
        user: null,
        token: "",
      });
      localStorage.removeItem("auth");
      toast.success("Logout Successfully");
    };
      //******************************   form info done here  ******************************

 // form function login
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
      navigateo(locationo.state || "/" );
      setIsOpen(false)
    } else {
      toast.error(reso.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
};

//******************************   login  ******************************


  // form function register
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        {
          name,
          email,
          password,
          phone,
          address,
          answer,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
  
        // Automatically login the user after registration
        const reso = await axios.post("http://localhost:8080/api/v1/auth/login", {
          email,
          password,
        });
        if (reso && reso.data.success) {
          setAuth({
            ...auth,
            user: reso.data.user,
            token: reso.data.token,
          });
          localStorage.setItem("auth", JSON.stringify(reso.data));
          navigate(locationo.state || "/");
          setIsOpen(false);
        } else {
          toast.error(reso.data.message);
        }
  
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  

//******************************   register  ******************************



 

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <div className="navinfo">
            <ul className="socialicos">
            <a href="https://www.facebook.com/">
              <li> 

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </li>
              </a>
              <a href="https://www.instagram.com/">

              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </li>
              </a>
              <a href="https://www.whatsapp.com/">

              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </li>
              </a>            <a href="https://www.twitter.com/">

              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </li>
              </a>
            </ul>

            <ul className="searcho">
              <div className="searchinputo">
                <SearchInput />
              </div>
              <div className="loginlogout">
                {/* {popup ?  */}
                <ReactModal
                  className="jacs"
                  isOpen={isOpen}
                  contentLabel="Example Modal"
                  onRequestClose={() => setIsOpen(false)}
                >
                  <div className="maino">
                    <div className="mainter">
                      <input
                        className="inputos"
                        type="checkbox"
                        id="chk"
                        aria-hidden="true"
                      />
                      <div className="signupes">
                        <form onSubmit={handleSubmit}>
                        
                            <label
                              className="labelos"
                              htmlFor="chk"
                              aria-hidden="true"
                            >
                              Sign up
                            </label>
                            <input
                              className="inputos"
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              id="exampleInputEmail1"
                              placeholder="Enter Your Name"
                              required
                              autoFocus
                            />
                            <input
                              className="inputos"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              id="exampleInputEmail1"
                              placeholder="Enter Your Email "
                              required
                            />
                            <input
                              className="inputos"
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              id="exampleInputPassword1"
                              placeholder="Enter Your Password"
                              required
                            />
                            <input
                              className="inputos"
                              type="text"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              id="exampleInputEmail1"
                              placeholder="Enter Your Phone"
                              required
                            />
                            <input
                              className="inputos"
                              type="text"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              id="exampleInputEmail1"
                              placeholder="Enter Your Address"
                              required
                            />
                            <input
                              className="inputos"
                              type="text"
                              value={answer}
                              onChange={(e) => setAnswer(e.target.value)}
                              id="exampleInputEmail1"
                              placeholder="What is Your Favorite sports"
                              required
                            />
                            <button type="submit" className="signos">
                              Sign up
                            </button>
                        </form>
                      </div>
                      <div className="logines">
                        <form onSubmit={handleSubmito}>
                          <label
                            className="labelos"
                            htmlFor="chk"
                            aria-hidden="true"
                          >
                            Login
                          </label>
                          <input
                            className="inputos"
                            type="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="exampleInputEmail1"
                            placeholder="Enter Your Email "
                            required
                          />
                          <input
                            className="inputos"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="exampleInputPassword1"
                            placeholder="Enter Your Password"
                            required
                          />
                          <button
                            type="button"
                            className="signos"
                            onClick={() => {
                              navigateo("/forgot-password");
                            }}
                          >
                            Forgot Password
                          </button>
                          <button type="submit" className="signos">
                            Login
                          </button>
                        </form>
                      </div>
                      
                      <div className="logines">
                        <form onSubmit={handleSubmito}>
                          <label
                            className="labelos"
                            htmlFor="chk"
                            aria-hidden="true"
                          >
                            Forgot password
                          </label>
                          <input
                            className="inputos"
                            type="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="exampleInputEmail1"
                            placeholder="Enter Your Email "
                            required
                          />
                          <input
                            className="inputos"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="exampleInputPassword1"
                            placeholder="Enter Your Password"
                            required
                          />
                          <button
                            type="button"
                            className="signos"
                            onClick={() => {
                              navigateo("/forgot-password");
                            }}
                          >
                            Forgot Password
                          </button>
                          <button type="submit" className="signos">
                            Login
                          </button>
                        </form>
                      </div>

                    </div>
                  </div>
                </ReactModal>
                <button className="buttologin" onClick={() => setIsOpen(true)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </button>
              </div>{" "}
              <li>
                {" "}
                <NavLink to="/cart" className="nav-link">
                  <Badge
                    className="subco"
                    count={cart?.length}
                    showZero
                    offset={[10, -5]}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-bag"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </Badge>
                </NavLink>
              </li>
              <li className="accounto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
                <NavLink
                  className="nav-link dropdown-toggleo"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  style={{ border: "none" }}
                >
                  Account
                </NavLink>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
                <li className="nav-item dropdown">
                  <div className="dropdowno">
                    <Button
                      id="basic-button"
                      aria-controls={openo ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={openo ? "true" : undefined}
                      onClick={handleClicko}
                    ></Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={openo}
                      onClose={handleCloseo}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                      className="menu-center"
                    >
                      <MenuItem className="dropdownacc">
                        <div className="dropdownacc">
                          <ul className="dropdown-menu">
                            <li>
                              <NavLink
                                to={`/dashboard/${
                                  auth?.user?.role === 1 ? "admin" : "user"
                                }`}
                                className="dropdown-item"
                              >
                                {auth?.user?.name}
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                onClick={handleLogout}
                                to="/"
                                className="dropdown-item"
                              >
                                Logout
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </MenuItem>
                    </Menu>
                  </div>
                </li>
              </li>
            </ul>
          </div>

          <div className="caroselnav">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <Link className="navbar-brand"  to="/" >
                <div class="logo-holder logo-6">
                  <a href="/" >
                    <h3>
                      A<span>Von</span>
                    </h3>
                  </a>
                </div>{" "}
              </Link>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link ">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/" className="nav-link ">
                    NEW{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/category/perfume" className="nav-link " onClick={scrollToBottom}>
                    Perfume
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/category/oily-skin" className="nav-link " onClick={scrollToBottom}>
                    Skincare
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/category/maskaras" className="nav-link " onClick={scrollToBottom}>
                    Maskara
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/category/shampoos" className="nav-link" onClick={scrollToBottom}>
                    shampoos{" "}
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <div className="dropdown">
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        class="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem>
                        <li>
                          <Link className="dropdown-item" to={"/categories"} onClick={scrollToBottom} >
                            All Categories
                          </Link>
                        </li>
                      </MenuItem>

                      <MenuItem
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "start",
                        }}
                      >
                        {categories?.map((c) => (
                          <li key={c._id}>
                            <Link
                                                       

                              className="dropdown-item"
                              to={`/category/${c.slug}`}
                              style={{ display: "block", padding: "5px" }}
                            >
                              {c.name}
                            </Link>
                          </li>
                        ))}
                      </MenuItem>
                    </Menu>
                  </div>
                </li>

                {!auth?.user ? <></> : <></>}
              </ul>
            </div>
          </div>
        </div>
        <div className="Collection">
          New Collection
          <h1>
            the secret of your
            <br /> <span>beauty</span>
            <br /> is your skin
          </h1>
          <button className="explore" onClick={scrollToBottom}>Explore More</button>
        </div>
      </nav>
    </>
  );
};

export default Header;
