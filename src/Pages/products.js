import { useEffect, useState } from "react";
import MyTitle from "../Components/mytitle.js";
import axios from "axios"
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom"
import Pagination from 'react-bootstrap/Pagination';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import { useDispatch, useSelector } from "react-redux";
import { changeWishlistAction, deleteFromWishlistAction } from "../Store/Actions/changeWishlistAction.js";
import Header from "../Components/header.js";
import Footer from "../Components/footer.js";



function Movies()
{

    const [movies, setMovies] = useState([]);
    const[categories,setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [limit, setLimit] = useState(16);
    const [skip, setSkip] = useState(0);
    const [q, setQ] = useState("");
    const [selectedCategory,setSelectedCategory] = useState("");
    


    const handlePageChange = (page) => {
      const newSkip = (page - 1) * limit;
      setSkip(newSkip);
      setCurrentPage(page);
    };


      useEffect(()=>{

        axios.get(`https://dummyjson.com/products/categories`)
          .then(res =>{ 
            setCategories(res.data)
              // console.log(res.data)
              
          })
          .catch(err => console.log(err))


      },[])
      
    useEffect(()=>{
        //call Api with axios method
        console.log(limit,skip);
        axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
        .then(res =>{ 
            setMovies(res.data.products)
            // console.log(res)
            setTotalItems(res.data.total)
        })
        .catch(err => console.log(err))

    },[limit,skip])


    

    useEffect(()=>{

      axios.get(`https://dummyjson.com/products/category/${selectedCategory}`)
        .then(res =>{ 
          if(res.data.total !== 0)
          {
            setMovies(res.data.products)
          }
            //  console.log(res.data.products)
            
        })
        .catch(err => console.log(err))
  
  
    },[selectedCategory])

    useEffect(()=>{

      axios.get(`https://dummyjson.com/products/search?q=${q}`)
        .then(res =>{ 
          if(res.data.total !== 0)
          {
            setMovies(res.data.products)
          }
             
            //  console.log(res.data.products)
            
        })
        .catch(err => console.log(err))
    },[q])

    // console.log(q)

      const myWishlist = useSelector((state) => state.wishlistR.cartItems);

      // console.log(myWishlist);
      const dispatch = useDispatch()
      const changeWishlist = (movieId)=>{

        dispatch(changeWishlistAction(movieId))

        // setFavoriteMovies([...favoriteMovies, movieId]);
      }

      const deleteWishlist = (productID)=>{
        dispatch(deleteFromWishlistAction(productID))
      }

      const truncateTitle = (title, maxLength) => {
        if (title.length <= maxLength) {
          return title;
        } else {
          return title.substring(0, maxLength) + "...";
        }
      };
       


    return (
      <>
      <Header/>
      <section className="container d-flex justify-content-center justify-content-between">
      <div className="ms-4">

      <span className="fw-bold">Select Category </span>
          <label htmlFor="select_option">
            
          <select className="form-select " 
            aria-label="Select option"
            name="select_option"
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)} 
          >
            {categories.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
          </label>
      </div>
      <div className="search-wrapper me-4">
      <span className="sr-only fw-bold">Search</span>
                        <label htmlFor="search-form">
                        

                            <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="search-input form-control"
                                placeholder="Search for products"
                                value={q}
                                
                                onChange={(e) => setQ(e.target.value)}
                            />
                            {/* <span className="sr-only">Search countries here</span> */}
                        </label>
                    </div>

      </section>
    <section className="container">
        
        
        { movies.length === 0 ? 
        <div className="d-flex justify-content-center">
          <img src="loading.gif"/>
            
            
            </div>:
            <>
        <div className="d-flex flex-wrap p-3 justify-content-between mt-2">
        
            {movies.map(movie => (
                            // <li >{movie.title}</li>
                                <div className="" key={movie.id}>
                                  
                                <Card className=" mb-4 p-1 mx-3 shadow-sm " title={movie.title} style={{ width:`14rem`,height:`30rem`,backgroundColor:``}}>
                                  <div className="">

                                  <div className="text-end p-3"> 
                       
                                   {myWishlist.includes(movie.id) ? 
                                   <svg className ="" onClick={() => deleteWishlist(movie.id)} xmlns="http://www.w3.org/2000/svg" fill="red" width="24" height="24" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd">
                                   <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/>
                                   </svg>

                                   :<svg className="" onClick={() => changeWishlist(movie.id)} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                   <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/>
                                   </svg>}
                                    
                                    
                                  </div>
                                  </div>
                                    <Card.Img variant="top" className="rounded mx-auto" src={`${movie.images[0]}`} style={{height:`13rem`, width:`13rem`}}/>
                                    <Card.Body>
                                    {/* <Card.Title className="text-center">{movie.title}</Card.Title> */}
                                    <Card.Title className="text-center">{truncateTitle(movie.title, 20)}</Card.Title>

                                    {/* <Card.Text style={{ maxHeight: showFullText ? 'none' : '5.8em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {movie.overview}
                                    </Card.Text>
                                    {movie.overview.length > 200 && (
                                        <Button variant="link" onClick={toggleText}>
                                            {showFullText ? 'See less' : 'See more'}
                                        </Button>)
                                        } */}
                                    </Card.Body>

                                    <div className="d-flex justify-content-between">
                                    <div className="  d-flex ms-2"  >
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" width="28" height="28" viewBox="0 0 24 24">
                                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                                    </svg>

                                    <span className="ms-1 fw-bold pt-1">{movie.rating}</span>
                                    
                                  </div>
                                    <p className="text-center fw-bold pt-1 fs-5.5 me-3">{movie.price}$</p>
                                    </div>

                                    <Button className="btn btn-dark mb-3">
                                        <Link className="btn text-light" to={`/ProductDetails/${movie.id}`}>More Details
                                        </Link>
                                    </Button>
                                    

                                    
                                </Card>
                                </div>
                        ))}

        </div>
        
        <div className="d-flex justify-content-center">
       
        <Pagination size="lg">
              <Pagination.Item className="fw-bold fs-5 p-3 " onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                Previous
              </Pagination.Item>
              <Pagination.Item className="fw-bold fs-5 p-3" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === Math.ceil(totalItems / limit)}>
                Next
              </Pagination.Item>
          </Pagination>

        </div>
        </>
}
        
    </section>

    <Footer/>

    </>
    
    )
}


export default Movies