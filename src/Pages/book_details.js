import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const BookDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const lng = useSelector((state) => state.langR.lang);
  const [book, setBook] = useState(null);
  const [activeKey, setActiveKey] = useState('description');


  useEffect(() => {
    const file = lng === "en" ? "/Svenska.json" : "/Arabic.json";

    fetch(file)
      .then((response) => response.json())
      .then((data) => data.find((b) => b.ISBN === id))
      .then((book) => setBook(book));
      console.log(book)
  }, [lng, id]);

  return (
    <div className="Library">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center">
            {book && <img src={book.img} alt={book.title} className="img-fluid mb-2"
            style={{width:"19rem", height:"28rem"}} />}
          </div>
          <div className="col-md-8">
            {book && (
              <>
                <h2 className="custom-text-color2">
                  {book.title} - {book.format}, {book.language},{" "}
                  {book.published_year}
                </h2>
                <h4 className="custom-text-color2">
                  {t("author")}: {book.author}
                </h4>
                <hr />
                {/* <div className="d-flex align-items-center">
                  <span>
                    <FontAwesomeIcon icon={faHeart} /> {t("save_to_wishlist")}
                  </span>
                </div>
                <hr /> */}

                <Tab.Container defaultActiveKey="description" activeKey={activeKey} onSelect={(selectedKey) => setActiveKey(selectedKey)}>
                  <Nav variant="tabs">
                    <Nav.Item ac>
                      <Nav.Link eventKey="description" style={{ fontWeight: activeKey === "description" ? "bolder" : "normal" }} className="custom-text-color2 fs-5">{t("description")} </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="productInfo" style={{ fontWeight: activeKey === "productInfo" ? "bolder" : "normal" }} className="custom-text-color fs-5">{t("product_info")}</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className="mt-3">
                    <Tab.Pane eventKey="description" >
                      <p className="custom-text-color2 fw-light fw-1">{book.description}</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="productInfo">
                      <div className="row">
                        <div className="col-md-6 custom-text-color2 fw-1">
                          <ul>
                            <li>
                              {t("author")}: {book.author}
                            </li>
                            <li>
                              {t("translator")}: {book.translator}
                            </li>
                            <li>
                              {t("edition")}: {book.edition}
                            </li>
                            <li>ISBN: {book.ISBN}</li>
                            <li>
                              {t("language")}: {book.language}
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 custom-text-color2 fw-1">
                          <ul>
                            <li>
                              {t("weight")}: {book.weight}
                            </li>
                            <li>
                              {t("published_date")}: {book.published_date}
                            </li>
                            <li>
                              {t("publisher")}: {book.publisher}
                            </li>
                            <li>
                              {t("page_count")}: {book.page_count}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;