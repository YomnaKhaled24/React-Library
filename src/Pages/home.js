import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ContactComponent from "../Components/contact.js";
import Header from "../Components/header.js";
import AboutComponent from "../Components/about.js";
import ServicesComponent from "../Components/services.js";
import OurBookHome from "../Components/our_book_home.js";
const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/banner11.png"
          alt="First slide"
          // style={{height:"30rem"}}
        />
        <Carousel.Caption  className="banner-coler custom-carousel-caption">
          <h1 >{t('first-sentence1')}</h1>


          {/* <p className="custom-text-color2">Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/banner13.png"
          alt="Second slide"
        />
        <Carousel.Caption className="banner-coler custom-carousel-caption">
          <h1 >{t('first-sentence1')}</h1>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
      <Header content={t("about")} />
      <h4 className="text-center custom-text-color mb-5">{t("about_title")}</h4>
     <AboutComponent/>
      <Header content={t("books_nav3")} /> 
      <h4 className="text-center custom-text-color mb-5">{t('service_title')}</h4>
      <ServicesComponent/>
      <OurBookHome/>  
      <Header content={t("contact")} />
      <h4 className="text-center custom-text-color mb-5">{t('contact_title')}</h4>
      <ContactComponent/>
    </>
  );
};

export default Home;
