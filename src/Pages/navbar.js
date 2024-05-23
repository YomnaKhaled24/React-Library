// import { useTransition } from "react";
import { Link } from "react-router-dom";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeLanguageAction } from "../Store/Actions/changeLanguageAction";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  // console.log(t('welcom'))
  const lng = Cookies.get("i18next") || "ar";
  // console.log(lng)

  // useEffect(()=>{
  //   window.document.dir = i18n.dir();

  // },[lng])

  const dispatch = useDispatch();
  // const changeLanguageRedux = (lang)=>{

  //   dispatch(changeLanguageAction(lang))

  // }
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    dispatch(changeLanguageAction(lang));
  };
  return (
    <nav dir="ltr">
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
              {/* <div className="full">
                <div className="center-desk">
                  <div className="">
                    <Link to="/">
                      <img src="images/logo.png" alt="#" />
                    </Link>
                  </div>
                </div>
              </div>*/}
            </div> 
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
              <div className="menu-area">
                <div className="limit-box">
                  <nav className="main-menu">
                    <ul className="menu-area-main">
                      <li className="active">
                        {/* <Link to="/">Home</Link> */}
                        <Link to="/">{t("home_nav1")}</Link>
                      </li>
                      <li>
                        <Link to="/about">{t("about_nav2")}</Link>
                      </li>
                      {/* <li>
                        <Link to="/books">{t("books_nav3")}</Link>
                      </li> */}
                      <li>
                        <Link to="/library">{t("library_nav4")}</Link>
                      </li>
                      <li>
                        <Link to="/contact">{t("contact_nav5")}</Link>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="languageDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <img
                            src={
                              lng === "ar"
                                ? "https://cdn.weglot.com/flags/rectangle_mat/sa.svg"
                                : "https://cdn.weglot.com/flags/rectangle_mat/se.svg"
                            }
                            width="30"
                            height="20"
                            alt="Language flag"
                            className="mr-2"
                          />
                          {lng === "ar" ? "العربية" : "Svenska"}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="languageDropdown"
                        >
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => changeLanguage("ar")}
                          >
                            <img
                              src="https://cdn.weglot.com/flags/rectangle_mat/sa.svg"
                              width="30"
                              height="20"
                              alt="Arabic flag"
                              className="mr-2"
                            />
                            العربية
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => changeLanguage("en")}
                          >
                            <img
                              src="https://cdn.weglot.com/flags/rectangle_mat/se.svg"
                              width="30"
                              height="20"
                              alt="Swedish flag"
                              className="mr-2"
                            />
                            Svenska
                          </a>
                        </div>
                      </li>
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
