import { React, useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import useCategory from "../../hooks/useCategory";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import { Link } from "react-router-dom";
import "../../styles/Admin-User-panel.css";
import authimh from "../../Images/auth.png";
import coverauth from "../../Images/coveauth.jpeg";
import CategoryForm from "../../components/Form/CategoryForm";
import toast from "react-hot-toast";
import axios from "axios";

const AdminDashboard = () => {
  const [auth, setAuth] = useAuth();
  const categories = useCategory();
  const [name, setName] = useState("");
  //handle Form
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.post("/api/v1/category/create-category", {
  //       name,
  //     });
  //     if (data?.success) {
  //       toast.success(`${name} is created`);
  //     } else {
  //       toast.error(data.message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     // toast.error("somthing went wrong in input form");
  //   }
  // };
  const [total, setTotal] = useState(0);
  const [cattotal, setcatTotal] = useState(0);


  useEffect(() => {
    getTotal();
  }, []);

  //getTOtal COunt product
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getcatTotal();
  }, []);
    //getTOtal COunt category
    const getcatTotal = async () => {
      try {
        const { data } = await axios.get("/api/v1/category/count-category");
        setcatTotal(data?.cattotal);
      } catch (error) {
        console.log(error);
      }
    };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("/api/v1/auth/profile", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  //state
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");

  //get user data
  useEffect(() => {
    const { email, name, phone, address, answer } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
    setAnswer(answer);
  }, [auth?.user]);

  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="admin-dash">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-admin-pan">
            <div className="admin-panel">
              <div className="authimg">
                <img class="coverauthim" src={coverauth} alt="coverauthimage" />
                <Link to="/dashboard/user/profile">
                  <img class="authim" src={authimh} alt="authimage" />
                </Link>
              </div>
              <Link to="/dashboard/user/profile">
                <div className="adminauthname">{auth?.user?.name}</div>
              </Link>
              <div className="adminauthemail">{auth?.user?.email}</div>
              <div className="adminauthanswer">"{auth?.user?.answer}"</div>
              <div className="adminauthphone">Phone : {auth?.user?.phone}</div>
            </div>
          </div>

          <div className="catpage">
            <h1>ALL Categories</h1>
            {/* <CategoryForm
              handleSubmit={handleSubmit}
              value={name}
              setValue={setName}
            /> */}

            {categories.map((c) => (
              <div className="catcardpage" key={c._id}>
                <div className="cardcategory">
                  <Link to={`/category/${c.slug}`}>
                    <button className="catbut">{c.name}</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="product-panel-pro">
            <div className="form-container" style={{ marginTop: "-40px" }}>
              <form className="pro-form" onSubmit={handleSubmit}>
                <h4 className="title">USER PROFILE</h4>
                <div className="mb-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Name"
                    autoFocus
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Email "
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Phone"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Address"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Answer"
                  />
                </div>

                <button type="submit" className="btn-primary-pro">
                  UPDATE
                </button>
              </form>
            </div>
          </div>
          <h1 className="header-statistic">Admin Statistics</h1>
          <div className="row1 admin-panel-statistic">
            <div className="contctcard">
              <div className="contact-info">
                <div className="contact-info-item static-pan">
                  <div className="contact-info-icon">
                    <i className="fas fa-map-marked" />
                  </div>
                  <div className="contact-info-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      class="bi bi-box2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3L2.95.4ZM7.5 1H3.75L1.5 4h6V1Zm1 0v3h6l-2.25-3H8.5ZM15 5H1v10h14V5Z" />
                    </svg>
                    <h2>Orders</h2>
                    <span>250</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contctcard">
              <div className="contact-info">
                <div className="contact-info-item static-pan">
                  <div className="contact-info-icon">
                    <i className="fas fa-map-marked" />
                  </div>
                  <div className="contact-info-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      class="bi bi-people"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                    </svg>
                    <h2>Users</h2>
                    <span>8</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contctcard">
              <div className="contact-info">
                <div className="contact-info-item static-pan">
                  <div className="contact-info-icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="contact-info-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      class="bi bi-collection"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
                    </svg>
                    <h2>Categories</h2>
                    <span>{cattotal}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contctcard">
              <div className="contact-info">
                <div className="contact-info-item static-pan">
                  <div className="contact-info-icon">
                    <i className="fas fa-clock" />
                  </div>
                  <div className="contact-info-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      class="bi bi-tags"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z" />
                      <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z" />
                    </svg>
                    <h2>Products</h2>
                    <span>{total}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
