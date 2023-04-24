import React from "react";
import Layout from "./../components/Layout/Layout";
import about from "../Images/6.jpg";
import "../styles/About.css";
import "../styles/Card.css";
// import Card from "../components/Card";
import {
  ServiceCardOne as CardOne,
  ServiceCardTwo as CardTwo,
  ServiceCardThree as CardThree,
} from "../components/Card";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div>
        <h1 className="h11">About Us</h1>
        <div className="row contactus containerr">
          <div className="col-md-6 imagee">
            <img src={about} alt="contactus" style={{ width: "100%" }} />
          </div>
          <div className="col-md-4 textt">
            <p className="text-justify mt-2">
              Welcome to Avon, where beauty is more than skin deep. For over 135
              years, we have been committed to empowering women and helping them
              feel confident and beautiful. Our story began in 1886 when our
              founder David H. McConnell discovered that women were more
              interested in the free samples of perfume he offered than the
              books he was selling. He saw an opportunity to create a company
              that would allow women to earn money by selling high-quality
              beauty products to other women, and Avon was born. Since then, we
              have grown into a global company with a mission to celebrate
              women's beauty and make a positive impact in their lives. Our
              products range from skincare and makeup to fragrance and fashion,
              and we are constantly innovating and improving our formulations to
              meet the evolving needs of our customers. At Avon, we believe that
              beauty should be inclusive, empowering, and sustainable. We are
              proud to support causes that matter to women, such as breast
              cancer awareness and domestic violence prevention. We also
              understand the importance of ethical practices and are committed
              to using only cruelty-free and eco-friendly ingredients and
              packaging. We are more than just a beauty company. We are a
              community of millions of representatives and customers who share a
              common goal: to make a difference in the world by uplifting and
              inspiring others. Thank you for choosing Avon as your go-to source
              for beauty and skincare products. We hope our products help you
              feel confident and beautiful every day.
            </p>
          </div>
        </div>

        <div className="frame">
          <iframe
            src="https://youtu.be/-G_K9bOdIbM"
            width={1000}
            height={500}
          ></iframe>
        </div>

        <div className="cardss">
          <h2>About our services</h2>
          <div className="row cardss">
            <div className="col-md-4">
              <CardOne />
              <div className="col-md-4">
                <CardTwo />
              </div>
              <div className="col-md-4">
                <CardThree />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;