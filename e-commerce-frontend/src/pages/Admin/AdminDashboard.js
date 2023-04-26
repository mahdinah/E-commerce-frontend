import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="adashboard">
        <div className="row">
          <AdminMenu />
          <div className="col-md-3"></div>
          <br />
          <div className="col-md-9">
            <div className="card w-75 p-3" style={{ marginLeft: "2.5rem" }}>
              <AccountCircleIcon style={{ fontSize: "5dvh" }} />
              <br />
              <br />
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.phone}</h3>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <NavLink
                to="/dashboard/admin/create-category"
              >
                <button className="adminbtn">Create Category</button>
              </NavLink>
              <NavLink
                to="/dashboard/admin/create-product"
              >
                <button>Create Product</button>
              </NavLink>
              <NavLink
                to="/dashboard/admin/products"
              >
                <button>Products</button>
              </NavLink>
              <NavLink
                to="/dashboard/admin/orders"
              >
                <button>Orders</button>
              </NavLink>
              {/* <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
