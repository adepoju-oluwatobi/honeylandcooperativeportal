import React from "react";

export const CustomPrevArrow = (props) => (
  <button
    className="carousel-custom-arrow custom-prev-arrow"
    onClick={props.onClick}
  >
    <span className="carousel-custom-arrow-icon">&lt;</span>
  </button>
);

export const CustomNextArrow = (props) => (
  <button
    className="carousel-custom-arrow custom-next-arrow"
    onClick={props.onClick}
  >
    <span className="carousel-custom-arrow-icon">&gt;</span>
  </button>
);
