import React from "react";
import Header from "../Components/Header.js";
import AboutComponent from "../Components/about.js";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header content={t("about")} />
      <h4 className="text-center custom-text-color mb-5">{t("about_title")}</h4>
     <AboutComponent/>
    </>
  );
};

export default About;
