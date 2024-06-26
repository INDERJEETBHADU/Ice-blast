import React from "react";

function CommonBtn(props) {
  return (
    <button className=" ff-acumin-bold mb-0 fw-bold text-16 lh-19 text-white cmn_btn">
      {props.text}
    </button>
  );
}

export default CommonBtn;
