import React from "react";
import behnid_top from "../assets/images/webp/behind_scene_top_layer.webp";
import ComnHeading from "../Common/ComnHeading";
import behind_img_niddle_scene from "../assets/images/webp/behind_scene_middle_large_img.webp";
import CommonBtn from "../Common/CommonBtn";
import play_btn from "../assets/images/svg/play_btn.svg";
import behnid_bottom from "../assets/images/webp/bottom-layer_behind_scene.webp";

function BehindScene() {
  return (
    <>
      <div className=" bg_img_behnid_scene mt_neg_2">
        <div className="">
          <img className=" w-100" src={behnid_top} alt="behnid_top" />
        </div>
        <div className="container">
          <div className="  text-center d-flex justify-content-center mt-4 pt-2">
            <ComnHeading
              max_w="max_w_498"
              color="text-white"
              text="Behind the Scenes
              Dry Ice Blasting a Car"
            />
          </div>
          <div className=" pt-2 mt-1">
            <p className="  mx-auto ff-acumin-reg fw-normal text-16 lh-24 text-center text-white max_w_592">
              From the initial setup to the final sweep, discover how we elevate
              car cleaning to an art form, delivering immaculate results every
              time.
            </p>
          </div>
          <div className=" d-flex justify-content-center mt-5 ">
            <div className="  position-relative">
              <img
                className=" w-100 br_24 behind_scene_middle_img"
                src={behind_img_niddle_scene}
                alt="behind_img_niddle_scene"
              />
              <div className="play_box_icon d-flex align-items-center justify-content-center play_btn_behind_pos   cursor_pointer position-absolute">
                <img src={play_btn} alt="play_btn" />
              </div>
            </div>
          </div>
          <div className=" pt-3">
            <p className=" mb-0 ff-acumin-bold text-16 lh-24 text-white text-center mt-4 ">
              Discover a cleaner, fresher, and more beautiful car, inside and
              out, with our advanced dry ice blasting services.
            </p>
          </div>
          <div className=" d-flex justify-content-center mb-4 pb-2 mt-4 pt-1">
            <CommonBtn text="Get Instant Quote" />
          </div>
        </div>
        <div className="">
          <img className=" w-100" src={behnid_bottom} alt="behnid_top" />
        </div>
      </div>
    </>
  );
}

export default BehindScene;
