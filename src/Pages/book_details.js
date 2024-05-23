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
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-4">
            {book && <img src={book.img} alt={book.title} className="img-fluid" />}
          </div>
          <div className="col-md-8">
            {book && (
              <>
                <h2>
                  {book.title} - {book.format}, {book.language},{" "}
                  {book.published_year}
                </h2>
                <h4>
                  {t("author")}: {book.author}
                </h4>
                <hr />
                <div className="d-flex align-items-center">
                  <span>
                    <FontAwesomeIcon icon={faHeart} /> {t("save_to_wishlist")}
                  </span>
                </div>
                <hr />
                <Tab.Container defaultActiveKey="description">
                  <Nav variant="tabs">
                    <Nav.Item>
                      <Nav.Link eventKey="description">{t("description")}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="productInfo">{t("product_info")}</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className="mt-3">
                    <Tab.Pane eventKey="description">
                      <p>{book.description}</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="productInfo">
                      <div className="row">
                        <div className="col-md-6">
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
                        <div className="col-md-6">
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