import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
import "../styles/Homepage.css";
import { Select } from "antd";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { Option } = Select;

  const [selectedCategories, setSelectedCategories] = useState([]);



  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (id) {
      if (value) {
        all.push(id);
      } else {
        all = all.filter((c) => c !== id);
      }
    }
    setChecked(all);
  };
  function handleCategoryChange(value) {
    setSelectedCategories(value);
    // call your filter function with the selected categories
    handleFilter(true, value);
    }
  useEffect(() => {
    if (!checked.length || !radio.length || selectedCategories.length) {
      getAllProducts();
    }
  }, [checked.length, radio.length, selectedCategories.length]);

  useEffect(() => {
    if (checked.length || radio.length || selectedCategories.length) {
      filterProduct();
    } else {
      getAllProducts();
    }
  }, [checked, radio, selectedCategories]);
  

  // get filtered product by category
  const filterByCategory = (product) => {
    if (selectedCategories.length === 0) {
      return true;
    }
    return selectedCategories.includes(product.category._id);
  };

  // filter products based on category and price
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products.filter(filterByCategory));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"Avon"}>
      <div className="avonhome-page">
        <div className="pricecatfilter">
          <h4 className="text-center">Filter By Category</h4>
          <div className="catfilter">
            <Select
              className="multiple"
              mode="multiple"
              placeholder="Please select categories"
              value={selectedCategories}
              onChange={handleCategoryChange}
            >
              {categories?.map((c) => (
                <Option key={c._id} value={c._id}>
                  {c.name}
                </Option>
              ))}
            </Select>

          </div>


          {/* price filter */}
          <h4 className="text-center mt-4">Filter By Price</h4>
          <div className="prfil">
          <div className="pricefilter">
            <Radio.Group className="radiogrp" onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div className="radiobtn" key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          </div>
          <div className="resetfilter">
            <button
              className="btndanger"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>

        <div className="productitem">
          <div className="rowcolitem">
            {products?.map((p) => (
              <div className="card m-2" key={p._id}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className="card-title card-price">
                      {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </h5>
                  </div>
                  <p className="card-text">{p.description.substring(0, 60)}</p>
                  <div className="card-name-price">
                    <button
                      className="btncard"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      MORE DETAILS
                    </button>
                    <button
                      className="addbtncard"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="loadmorediv">
          {products && products.length < total && (
            <button
              className="loadmore"
              onClick={(e) => {
                e.preventDefault();
                setPage(page + 1);
              }}
            >
              {loading ? "Loading ..." : <> All Products</>}
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;