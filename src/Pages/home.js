import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
const Home = () => {
   const { t } = useTranslation();

  return (
    <>
      <section className="slider_section"> 
         <Carousel> 
            <Carousel.Item> 
              <img className="first-slide" src="images/banner.jpg" alt="First slide"/> 
              <Carousel.Caption> 
                <h1>{t('first-sentence1')}<br/> {t('first-sentence2')}<br/> {t('first-sentence3')}</h1> 
                <p>{t('first-sentence1')}<br/> {t('first-sentence2')}<br/> {t('first-sentence3')} </p> 
                <div className="button_section"> <Link to="#" className="main_bt">{t('read_more')}</Link>  </div> 
                <ul className="locat_icon"> 
                   <li> <Link to="#"><img src="icon/facebook.png" alt=""/></Link></li> 
                   <li> <Link to="#"><img src="icon/Twitter.png" alt=""/></Link></li> 
                   <li> <Link to="#"><img src="icon/linkedin.png" alt=""/></Link></li> 
                   <li> <Link to="#"><img src="icon/instagram.png" alt=""/></Link></li> 
                </ul> 
              </Carousel.Caption> 
            </Carousel.Item> 
            <Carousel.Item> 
              <img className="second-slide" src="images/banner.jpg" alt="Second slide"/> 
              <Carousel.Caption> 
                <h1>{t('first-sentence1')}<br/> {t('first-sentence2')}<br/> {t('first-sentence3')}</h1> 
                <p>{t('first-sentence1')}<br/> {t('first-sentence2')}<br/> {t('first-sentence3')} </p> 
                <div className="button_section"> <Link to="#" className="main_bt">{t('read_more')}</Link>  </div> 
                <ul className="locat_icon"> 
                   <li> <Link to="#"><img src="icon/facebook.png" alt=""/></Link></li> 
                   <li> <Link to="#"><img src="icon/Twitter.png" alt=""/></Link></li> 
                   <li> <Link to="#"><img src="icon/linkedin.png" alt=""/></Link></li> 
                   <li> <Link to="#"><img src="icon/instagram.png" alt=""/></Link></li> 
                </ul> 
              </Carousel.Caption> 
            </Carousel.Item> 
            {/* <Carousel.Item> 
              <img className="third-slide" src="images/banner.jpg" alt="Third slide"/> 
              <Carousel.Caption> 
                <h1>The Best Libraries That<br/> Every Book Lover Must<br/> Visit!</h1> 
                <p>adipiscing elit, sed do eiusmod tempor incididunt ut<br/> labore et dolore magna aliqua. Ut enim ad minim<br/> veniam, quis nostrud exercitation </p> 
                <div className="button_section"> <Link to="#" className="main_bt">Read More</Link>  </div> 
                <ul className="locat_icon"> 
                   <li> <Link to="#"><img src="icon/facebook.png" alt=""/></Link></li> 
                   <li> <Link to="#"><img src="icon/Twitter.png" alt=""/></Link></li> 
                   <li> <Link to="#"><img src="icon/linkedin.png" alt=""/></Link></li> 
                   <li> <Link to="#"><img src="icon/instagram.png" alt=""/></Link></li> 
                </ul> 
              </Carousel.Caption> 
            </Carousel.Item>  */}
         </Carousel> 
      </section>
      {/* about */}
      <div className="about">
         <div className="container">
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <div className="aboutheading">
                     <h2>{t("about")} </h2>
                     {/* <span>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</span> */}
                  </div>
               </div>
            </div>
            <div className="row border">
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
                  <div className="about-box">
                     <p> {t('about_page')}</p>
                     <Link to="#">{t('read_more')}</Link>
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
      {/* Library */}
      <div className="Library">
         <div className="container">
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <div className="titlepage">
                     <h2>{t('library_nav4')}</h2>
                     {/* <span>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</span>  */}
                  </div>
               </div>
            </div>
         </div>
         <div className="bg">
            <div className="container">
               <div className="row">
                  <div className="col-md-10 offset-md-1">
                     <div className="Library-box">
                        <figure><img src="images/Library-.jpg" alt="#"/></figure>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="read-more">
                     <Link to="#">{t('read_more')}</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* end Library */}
      {/*Books */}
      <div className="Books">
         <div className="container">
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <div className="titlepage">
                     <h2>{t('contact_nav6')}</h2>
                     {/* <span>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</span>  */}
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
               {/* <p>magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris</p> */}
               </div>
            </div>
            <div className="container mb-5">
               <div className="row">
                  <div className="col-md-12">
                     <div className="read-more">
                        <Link to="#">{t('read_more')}</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* end Books */}
      {/* Contact */}
      {/* <div className="Contact">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage3">
                     <h2>Contact</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <form>
                     <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                           <input className="form-control" placeholder="Name" type="text"/>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                           <input className="form-control" placeholder="Phone Number" type="tel"/>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                           <input className="form-control" placeholder="Email" type="email"/>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                           <textarea className="textarea" placeholder="Message"></textarea>
                        </div>
                     </div>
                     <button className="send-btn" type="submit">Send</button>
                  </form>
               </div>
            </div>
         </div>
      </div> */}
      {/* end Contact */}
     
    </>
  );
}

export default Home;