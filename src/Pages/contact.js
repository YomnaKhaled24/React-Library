import Header from "../Components/header.js";
import ContactComponent from "../Components/contact.js";
import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header content={t("contact")} />
      <h4 className="text-center mb-5 custom-text-color">{t('contact_title')}</h4>
      <ContactComponent/>
    </>
  );
};

export default Contact;
