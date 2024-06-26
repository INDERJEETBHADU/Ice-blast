import React from "react";
import ComnHeading from "../Common/ComnHeading";
import { NewsCard } from "../Common/Card";
import CommonBtn from "../Common/CommonBtn";

function News() {
  return (
    <>
      <div className="container">
        <div className=" text-center">
          <ComnHeading text="Latest News & Insights" />
          <p className=" mb-0 ff-acumin-reg fw-normal text-16 lh-24 color-darkblue  op-70 mt-3">
            Uncover the latest insights and innovation in car care.
          </p>
        </div>
        <div className=" d-flex flex-wrap align-items-center gap-4 pt-5 justify-content-center">
          {NewsCard.map((data, index) => (
            <>
              <div className="news_card">
                <img className="  w-100" src={data.Img} alt="news" />
                <div className=" ps-2">
                  <div className=" pt-1">
                    <p className=" mb-0 mt-3 op-90  ff-acumin-bold fw-lighter text-16 lh-24  color-darkblue">
                      {data.heading}
                    </p>
                  </div>
                  <div className=" pt-2">
                    <p className=" mb-0 ff-acumin-bold fw-bold text-16 lh-24 color-darkblue">
                      What is Dry Ice Blasting? An In-Depth Guide tp
                      Revolutionary Car Cleaning
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className=" d-flex justify-content-center mt-4 pt-3">
          <CommonBtn text="More Blogs" />
        </div>
      </div>
    </>
  );
}

export default News;
