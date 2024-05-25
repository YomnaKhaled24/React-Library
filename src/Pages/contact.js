import Header from "../Components/Header.js";
import ContactComponent from "../Components/contact.js";
import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header content={t("contact")} />
      <p className="text-center mb-5">{t('contact_title')}</p>
      <ContactComponent/>
    </>
  );
};

export default Contact;