import React from "react";
import {
  LocationFooter,
  EmailFooter,
  PhoneFooter,
  TimeFooter,
  Instagram,
  TikTok,
  YouTube,
} from "../Common/Icon";
import footer_logo from "../assets/images/svg/footer_logo.svg";

function Footer() {
  return (
    <>
      <div className="footer_bg_color">
        <div className="container">
          <div className=" pt-3">
            <div className=" d-flex gap-2 flex-wrap max_w_1140 align-items-center justify-content-between pt-4 pb-sm-5 pb-3 mb-2">
              <div className=" d-flex align-items-center gap-3">
                <LocationFooter />
                <p className=" mb-0  ff-acumin-reg fw-normal text-16 lh-24  op-70 text-white">
                  Crawley Mill Industrial Estate, Witney, Oxfordshire
                </p>
              </div>
              <div className=" d-flex align-items-center gap-2">
                <EmailFooter />
                <p className=" mb-0  ff-acumin-reg fw-normal text-16 lh-24  op-70 text-white">
                  book@dryiceblastingpro.co.uk
                </p>
              </div>
              <div className=" d-flex align-items-center gap-2">
                <PhoneFooter />
                <p className=" mb-0  ff-acumin-reg fw-normal text-16 lh-24  op-70 text-white">
                  01865123456
                </p>
              </div>
              <div className=" d-flex align-items-center gap-2">
                <TimeFooter />
                <p className=" mb-0  ff-acumin-reg fw-normal text-16 lh-24  op-70 text-white">
                  Mon - Fri: 9am to 5pm
                </p>
              </div>
            </div>
          </div>
          <div className="max_w_1140">
            <div className="row">
              <div className="col-lg-4 col-12 ">
                <img
                  className=" cursor_pointer"
                  src={footer_logo}
                  alt="footer_logo"
                />
                <p className=" mb-0 mt-2 max_w_351  ff-acumin-reg fw-normal text-16  lh-25  text-white op-70">
                  IceBlastPro is Oxfordshire's Dry Ice Car Cleaning specialists.
                  Removing dirt and grime in hard to reach areas with a
                  non-abrasive Dry Ice Blasting technique that requires no
                  chemicals and leaves no mess.
                </p>
              </div>
              <div className="col-lg-3 col-6 col-sm-4 d-flex  pt-4 pt-lg-0 justify-content-lg-center">
                <div className="">
                  <h2 className=" mb-0 ff-acumin-bold fw-bold text-18 lh-27 text-white ">
                    Quick Link
                  </h2>
                  <ul className=" d-flex flex-column gap-sm-3 gap-1 ff-acumin-reg mt-sm-3 mt-2 fw-normal text-16 lh-25 ">
                    <li>
                      <a className=" text-white footer_link" href="">
                        Home
                      </a>
                    </li>
                    <li>
                      <a className=" text-white footer_link" href="">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className=" text-white footer_link" href="">
                        Services
                      </a>
                    </li>
                    <li>
                      <a className=" text-white footer_link  " href="">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className=" text-white footer_link" href="">
                        FAQ’s
                      </a>
                    </li>
                    <li>
                      <a className=" text-white footer_link" href="">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 pt-4 pt-lg-0  col-6 col-sm-4 d-flex justify-content-md-center">
                <div className="">
                  <h2 className=" mb-0 ff-acumin-bold fw-bold text-18 lh-27 text-white ">
                    Legal Information
                  </h2>
                  <ul className=" d-flex flex-column gap-sm-3 gap-2 ff-acumin-reg mt-sm-3 mt-2 fw-normal text-16 lh-25 ">
                    <li>
                      <a className=" text-white footer_link" href="">
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a className=" text-white footer_link" href="">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 pt-4 col-12 pt-lg-0 col-sm-4 d-flex justify-content-sm-end">
                <div className="">
                  <h2 className=" mb-0 ff-acumin-bold fw-bold text-18 lh-27 text-white ">
                    Follow us
                  </h2>
                  <div className=" d-flex align-items-center mt-sm-3 mt-2 gap-sm-3 gap-2">
                    <div className="icon_box_footer d-flex justify-content-center align-items-center ">
                      <a href="https://www.instagram.com/" target="_blank">
                        <Instagram />
                      </a>
                    </div>
                    <p className="  mb-0 ff-acumin-reg fw-normal text-16 lh-24 text-white  op-70">
                      Instagram
                    </p>
                  </div>
                  <div className=" d-flex align-items-center my-sm-3 my-2 gap-sm-3 gap-2">
                    <div className="icon_box_footer d-flex justify-content-center align-items-center ">
                      <a href="https://www.tiktok.com/about" target="_blank">
                        <TikTok />
                      </a>
                    </div>
                    <p className="  mb-0 ff-acumin-reg fw-normal text-16 lh-24 text-white  op-70">
                      Tiktok
                    </p>
                  </div>
                  <div className=" d-flex align-items-center gap-sm-3 gap-2">
                    <div className="icon_box_footer d-flex justify-content-center align-items-center ">
                      <a href="https://www.youtube.com/" target="blank">
                        <YouTube />
                      </a>
                    </div>
                    <p className="  mb-0 ff-acumin-reg fw-normal text-16 lh-24 text-white  op-70">
                      YouTube
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" pb-4">
          <p className=" mb-0 ff-acumin-reg fw-normal text-14  text-white op-70 text-center mt-5   lh-16">
            Copyright©{new Date().getFullYear()}(IceBlastPro) All Rights
            Reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
