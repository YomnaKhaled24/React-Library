import React, { useState, useEffect } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faHeart, faThLarge, faList } from "@fortawesome/free-solid-svg-icons"; 
import { Link } from "react-router-dom"; 
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function Library() { 
  const [books, setBooks] = useState([]); 
  const [categories, setCategories] = useState([]); 
  const [selectedCategories, setSelectedCategories] = useState([]); 
  const [viewMode, setViewMode] = useState("list"); 
  const { t , i18n } = useTranslation()
 
  // const lng = Cookies.get("i18next") || 'ar';
  const lng = useSelector((state) => state.langR.lang);
  
  // const categories = t('categories')
  // const categories = []



  useEffect(() => { 
    if(lng === 'en')
    {
      fetch("./Svenska.json") 
      .then((response) => response.json()) 
      .then((data) => setBooks(data)); 

      setCategories(["kategori1", "kategori2", "kategori3"])

    }
    else
    {
      fetch("./Arabic.json") 
      .then((response) => response.json()) 
      .then((data) => setBooks(data));

      setCategories(["فئة1", "فئة2", "فئة3"])
    }
    // console.log(books)
  }, [lng]); 
 
  const filteredBooks = selectedCategories.length === 0 
    ? books 
    : books.filter((book) => selectedCategories.includes(book.category)); 
 
  const handleCategoryChange = (category) => { 
    if (selectedCategories.includes(category)) { 
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category)); 
    } else { 
      setSelectedCategories([...selectedCategories, category]); 
    } 
  }; 

  const truncateContent = (content, maxLength) => {
    if (content.length <= maxLength) {
      return content;
    } else {
      return content.substring(0, maxLength) + "...";
    }
  };
 
  return ( 
    <div className="Library">
      <div className="container mt-2"> 
        <div className="row"> 
          <div className="col-md-3"> 
            <div className="p-3 border-right"> 
              <span>{t('filterbycategory')}</span> 
              <ul className="list-group list-group-flush rounded"> 
                <li className="list-group-item"> 
                  <h5 className="mt-1 mb-1">{t('category')}</h5> 
                  <div className="d-flex flex-column"> 
                    {categories.map((v, i) => ( 
                      <div key={i} className="form-check"> 
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          onChange={() => handleCategoryChange(v)} 
                          checked={selectedCategories.includes(v)} 
                          
                        /> 
                        <label className="form-check-label"
                        style={{
                          marginRight: lng === "ar" ? "1.2rem" : "" 
                        }}
                        >{v}</label> 
                      </div> 
                    ))} 
                  </div> 
                </li> 
              </ul> 
            </div> 
          </div> 
          <div className="col-md-9"> 
            <div className="p-3"> 
              <div className="d-flex justify-content-end align-items-center mb-3"> 
                <div> 
                  <span>{t('view')}</span> 
                  <button 
                    className={`mx-2 ${viewMode === "list" ? "active" : ""}`} 
                    onClick={() => setViewMode("list")} 
                    title="List View" 
                  > 
                    <FontAwesomeIcon icon={faList} /> 
                  </button> 
                  <button 
                    className={`mx-2 ml-2 ${ 
                      viewMode === "grid" ? "active" : "" 
                    }`} 
                    onClick={() => setViewMode("grid")} 
                    title="Grid View" 
                  > 
                    <FontAwesomeIcon icon={faThLarge} /> 
                  </button> 
                </div> 
              </div> 
              <div className={viewMode === "grid" ? "row" : ""}> 
                {filteredBooks.map((book) => ( 
                  <div 
                    key={book.ISBN} 
                    className={ 
                      viewMode === "grid" ? "col-md-3 mb-4" : "media mb-4 pb-4 border-bottom" 
                    } 
                  > 
                    <div className={viewMode === "grid" ? "card h-100" : "d-flex"}> 
                      <Link to="#" className={viewMode === "grid" ? "" : "mr-3"}> 
                        <img 
                          src={book.img} 
                          alt={book.title} 
                          className={ 
                            viewMode === "grid" ? "card-img-top" : "media-object" 
                          } 
                          style={{ 
                            width: viewMode === "grid" ? "100%" : "150px", 
                            height: viewMode === "grid" ? "17rem" : "100%",
                            marginLeft: lng === "ar" && viewMode === "list"? "3rem" : "", 
                          }} 
                        /> 
                      </Link> 
                      <div 
                        className={ 
                          viewMode ==="grid" ? "card-body" : "media-body" 
                        } 
                        style={{ marginLeft: viewMode === "grid" ? "0" : "20px" }}> 
                        <h5 
                          className={viewMode === "grid" ? "card-title" : "mt-0"} 
                        > 
                          <Link to={`/BookDetails/${book.ISBN}`}>{book.title}</Link> 
                        </h5> 
                        <div 
                          className={ 
                            viewMode === "grid" 
                              ? "" 
                              : "d-flex align-items-center" 
                          } 
                        > 
                          <span>{t('by')} </span> 
                          <strong className="ml-1 mx-2">{book.author}</strong> 
                          <span className="ml-3 mx-2"> 
                            <FontAwesomeIcon icon={faHeart} /> 
                          </span> 
                        </div> 
                        <div 
                          className={`text-secondary ${ 
                            viewMode === "grid" ? "d-none" : "mt-2" 
                          }`} 
                        > 
                          <span>Pocketbok, </span> 
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
                        <p className={viewMode === "grid" ? "d-none" : "mt-2"}> 
                          {truncateContent(book.description,200)} 
                        </p> 
                      </div> 
                    </div> 
                  </div> 
                ))} 
              </div> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div>
  ); 
} 
 
export default Library;