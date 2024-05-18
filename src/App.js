import "./App.css";
import Home from "./Pages/home";
import About from "./Pages/about";
import Books from "./Pages/books";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/navbar";
import Footer from "./Components/Footer";
import NotFound from "./Pages/notfound";
import Contact from "./Pages/contact";
import Library from "./Pages/library";
// import Library from "../locales/ar/translation.json";

import React, { useEffect } from "react";
// import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import Cookies from "js-cookie";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    // resources: {
    //   en: {
    //     translation: 
    //   },
    //   ar: {
    //     translation: 
    //   }
    // },
    // lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    detection:{
      order: [ 
      'cookie', 
      'localStorage', 
      'sessionStorage', 
      'navigator', 
      'htmlTag', 
      'path', 
      'subdomain'],
      caches: ['cookie'],

    },
    backend:{
      loadPath: '/locales/{{lng}}/translation.json',

    },
    

    
  });




function App() {
  const lng = Cookies.get("i18next") || 'ar';
  console.log(lng)

  useEffect(()=>{
    window.document.dir = i18n.dir();
  },[lng])

  return (
    // <div dir={lng === 'ar' ? 'rtl' : 'ltr'}>
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" exact />
          <Route component={Books} path="/books" exact />
          <Route component={Contact} path="/contact" exact />
          <Route component={Library} path="/library" exact />
          <Route component={NotFound} path="*" />
        </Switch> 
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
