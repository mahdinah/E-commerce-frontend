import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="adashboard">
        <div className="row">
          <UserMenu />
          <div className="col-md-3"></div>
          <br />
          <div className="col-md-9">
            <div className="card w-75 p-3" style={{ marginLeft: "2.5rem" }}>
              <AccountCircleIcon style={{ fontSize: "5dvh" }} />
              <br />
              <br />
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.address}</h3>
            </div>
            <div>
              <NavLink to="/dashboard/user/profile">
                <button>Profile</button>
              </NavLink>
              <br />
              <br />
              <NavLink to="/dashboard/user/orders">
                <button>Orders</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};


export default Dashboard;