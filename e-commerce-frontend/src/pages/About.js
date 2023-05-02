import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import Layout from "./../components/Layout/Layout";
import aboutimg from "../Images/beatyabout.png";
import videoabout from "../Images/avon.mp4";
import client1 from "../Images/client1.jpg";
import client2 from "../Images/client2.jpg";
import client3 from "../Images/client3.jpg";
import client4 from "../Images/client4.jpg";
import client5 from "../Images/client5.jpg";
import { v4 as uuidv4 } from "uuid";
import Card from "../context/Card";
import Carousel from "../context/Carousel";
import "../styles/About.css";
import "../context/Card.module.css";

const About = () => {
  const [total, setTotal] = useState(0);
  const scrollToBottom = () => {
    window.scrollTo({
      top: 2550,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    getTotal();
  }, []);
  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };
  let cardss = [
    {
      key: uuidv4(),
      content: <Card className="imgn" imagen={client1} />,
    },
    {
      key: uuidv4(),
      content: <Card className="imgn" imagen={client2} />,
    },
    {
      key: uuidv4(),
      content: <Card className="imgn" imagen={client3} />,
    },
    {
      key: uuidv4(),
      content: <Card className="imgn" imagen={client4} />,
    },
    {
      key: uuidv4(),
      content: <Card className="imgn" imagen={client5} />,
    },
  ];

  return (
    <Layout title={"About us - Avon"}>
      <div className="about-us">
        <h1 className="allcat">About Us</h1>
        <section class="section_all bg-light" id="about">
          <div class="about-container">
            <div class="rowcent">
              <div class="right-about-nav">
                <div class="about_header_main mt-3">
                  <div class="about_icon_box"></div>
                  <h1 class="about_heading-text">
                    Beauty is a life inspiration
                  </h1>
                  <p class="text-muted">
                    Welcome to avon, where beauty meets science. We are
                    passionate about creating effective and innovative skincare
                    solutions that help you achieve your best skin yet.
                  </p>
                  <h2 class="ceo-text">Angela Cretu,CEO</h2>
                  <img
                    decoding="async"
                    class="wp-image"
                    src="https://demo.creativethemes.com/blocksy/floreo/wp-content/uploads/2022/01/signature.svg"
                    width="170"
                    height="100"
                  ></img>
                </div>
              </div>
              <div class="left-nav-img">
                <div class="img_about">
                  <img src={aboutimg} alt="" class="img-beaty" />
                </div>
              </div>
            </div>

            <div class="row1">
              <div class="contact-info-item">
                <div className="about-info-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <h2>Rating</h2>
                  <span>3,800</span>
                </div>
              </div>

              <div class="contact-info-item">
                <div className="about-info-text" onClick={scrollToBottom}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-people-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  </svg>
                  <h2>Our Happy Clients</h2>

                  <span>3,400</span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="about-info-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-tags-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z" />
                  </svg>
                  <h2>Our Products</h2>
                  <span>{total}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="videoavon">
            <video className="fullscreen" autoPlay loop muted>
              <source src={videoabout} type="video/mp4" />
            </video>
          </div>

          <div class="rowdown">
            {/* <div class="carousel-info-item carousel">
              <div className="review-pic">
                <img src={client1}></img>
              </div>
              <div className="rate">
                <input type="radio" id="star5" name="rate" value="5" />
                <label for="star5" title="text">
                  5 stars
                </label>
                <input type="radio" id="star4" name="rate" value="4"checked />
                <label for="star4" title="text">
                  4 stars
                </label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text">
                  3 stars
                </label>
                <input type="radio" id="star2" name="rate" value="2"  />
                <label for="star2" title="text">
                  2 stars
                </label>
                <input type="radio" id="star1" name="rate" value="1"  />
                <label for="star1" title="text">
                  1 star
                </label>
              </div>
              <div className="review-text">
                <h2>Mirna Moris</h2>
                <span>"I try avon for about 5 years ago,and i'm so satisfied,keep it going and best wishes"</span>
              </div>
              <p class="updated-text">Last updated 3 days ago</p>
            </div>

            <div class="carousel-info-item carousel">
              <div className="review-pic">
                <img src={client2}></img>
              </div>
              <div className="rate">
                <input type="radio" id="star5" name="rate" value="5" />
                <label for="star5" title="text">
                  5 stars
                </label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4" title="text">
                  4 stars
                </label>
                <input type="radio" id="star3" name="rate" value="3" checked/>
                <label for="star3" title="text">
                  3 stars
                </label>
                <input type="radio" id="star2" name="rate" value="2"  />
                <label for="star2" title="text">
                  2 stars
                </label>
                <input type="radio" id="star1" name="rate" value="1"  />
                <label for="star1" title="text">
                  1 star
                </label>
              </div>
              <div className="review-text">
                <h2>Rebecca Forex</h2>
                <span>“I got a pair of brows from avon store  and I’m very satisfied. They are high-quality and worth the money.”</span>
              </div>
              <p class="updated-text">Last updated 1 week ago</p>
            </div>

            <div class="carousel-info-item carousel">
              <div className="review-pic">
                <img src={client3}></img>
              </div>
              <div className="rate">
                <input type="radio" id="star5" name="rate" value="5" />
                <label for="star5" title="text">
                  5 stars
                </label>
                <input type="radio" id="star4" name="rate" value="4"checked />
                <label for="star4" title="text">
                  4 stars
                </label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text">
                  3 stars
                </label>
                <input type="radio" id="star2" name="rate" value="2"  />
                <label for="star2" title="text">
                  2 stars
                </label>
                <input type="radio" id="star1" name="rate" value="1"  />
                <label for="star1" title="text">
                  1 star
                </label>
              </div>
              <div className="review-text">
                <h2>Souher Menahi</h2>
                <span>"I recently purchased avon shampoo and I am so happy with my decision."</span>
              </div>
              <p class="updated-text">Last updated 3 mins ago</p>
            </div> */}
            <div className="carousel-info-item carousel">
              <Carousel
                cards={cardss}
                height="100%"
                width="100%"
                margin="0 auto"
                offset={200}
                showArrows={false}
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
