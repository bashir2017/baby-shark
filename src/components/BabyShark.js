import React from "react";
// import { Animated } from "react-animated-css";

import image from "../images/babyshark.png";
import image2 from "../images/grandma_shark.png";
import image3 from "../images/grandpa_shark.png";
import image4 from "../images/papa_shark.png";
import image5 from "../images/shocked_shark.png";

function BabyShark() {
  return (
    <div>
      <img src={image2} />
      <img src={image} />
      <img src={image3} />
      <img src={image4} />
      <img src={image5} />
    </div>
  );
}

export default BabyShark;
