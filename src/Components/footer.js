import { useTranslation } from "react-i18next";

function Footer() {
   const { t } = useTranslation(); 
  return (
    <footer style={{marginBottom:"0"}}>
      {/* <div className="footer ">
         <div className="container">
            <div className="row pdn-top-30">
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="Follow">
                     <h3>Follow Us</h3>
                  </div>
                  <ul className="location_icon">
                     <li> <a href="#"><img src="icon/facebook.png" alt=""/></a></li>
                     <li> <a href="#"><img src="icon/Twitter.png" alt=""/></a></li>
                     <li> <a href="#"><img src="icon/linkedin.png" alt=""/></a></li>
                     <li> <a href="#"><img src="icon/instagram.png" alt=""/></a></li>
                  </ul>
               </div>
               <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                  <div className="Follow">
                     <h3>Newsletter</h3>
                  </div>
                  <input className="Newsletter" placeholder="Enter your email" type="email"/>
                  <button className="Subscribe">Subscribe</button>
               </div>
            </div>
         </div>
      </div> */}
    <div className="copyright bg-black mt-auto">
       <div className="container ">
          <p className="text-light">{t("copyright")}</p> 
       </div>
    </div>
 </footer>
  );
}

export default Footer;
