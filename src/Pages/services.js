import React from "react";
import Header from "../Components/Header.js";
import ServicesComponent from "../Components/services.js";
import { useTranslation } from "react-i18next";


const Services = () => {
    const { t } = useTranslation()


    return(
        <>
         <Header content={t("books_nav3")} /> 
         <p className="text-center mb-5">{t('service_title')}</p>
         <ServicesComponent/>
        
        
        </>
    )

}


export default Services;