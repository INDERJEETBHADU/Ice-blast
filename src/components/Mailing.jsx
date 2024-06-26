import React, { useState } from "react";
import CommonBtn from "../Common/CommonBtn";
import email_img from "../assets/images/svg/email_img.svg";

function Mailing() {
  const [none, setNone] = useState(false);
  function handleBlock() {
    setNone(!none);
  }
  return (
    <>
      <div className="">
        <div className="container pt-sm-5 mt-sm-4">
          <div className=" d-flex justify-content-center">
            <div className="mailing_box position-relative">
              <h2 className=" mb-0  ff-tilt fw-bold text-48  lh-57 text-center text-white">
                Join Our Mailing List
              </h2>
              <p className=" mb-0 ff-acumin-reg fw-normal text-16 lh-24 text-center text-white op-90 mt-2">
                Get news, videos and deals straight to your inbox.
              </p>
              <div className=" email_add_box mt-4 d-flex align-items-center flex-wrap  justify-content-between">
                <form>
                  <input
                    className=" input_box_email ff-acumin-reg fw-normal text-16 lh-22 color-darkblue  op-90"
                    type="text"
                    placeholder="Enter your email address "
                  />
                </form>
                <CommonBtn text="Subscribe" />
              </div>
              <div className=" d-flex align-items-center gap-2 pt-3 mt-1 justify-content-center">
                <div
                  onClick={handleBlock}
                  className="check_box_manual  d-flex  justify-content-center align-items-center"
                >
                  <svg
                    className={`${none ? "opacity-0" : "opacity-100"}`}
                    width="13"
                    height="10"
                    viewBox="0 0 13 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.97338 9.9999C5.93708 9.9999 5.90118 9.99279 5.86792 9.97902C5.83467 9.96526 5.80478 9.94513 5.78014 9.91991L0.569916 4.58825C0.535183 4.55271 0.512157 4.50836 0.503657 4.46062C0.495157 4.41289 0.50155 4.36385 0.522055 4.3195C0.54256 4.27515 0.576287 4.23742 0.619108 4.21093C0.661929 4.18443 0.711986 4.17032 0.763154 4.17032H3.27107C3.30873 4.17032 3.34594 4.17797 3.38021 4.19273C3.41447 4.2075 3.44499 4.22905 3.4697 4.25593L5.21098 6.15104C5.39917 5.7705 5.76346 5.13687 6.40273 4.36477C7.34779 3.22333 9.10565 1.54463 12.1131 0.0292142C12.1713 -6.93469e-05 12.2389 -0.0076696 12.3027 0.00791431C12.3664 0.0234982 12.4217 0.0611335 12.4576 0.113388C12.4934 0.165643 12.5073 0.22872 12.4964 0.290162C12.4855 0.351605 12.4506 0.406947 12.3987 0.445261C12.3872 0.45375 11.2276 1.31761 9.89307 2.89992C8.66485 4.35603 7.03216 6.737 6.22875 9.8108C6.21464 9.8648 6.18182 9.91278 6.13552 9.94707C6.08922 9.98136 6.03211 10 5.9733 10L5.97338 9.9999Z"
                      fill="#FA6A00"
                    />
                  </svg>
                </div>
                <p className=" mb-0 ff-acumin-reg fw-normal text-14 lh-14 text-white">
                  I consent to receive emails & confirm I have read the{" "}
                  <span className="  ff-acumin-bold">privacy policy.</span>
                </p>
              </div>
              <div className=" position-absolute d-none d-md-block email_pos">
                <img src={email_img} alt="email_img" />
              </div>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13892.809971523224!2d75.46942804999999!3d29.481289750000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1718080481989!5m2!1sen!2sin"
          max-width="1440"
          width="100%"
          height="456"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Mailing;
