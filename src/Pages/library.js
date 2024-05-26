import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faThLarge, faList } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Header from "../Components/Header.js";
import Row from "react-bootstrap/Row";

function Library() {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [viewMode, setViewMode] = useState("list");
  const { t, i18n } = useTranslation();
  const windowWidth = window.innerWidth;
  console.log(windowWidth);

  // const lng = Cookies.get("i18next") || 'ar';
  const lng = useSelector((state) => state.langR.lang);

  useEffect(() => {
    if (lng === "en") {
      fetch("./Svenska.json")
        .then((response) => response.json())
        .then((data) => setBooks(data));

      setCategories([
        "Geografiska områden",
        "Skönlitteratur",
        "Samhälle & politik",
      ]);
    } else {
      fetch("./Arabic.json")
        .then((response) => response.json())
        .then((data) => setBooks(data));

      setCategories(["المناطق الجغرافية", "الأدب الجميل", "المجتمع والسياسة"]);
    }
    // console.log(books)
  }, [lng, windowWidth]);

  const filteredBooks =
    selectedCategories.length === 0
      ? books
      : books.filter((book) => selectedCategories.includes(...book.categories));

  const handleCategoryChange = (categories) => {
    if (selectedCategories.includes(categories)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== categories)
      );
    } else {
      setSelectedCategories([...selectedCategories, categories]);
    }
  };

  const truncateContent = (content, maxLength) => {
    if (content.length <= maxLength) {
      return content;
    } else {
      return content.substring(0, maxLength) + "...";
    }
  };
  const rowProps = viewMode === "grid" ? { xs: 1, sm: 1, md: 2, lg: 4 } : {};

  return (
    <>
    <Header content={t("library_nav4")} />
    <h4 className="text-center custom-text-color mb-5">
      {t("our_book_title")}
    </h4>
    <div className="">
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-3">
            <div className="p-3 border-right">
              <span className="custom-background p-2 rounded">{t("filterbycategory")}</span>
              <ul className="list-group list-group-flush rounded mt-4">
                <li className="list-group-item">
                  <h5 className="mt-2 mb-2">{t("category")}</h5>
                  <div className="d-flex flex-column">
                    {categories.map((v, i) => (
                      <div key={i} className="form-check mt-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          onChange={() => handleCategoryChange(v)}
                          checked={selectedCategories.includes(v)}
                        />
                        <label
                          className="form-check-label"
                          style={{
                            marginRight: lng === "ar" ? "1.2rem" : "",
                          }}
                        >
                          {v}
                        </label>
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9 ">
            <div className="p-3">
              <div className="d-flex justify-content-end align-items-center mb-3">
                <div>
                  <span className="custom-background p-2 rounded">{t("view")}</span>
                  <button
                    className={`mx-2 ${
                      viewMode === "list" ? "list active" : ""
                    }`}
                    onClick={() => setViewMode("list")}
                    title="List View"
                  >
                    <FontAwesomeIcon icon={faList} />
                  </button>
                  <button
                    className={`mx-2 ml-2 ${
                      viewMode === "grid" ? " grid active" : ""
                    }`}
                    onClick={() => setViewMode("grid")}
                    title="Grid View"
                  >
                    <FontAwesomeIcon icon={faThLarge} />
                  </button>
                </div>
              </div>
              <Row
                {...rowProps}
                className={
                  viewMode === "grid" ? "g-4 mb-5 mx-5" : "list-view"
                }
              >
                {filteredBooks.map((book) => (
                  <div
                    key={book.ISBN}
                    className={
                      viewMode === "grid"
                        ? "   col-md-6 col-lg-4  mb-4"
                        : "media mb-4 pb-4  border-bottom"
                    }
                  >
                    <div
                      className={`d-flex ${
                        viewMode === "grid"
                          ? "card h-100 flex-column"
                          : "flex-column flex-md-row"
                      }`}
                    >
                      <div>
                        <Link
                          to={`/BookDetails/${book.ISBN}`}
                          className={
                            viewMode === "grid"
                              ? "text-center"
                              : "mr-3 text-center"
                          }
                        >
                          <img
                            src={book.img}
                            alt={book.title}
                            className={
                              viewMode === "grid"
                                ? "card-img-top img-fluid"
                                : "media-object img-fluid"
                            }
                            style={{
                              width: viewMode === "grid" ? "20rem" : "11rem",
                              height: viewMode === "grid" ? "17rem" : "18rem",
                              marginLeft:
                                lng === "ar" && viewMode === "list"
                                  ? "3rem"
                                  : "",
                            }}
                          />
                        </Link>
                      </div>
                      <div
                        className={
                          viewMode === "grid"
                            ? "card-body text-center text-md-left"
                            : "media-body"
                        }
                        style={{
                          marginTop: viewMode === "list" ? "20px" : "",
                          marginLeft: viewMode === "grid" ? "0" : viewMode === "list" ? "0" : "20px",
                        }}
                      >
                        <h5
                          className={
                            viewMode === "grid" ? "mt-3 mt-md-0" : "mt-0"
                          }
                        >
                          <Link
                            to={`/BookDetails/${book.ISBN}`}
                            className="custom-text-color"
                          >
                            {book.title}
                          </Link>
                        </h5>
                        <div
                          className={
                            viewMode === "grid"
                              ? ""
                              : "d-flex"
                          }
                        >
                          <span className="custom-text-color">
                            {t("by")}{" "}
                          </span>
                          <strong className="ml-1 mx-2 custom-text-color">
                            {book.author}
                          </strong>
                        </div>
                        <div
                          className={`text-secondary ${
                            viewMode === "grid" ? "d-none" : "mt-2"
                          }`}
                        >
                          <span>{book.format} </span>
                          <span>{book.published_date}, </span>
                          <span>{book.language}, </span>
                          <span>ISBN {book.ISBN}</span>
                        </div>
                        <div
                          className={`text-secondary ${
                            viewMode === "grid" ? "" : "mt-2"
                          }`}
                          style={{ textAlign: "right" }}
                        >
                          <span>{book.category}</span>
                        </div>
                        <p
                          className={
                            viewMode === "grid"
                              ? "d-none"
                              : "mt-2 custom-text-color2"
                          }
                        >
                          {truncateContent(book.description, 200)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Library;
