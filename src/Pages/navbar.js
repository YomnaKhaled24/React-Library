// import { useTransition } from "react";
import { Link } from "react-router-dom";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeLanguageAction } from "../Store/Actions/changeLanguageAction";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


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
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light" dir="ltr">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="/">
    //       <img src="images/logo.png" alt="Logo" />
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse" 
    //       data-bs-target="#navbarNavDropdown" 
    //       aria-controls="navbarNavDropdown" 
    //       aria-expanded="false" 
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //       <ul className="navbar-nav ml-auto">
    //         <li className="nav-item active">
    //           <Link className="nav-link" to="/">{t("home_nav1")}</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/about">{t("about_nav2")}</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/library">{t("library_nav4")}</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/services">{t("books_nav3")}</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/contact">{t("contact_nav5")}</Link>
    //         </li>
    //         <li className="nav-item dropdown">
    //           <button
    //             className="nav-link dropdown-toggle btn btn-link"
    //             id="languageDropdown"
    //             role="button"
    //             data-bs-toggle="dropdown"
    //             data-toggle="dropdown"
    //             // aria-haspopup="true"
    //             aria-expanded="false"
    //           >
    //             <img
    //               src={
    //                 lng === "ar"
    //                   ? "https://cdn.weglot.com/flags/rectangle_mat/sa.svg"
    //                   : "https://cdn.weglot.com/flags/rectangle_mat/se.svg"
    //               }
    //               width="30"
    //               height="20"
    //               alt="Language flag"
    //               className="mr-2"
    //             />
    //             {lng === "ar" ? "العربية" : "Svenska"}
    //           </button>
    //           <div className="dropdown-menu" aria-labelledby="languageDropdown">
    //             <button
    //               className="dropdown-item"
    //               onClick={() => changeLanguage("ar")}
    //             >
    //               <img
    //                 src="https://cdn.weglot.com/flags/rectangle_mat/sa.svg"
    //                 width="30"
    //                 height="20"
    //                 alt="Arabic flag"
    //                 className="mr-2"
    //               />
    //               العربية
    //             </button>
    //             <button
    //               className="dropdown-item"
    //               onClick={() => changeLanguage("en")}
    //             >
    //               <img
    //                 src="https://cdn.weglot.com/flags/rectangle_mat/se.svg"
    //                 width="30"
    //                 height="20"
    //                 alt="Swedish flag"
    //                 className="mr-2"
    //               />
    //               Svenska
    //             </button>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
