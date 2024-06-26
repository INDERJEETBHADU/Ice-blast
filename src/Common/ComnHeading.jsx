import React from "react";

function ComnHeading(props) {
  return (
    <h2
      className={` ${props.color} ${props.max_w} mb-0 ff-tilt fw-bold text-48 lh-57  `}
    >
      {props.text}
    </h2>
  );
}

export default ComnHeading;
