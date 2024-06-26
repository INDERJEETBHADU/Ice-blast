import React from "react";
import ComnHeading from "../Common/ComnHeading";
import effective from "../assets/images/svg/effective.svg";
import Nonabrasive from "../assets/images/svg/Nonabrasive.svg";
import Residue from "../assets/images/svg/Noresidue.svg";
import Safe from "../assets/images/svg/safe.svg";
import car_wash from "../assets/images/webp/choose_car_wash.png";

function Choose() {
  return (
    <>
      <div className=" ">
        <div className="container">
          <div className=" text-center  pt-4">
            <ComnHeading
              text="Why Choose Dry Ice Blasting for Your Car?"
              color="color-darkblue"
            />
          </div>
          <div className="row pt-5  pb_47">
            <div className="col-lg-6 col-12 justify-content-lg-center d-flex align-items-center">
              <div className="">
                <div className=" d-flex align-items-center gap_12">
                  <img src={effective} alt="effective" />
                  <div className="">
                    <h5 className=" mb-0 ff-acumin-bold fw-bold text-16 lh-24 color-darkblue">
                      Effective Cleaning
                    </h5>
                    <p className=" ff-acumin-reg mb-0 mt-sm-1 fw-normal text-16 lh-24 color-darkblue op-70 max_w_effective">
                      The sublimation process effectively removes dirt, oil, and
                      grime, even in hard-to-reach areas.
                    </p>
                  </div>
                </div>
                <div className=" d-flex align-items-center gap_12 mt-4 pt-sm-1">
                  <img src={Nonabrasive} alt="Nonabrasive" />
                  <div className="">
                    <h5 className=" mb-0 ff-acumin-bold fw-bold text-16 lh-24 color-darkblue">
                      Non-Abrasive
                    </h5>
                    <p className=" ff-acumin-reg mb-0 mt-sm-1 fw-normal text-16 lh-24 color-darkblue op-70 max_w_effective">
                      Unlike sandblasting or chemical cleaning, dry ice blasting
                      won’t damage your car’s components or paint.
                    </p>
                  </div>
                </div>
                <div className=" d-flex align-items-center gap_12 mt-4 pt-sm-1">
                  <img src={Residue} alt="Residue" />
                  <div className="">
                    <h5 className=" mb-0 ff-acumin-bold fw-bold text-16 lh-24 color-darkblue">
                      Non-Abrasive
                    </h5>
                    <p className=" ff-acumin-reg mb-0 mt-sm-1 fw-normal text-16 lh-24 color-darkblue op-70 max_w_effective">
                      Since dry ice sublimates, there’s no residual waste to
                      clean up, making it an environmentally friendly option..
                    </p>
                  </div>
                </div>
                <div className=" d-flex align-items-center gap_12 mt-4 pt-sm-1">
                  <img src={Safe} alt="Residue" />
                  <div className="">
                    <h5 className=" mb-0 ff-acumin-bold fw-bold text-16 lh-24 color-darkblue">
                      Safe for Various Materials
                    </h5>
                    <p className=" ff-acumin-reg mb-0 mt-sm-1 fw-normal text-16 lh-24 color-darkblue op-70 max_w_effective">
                      It’s safe for use on metals, plastics, rubbers, fabrics
                      and more, ensuring comprehensive cleaning without damage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 mt-4">
              <img
                className=" w-100 car_wash br_24"
                src={car_wash}
                alt="car_wash"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Choose;
