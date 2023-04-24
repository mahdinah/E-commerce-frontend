import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={"All Categories"}>
        <div className="allcat">
        <h1>All Categories</h1>
        </div>
      <div className="lol">
      
        {categories.map((c) => (
          <div className="catcard" key={c._id}>
            <div className="cardcategory">
              <Link to={`/category/${c.slug}`}>
                <button className="lolbut">{c.name}</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Categories;
