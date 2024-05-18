import React from "react";
import Header from "../Components/Header.js";
import { Link } from "react-router-dom";
const About = () => {
  
  return (
    <>
    <Header content="About"/>
      {/* about */}
      <div className="about">
         <div className="container">
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <div className="aboutheading">
                     <span>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</span>
                  </div>
               </div>
            </div>
            <div className="row border">
               <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
                  <div className="about-box">
                     <p> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                     <Link to="#">Read More</Link>
                  </div>
               </div>
               <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                  <div className="about-box">
                     <figure><img src="images/about.png" alt="img" /></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* end about */}
    </>
  );
}

export default About;
