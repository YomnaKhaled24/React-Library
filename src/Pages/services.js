import React from "react";
import Header from "../Components/Header.js";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Services = () => {
    const { t } = useTranslation()


    return(
        <>
        <Header content={t("books_nav3")} /> 
        <div className="services">
         <div className="container">
            <div className="row">
                <h2>{t("services1")}</h2>
                <ul>
                    <li>{t('services2')}</li>
                    <li>{t('services3')}</li>
                    <li>{t('services4')}</li>
                    <li>{t('services5')}</li>
                    <li>{t('services6')}</li>
                    <li>{t('services7')}</li>

                </ul>
                
            </div> 
            
         </div>
      </div>
        
        
        </>
    )

}


export default Services;