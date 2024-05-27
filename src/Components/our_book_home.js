import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Header from "./header.js";
import Carousel from 'react-bootstrap/Carousel';
import Marquee from "react-fast-marquee";
import Card from 'react-bootstrap/Card';


function OurBookHome() {
  const [books, setBooks] = useState([]);
  const [cardNumber, setcardNumber] = useState(3);
  const { t } = useTranslation();
  const lng = useSelector((state) => state.langR.lang);
  const windowWidth = window.innerWidth;

  useEffect(() => {
    if (lng === "sv") {
      fetch("./Svenska.json")
        .then((response) => response.json())
        .then((data) => setBooks(data));
    } else {
      fetch("./Arabic.json")
        .then((response) => response.json())
        .then((data) => setBooks(data));
    }
  }, [lng]);

  const truncateContent = (content, maxLength) => {
    if (content.length <= maxLength) {
      return content;
    } else {
      return content.substring(0, maxLength) + "...";
    }
  };
  
 

  

  return (
    <>
      <Header content={t("library_nav4")} />
      <h4 className="text-center custom-text-color mb-5">{t("our_book_title")}</h4>
      <div className="mb-1">
        <div className="container mt-2" dir="ltr">

        <Marquee pauseOnHover  direction={lng=== "ar" ? "right" : "left"}>
        {books.map((book, index) => (

          <Card className="mx-3">
            <Card.Img variant="top" className="mx-auto"
            src={book.img} 
            alt={book.title} 
            style={{ width: "13rem", height: "16rem",
            }}/>
            <Card.Body dir={lng=== "ar" ? "rtl" : "ltr"}>
              <Card.Title>
                <Link to={`/BookDetails/${book.ISBN}`} className="custom-text-color2"> {book.title} </Link>
              </Card.Title>
              <Card.Text className="custom-text-color">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center my-2">
                    <span>{t("by")}</span>
                    <span className="ml-1 mx-2">{book.author}</span>
                  </div>

                  <div className="text-secondary" style={{ textAlign: "right" }}>
                     <span>{book.category}</span>
                  </div>

                  {/* <p className="mt-2">{truncateContent(book.description, 50)}</p> */}
                </div>
              </Card.Text>
            </Card.Body>
         </Card>

        )
      )}
        </Marquee>          
        </div>
      </div>
    </>
  );
}

export default OurBookHome;
