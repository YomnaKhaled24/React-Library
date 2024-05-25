import { Link, useLocation } from "react-router-dom";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { changeLanguageAction } from "../Store/Actions/changeLanguageAction";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const lng = Cookies.get("i18next") || "ar";
  const dispatch = useDispatch();
  const location = useLocation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    dispatch(changeLanguageAction(lang));
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4" dir="ltr">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {/* <img src="" alt="#" /> */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${isActive("/")}`}>
              <Link className="nav-link" to="/">{t("home_nav1")}</Link>
            </li>
            <li className={`nav-item ${isActive("/about")}`}>
              <Link className="nav-link" to="/about">{t("about_nav2")}</Link>
            </li>
            <li className={`nav-item ${isActive("/services")}`}>
              <Link className="nav-link" to="/services">{t("books_nav3")}</Link>
            </li>
            <li className={`nav-item ${isActive("/library")}`}>
              <Link className="nav-link" to="/library">{t("library_nav4")}</Link>
            </li>
            <li className={`nav-item ${isActive("/contact")}`}>
              <Link className="nav-link" to="/contact">{t("contact_nav5")}</Link>
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
                <button
                  className="dropdown-item"
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
                </button>
                <button
                  className="dropdown-item"
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
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;