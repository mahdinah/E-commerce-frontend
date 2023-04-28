import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../styles/CartStyles.css";

const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price * quantity;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };
  //subtotal
  const subtotalprice=()=>{

try {
      let subtotal=0;
      cart?.map((p) => {
        
        subtotal=p.price * quantity;
      });
      return subtotal.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        
      });
    } catch (error) {
      console.log(error);
    }
  };
  //detele item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
      toast.success("Item removed successfully");
    } catch (error) {
      console.log(error);
    }
  };
  //quantity inc-dec
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Layout>
      <div className=" cartoo">
        <div className="row-cart">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">
              {!auth?.user
                ? "Hello Guest"
                : `Hello  ${auth?.token && auth?.user?.name}`}
              <p className="text-center">
                {cart?.length
                  ? `You Have ${cart.length} items in your cart ${
                      auth?.token ? "" : "please login to checkout !"
                    }`
                  : " Your Cart Is Empty"}
              </p>
            </h1>
          </div>
        </div>
        <div className="container-cart-check">
        <div className="up-cart-info">
				<th class="product-name" >Product</th>
				<th class="product-quantity">Quantity</th>
				<th class="product-subtotal">Subtotal</th>
			</div>
          <div className="row-check">
      
            <div className="cart-remv-checkot">
              {cart?.map((p) => (
                <div className="pro-cart" key={p._id}>
                  <div className="img-cart">
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="cart-image"
                      alt={p.name}
                      width="100%"
                      height={"130px"}
                    />
                  </div>
                  <div className="price-cart">
                    <p className="p-title" onClick={() => navigate(`/product/${p.slug}`)}>{p.name}</p>
                    <p>{p.description.substring(0, 30)}</p>
                    <p>Price : {p.price} $</p>
                
                  </div>
                  <div className="quantity-buttons">
                      <button className="mines" onClick={decreaseQuantity}>-</button>
                      <span>{quantity}</span>
                      <button className="mines" onClick={increaseQuantity}>+</button>
                    </div>
                    
                  <div className="cart-remove-btn">
                  <div className="subtotal" key={p._id}>
                      <span>{subtotalprice()}</span>
                    </div>
                    <svg
                      onClick={() => removeCartItem(p._id)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="16"
                      fill="currentColor"
                      class="bi bi-archive-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <div className="checkout-py-tot">
              <h2>Cart Totals</h2>
              <hr />
              <div className="totalprice"><h4 className="totalprice">Total : </h4><h4 className="totalprice">{totalPrice()} </h4></div>
              {auth?.user?.address ? (
                <>
                  <div className="mb-3">
                    <h4>Current Address</h4>
                    <h5>{auth?.user?.address}</h5>
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Update Address
                    </button>
                  </div>
                </>
              ) : (
                <div className="mb-3">
                  {auth?.token ? (
                    <button
                      className="btncards"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Update Address
                    </button>
                  ) : (
                    <button
                      className="btncards"
                      onClick={() =>
                        navigate("/login", {
                          state: "/cart",
                        })
                      }
                    >
                      Plase Login to checkout
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
