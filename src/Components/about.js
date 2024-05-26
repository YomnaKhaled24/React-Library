import React from "react";
import { useTranslation } from "react-i18next";
function About() {
  const { t } = useTranslation();

  return (
    <>
      <div className="about">
        <div className="container">
          <div
            className="row"
            style={{
              border: "2px solid #664E3F",
              borderRadius: "30px",
              padding: "40px",
            }}
          >
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 d-flex align-items-center justify-content-center">
              <div className="about-box text-center">
                <figure>
                  <img src="images/about.png" alt="img" style={{height:"25rem" , width:"20rem"}} />
                </figure>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 d-flex align-items-center">
              <div className="about-box">
                <p className="custom-text-color2 fs-5">
                  {t("about_page")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
