import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import { Link } from "react-router-dom";
import "../../styles/Admin-User-panel.css";
import authimh from "../../Images/auth.png";
import coverauth from "../../Images/coveauth.jpeg";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-flui m-3 p-3 dashboard">
        <div className="admin-dash">
          <div className="col-md-3">
            <UserMenu />
          </div>

          <div className="col-admin-pan">
            <div className="admin-panel user-panel">
              <div className="authimg">
              <img class="coverauthim" src={coverauth} alt="coverauthimage"/>
                <Link  to="/dashboard/admin/">
                
                <img class="authim" src={authimh} alt="authimage"/>
             </Link>
              </div>
              <Link  to="/dashboard/admin/">
              <div className="adminauthname">{auth?.user?.name}</div></Link>
              <div className="adminauthemail">{auth?.user?.email}</div>
              <div className="adminauthanswer">"My favorite sport is <br/>{auth?.user?.answer}" </div>
              <div className="adminauthphone">Phone : {auth?.user?.phone}</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;