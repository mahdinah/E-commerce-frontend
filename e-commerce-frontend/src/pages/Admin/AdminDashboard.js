import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import "../../styles/Admin-User-panel.css"
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="admin-dash">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-admin-pan">
            <div className="admin-panel">
              <h3 className="adminauthname">{auth?.user?.name}</h3>
              <h3 className="adminauthemail">{auth?.user?.email}</h3>
              <h3 className="adminauthphone">{auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;