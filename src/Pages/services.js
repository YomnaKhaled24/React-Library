import React from "react";
import Header from "../Components/Header.js";
import ServicesComponent from "../Components/services.js";
import { useTranslation } from "react-i18next";


const Services = () => {
    const { t } = useTranslation()


    return(
        <>
         <Header content={t("books_nav3")} /> 
         <h4 className="text-center mb-5 custom-text-color">{t('service_title')}</h4>
         <ServicesComponent/>
        
        
        </>
    )

}


export default Services;