import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";


const Search = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useCart();
  const [values, setValues] = useSearch();
  
  return (
    <Layout title={"Search results"}>
      <div className="avonhome-page">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="rowcolitem">
          <div className="productitem">
            {values?.results.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
               <div className="card-name-price">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-title card-price"> $ {p.price}</p>

                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <button className="btncard" onClick={() => navigate(`/product/${p.slug}`)}>More Details</button>
                  <button className="addbtncard"  onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                    >ADD TO CART</button>
                </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>

      </div>
      
    </Layout>
  );
};

export default Search;