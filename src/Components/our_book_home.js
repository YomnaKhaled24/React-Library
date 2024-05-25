import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Header from "../Components/Header.js";
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
    if (lng === "en") {
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
  
  function getColClass() {
    // Get the current window width
    
  
    // Set breakpoints for different screen sizes
    const mediumBreakpoint = 768; // Medium screens (col-md)
    const smallBreakpoint = 576; // Small screens (col-sm)
    // const cardNumber = 0
    // Determine the appropriate column class
    if (windowWidth >= mediumBreakpoint) {
      // setcardNumber(3)
      return "col-md-4"; // Display three cards per row on medium screens
    } else if (windowWidth >= smallBreakpoint) {
      // setcardNumber(2)
      return "col-sm-6"; // Display two cards per row on small screens
    } else {
      // setcardNumber(1)
      return "col-12"; // Display one card per row on extra small screens
    }
  }

  // const carouselItemStyle = {
  //   display: 'flex',
  //   // justifyContent: 'space-between',
  //   // flexWrap: 'wrap',
  //   // marginBottom: '20px'
  // };
  
  // const cardStyle = {
  //   width: '30%', // Adjust the width to ensure three cards fit per page
  //   marginBottom: '20px'
  // };

  return (
    <>
      <Header content={t("library_nav4")} />
      <p className="text-center mb-5">{t("our_book_title")}</p>
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
                <Link to={`/BookDetails/${book.ISBN}`}> {book.title} </Link>
              </Card.Title>
              <Card.Text >
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center my-2">
                    <span>{t("by")}</span>
                    <strong className="ml-1 mx-2">{book.author}</strong>
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

          {/* <Carousel>
            {books.map((book, index) => {
              if (index % 3 === 0) {
                return (
                  <Carousel.Item key={index}>
                    <div className="row">
                      {[index, index + 1, index + 2].map((i) => {
                        if (books[i]) {
                          return (
                            <div key={books[i].ISBN} className="col-md-4 mb-4">
                              <div className="card h-100 shadow-sm">
                                <Link to={`/BookDetails/${books[i].ISBN}`} className=" text-center">
                                  <img
                                    src={books[i].img}
                                    alt={books[i].title}
                                    className="card-img-top "
                                    style={{
                                      width: "90%",
                                      height: "30rem",
                                      objectFit: "cover",
                                    }}
                                  />
                                </Link>
                                <div className="card-body d-flex flex-column">
                                  <h5 className="card-title">
                                    <Link to={`/BookDetails/${books[i].ISBN}`}>
                                      {books[i].title}
                                    </Link>
                                  </h5>
                                  <div className="d-flex align-items-center my-2">
                                    <span>{t("by")} </span>
                                    <strong className="ml-1 mx-2">{books[i].author}</strong>
                                  </div>
                                  <div className="text-secondary" style={{ textAlign: "right" }}>
                                    <span>{books[i].category}</span>
                                  </div>
                                  <p className="mt-2">
                                    {truncateContent(books[i].description, 200)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        } else {
                          return null;
                        }
                      })}
                    </div>
                  </Carousel.Item>
                );
              } else {
                return null;
              }
            })}
          </Carousel> */}

{/* <Carousel>
  {books.map((book, index) => {
    if (index % 3 === 0) {
      return (
        <Carousel.Item key={index}>
          <div className="row">
            {[index, index + 1, index + 2].map((i) => {
              const adjustedIndex = i >= books.length ? i % books.length : i;
              if (books[adjustedIndex]) {
                const colClass = getColClass(); // Function to determine column class based on screen size
                return (
                  <div key={books[adjustedIndex].ISBN} className={`mb-4 ${colClass}`}>
                    <div className={`card shadow-sm h-100 `}>
                      <Link to={`/BookDetails/${books[adjustedIndex].ISBN}`} className="text-center">
                        <img
                          src={books[adjustedIndex].img}
                          alt={books[adjustedIndex].title}
                          className="card-img-top"
                          style={{
                            width: "90%",
                            height: "30rem",
                            objectFit: "cover",
                          }}
                        />
                      </Link>
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">
                          <Link to={`/BookDetails/${books[adjustedIndex].ISBN}`}>
                            {books[adjustedIndex].title}
                          </Link>
                        </h5>
                        <div className="d-flex align-items-center my-2">
                          <span>{t("by")}</span>
                          <strong className="ml-1 mx-2">{books[adjustedIndex].author}</strong>
                        </div>
                        <div className="text-secondary" style={{ textAlign: "right" }}>
                          <span>{books[adjustedIndex].category}</span>
                        </div>
                        <p className="mt-2">{truncateContent(books[adjustedIndex].description, 200)}</p>
                        </div>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </Carousel.Item>
      );
    } else {
      return null;
    }
  })}
</Carousel> */}










          
        </div>
      </div>
    </>
  );
}

export default OurBookHome;
