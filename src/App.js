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
import Book_Details from "./Pages/book_details"
import React, { useEffect } from "react";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(HttpApi)
  .init({
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
  const lng = useSelector((state) => state.langR.lang);

  // const lng = Cookies.get("i18next") || 'ar';
  // console.log(lng)

  // useEffect(()=>{
  //   window.document.dir = i18n.dir();
  // },[lng])

  return (
    <div dir={lng === 'ar' ? 'rtl' : 'ltr'}>
    {/* <div> */}
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" exact />
          <Route component={Books} path="/books" exact />
          <Route component={Contact} path="/contact" exact />
          <Route component={Library} path="/library" exact />
          <Route component={Book_Details} path="/BookDetails/:id"/>
          <Route component={NotFound} path="*" />
        </Switch> 
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
