import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { pink } from "@mui/material/colors";

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={"All Categories"}>
      <div className="lol">
        <div
          className="rowkk"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {categories.map((c) => (
            <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <div className="card">
                <Link
                  to={`/category/${c.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                  className="lolbut"
                    variant="contained"
                    style={{
                      fontWeight: "bold",
                        fontFamily: 'fantasy',
                        fontSize: '2.5rem',

                      cursor: "pointer",
                      backgroundColor: "#A464F4",
                      marginTop: "11rem",
                      marginLeft: "2rem",
                      padding: "2.8rem 7rem",
                      color: "black",
                    }}
                  >
                    {c.name}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
