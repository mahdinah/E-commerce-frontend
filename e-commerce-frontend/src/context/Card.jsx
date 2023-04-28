import Styles from "../context/Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Rating } from "@mui/material";
import Box from "@mui/material/Box";
function Card({ imagen }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
    <animated.div
      className={Styles.cardds}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
        <div className="rowdowns">
      <img src={imagen} alt="" className="review-pic" />
      
      <div className="review-text">
          <h2>Mirna Moris</h2>
          <Box className="ratingbox" component="fieldset" mb={3} borderColor="transparent">
            <Rating className="ratingbox" name="read-only" value={4} readOnly />
          </Box>
          <p>
            "I tried Avon about 5 years ago, and I'm so satisfied. Keep it going
            and best wishes!"
          </p>
        </div>
              <p class="updated-text">Last updated 3 days ago</p>
              </div>
      

    </animated.div>
    
  );
}

export default Card;
