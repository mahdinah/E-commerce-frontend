import React from "react";
import Layout from "./../components/Layout/Layout";
import bestprod from "../Images/13.jpg";
import bestprod1 from "../Images/14.jpg";
import bestprod2 from "../Images/15.jpg";


import "../styles/Aboutus.css";
import ReactPlayer from "react-player";

const About = () => {

  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="About-us">
        <div className="bestproduct">
          <div className="textios">
            <h1>
              "Adding Vibrance, Obtaining Nourishment: AVON's Beauty Essentials"
            </h1>
            <br />
            <h3>
              Pioneering in listening to women’s needs and speaking out for
              them. Standing for what matters to them. Supporting their
              endeavours. We’re a company that connects people through beauty,
              sharing passion, innovation and expertise - affordably. We use the
              power of beauty to transform women’s lives for the better.
            </h3>
          </div>
        <div>
      </div>
      </div>

      </div>

      <div>
        <div>
          <ReactPlayer
            className="reactplay"
            url="https://www.youtube.com/watch?v=YhlJLxTObmo"
            // playing
          />
        </div>
        </div>
    </Layout>
  );
};

export default About;
