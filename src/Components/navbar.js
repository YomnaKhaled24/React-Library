// import { useTransition } from "react";
import { Link } from "react-router-dom";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { useEffect } from "react";

const Navbar = () => {
  const { t , i18n } = useTranslation()
  // console.log(t('welcom'))
  const lng = Cookies.get("i18next") || 'ar';
  // console.log(lng)

  useEffect(()=>{
    window.document.dir = i18n.dir();

  },[lng])
  return (
    <nav>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
              <div className="full">
                <div className="center-desk">
                  <div className="logo">
                    <Link to="/">
                      <img src="images/logo.png" alt="#" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
              <div className="menu-area">
                <div className="limit-box">
                  <nav className="main-menu">
                    <ul className="menu-area-main">
                      <li className="active">
                        {/* <Link to="/">Home</Link> */}
                        <Link to="/">{t('home_nav1')}</Link>

                      </li>
                      <li>
                        <Link to="/about">{t('about_nav2')}</Link>
                      </li>
                      <li>
                        <Link to="/books">{t('books_nav3')}</Link>
                      </li>
                      <li>
                        <Link to="/library">{t('library_nav4')}</Link>
                      </li>
                      <li>
                        <Link to="/contact">{t('contact_nav5')}</Link>
                      </li>
                      <li>
                        <button onClick={()=>{
                          i18n.changeLanguage('ar');
                        }} >Ar</button>
                      </li>
                      <li>
                        <button onClick={()=>{
                          i18n.changeLanguage('en');
                        }}>En</button>
                      </li>
                      {/* <li className="mean-last">
                        <Link to="#">
                          <img src="images/search_icon.png" alt="#" />
                        </Link>
                      </li>
                      <li className="mean-last">
                        <Link to="#">
                          <img src="images/top-icon.png" alt="#" />
                        </Link>
                      </li> */}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
