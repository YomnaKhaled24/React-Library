import React from "react";
import Header from "../Components/Header.js";
import AboutComponent from "../Components/about.js";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header content={t("about")} />
      <p className="text-center">{t("about_title")}</p>
     <AboutComponent/>
    </>
  );
};

export default About;
