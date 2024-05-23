import React from "react";
import Header from "../Components/Header.js";
import { Link } from "react-router-dom";
const Books = () => {
  
  return (
    <>
    <Header content="Our Books"/>
       {/* Books */}
      {/* <div className="Books">
         <div className="container">
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <div className="titlepage">
                     <span>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</span> 
                  </div>
               </div>
            </div>
            <div className="row box">
               <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                  <div className="book-box">
                     <figure><img src="images/book-1.jpg" alt="img"/></figure>
                  </div>
               </div>
               <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="book-box">
                     <figure><img src="images/book-2.jpg" alt="img"/></figure>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                  <div className="book-box">
                     <figure><img src="images/book-1.jpg" alt="img"/></figure>
                  </div>
               </div>
               <div className="col-md-6 offset-md-3">
                  <p>magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris</p>
               </div>
            </div>
            <div className="container mb-4">
               <div className="row">
                  <div className="col-md-12">
                     <div className="read-more">
                     <Link to="#">Read More</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div> */}
      {/* end Books */}
    </>
  );
}

export default Books;
