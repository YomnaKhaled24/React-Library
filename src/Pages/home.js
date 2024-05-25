import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ContactComponent from "../Components/contact.js";
import Header from "../Components/Header.js";
import AboutComponent from "../Components/about.js";
import ServicesComponent from "../Components/services.js";
import OurBookHome from "../Components/our_book_home.js";
const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="slider_section">
        <Carousel>
          <Carousel.Item>
            <img
              className="first-slide"
              src="images/banner.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>
                {t("first-sentence1")}
                <br /> {t("first-sentence2")}
                <br /> {t("first-sentence3")}
              </h1>
              <p>
                {t("first-sentence1")}
                <br /> {t("first-sentence2")}
                <br /> {t("first-sentence3")}{" "}
              </p>
              <div className="button_section">
                {" "}
                <Link to="#" className="main_bt">
                  {t("read_more")}
                </Link>{" "}
              </div>
              <ul className="locat_icon">
                <li>
                  {" "}
                  <Link to="#">
                    <img src="icon/facebook.png" alt="" />
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="#">
                    <img src="icon/Twitter.png" alt="" />
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="#">
                    <img src="icon/linkedin.png" alt="" />
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="#">
                    <img src="icon/instagram.png" alt="" />
                  </Link>
                </li>
              </ul>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="second-slide"
              src="images/banner.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1>
                {t("first-sentence1")}
                <br /> {t("first-sentence2")}
                <br /> {t("first-sentence3")}
              </h1>
              <p>
                {t("first-sentence1")}
                <br /> {t("first-sentence2")}
                <br /> {t("first-sentence3")}{" "}
              </p>
              <div className="button_section">
                {" "}
                <Link to="#" className="main_bt">
                  {t("read_more")}
                </Link>{" "}
              </div>
              <ul className="locat_icon">
                <li>
                  {" "}
                  <Link to="#">
                    <img src="icon/facebook.png" alt="" />
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="#">
                    <img src="icon/Twitter.png" alt="" />
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="#">
                    <img src="icon/linkedin.png" alt="" />
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="#">
                    <img src="icon/instagram.png" alt="" />
                  </Link>
                </li>
              </ul>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      
      <Header content={t("about")} />
      {/* <p className="text-center">{t("about_title")}</p> */}
     <AboutComponent/>
      <Header content={t("books_nav3")} /> 
      {/* <p className="text-center mb-5">{t('service_title')}</p> */}
      <ServicesComponent/>
      <OurBookHome/>  
      <Header content={t("contact")} />
      {/* <p className="text-center mb-5">{t('contact_title')}</p> */}
      <ContactComponent/>
    </>
  );
};

export default Home;
