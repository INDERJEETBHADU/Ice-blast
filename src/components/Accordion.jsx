import React from "react";
import { Minus, Plus } from "../Common/Icon";
const Accordion = ({ title, content, isOpen, toggleAccordion }) => {
  return (
    <div>
      <div className="accordion_small_box  br_14  mb-4 ">
        <div
          className=" d-lg-flex    justify-content-between align-items-start"
          onClick={toggleAccordion}
        >
          <div className=" d-flex justify-content-between">
            <p className="  mb-0 ff-acumin-bold fw-bold text-28 lh-39  color-darkblue">
              {title}
            </p>
            <div className=" d-lg-none sign_height_accordion">
              {isOpen ? <Minus /> : <Plus />}
            </div>
          </div>
          {isOpen && (
            <div className=" mb-0  ff-acumin-reg fw-normal text-16 lh-25 color-darkblue op-70 max_w_551 ">
              {content}
            </div>
          )}

          <div className=" sign_height_accordion d-none d-lg-block">
            {isOpen ? <Minus /> : <Plus />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
