import { useDispatch, useSelector } from "react-redux";
import MyTitle from "../Components/mytitle";
import { changeWishlistAction, deleteFromWishlistAction } from "../Store/Actions/changeWishlistAction";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';


function Favorites()
{
    const myWishlist = useSelector((state) => state.wishlistR.cartItems);

    const dispatch = useDispatch()
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        const fetchMovies = async () => {
            const promises = myWishlist.map(id =>
                axios.get(`https://dummyjson.com/products/${id}`)
            );

            try {
                const responses = await Promise.all(promises);
                const moviesData = responses.map(res => res.data);
                setMovies(moviesData);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, [myWishlist]);


    const deleteFromWishlist = (movieId)=>{

       dispatch(deleteFromWishlistAction(movieId))

        
      }
       
      const truncateTitle = (title, maxLength) => {
        if (title.length <= maxLength) {
          return title;
        } else {
          return title.substring(0, maxLength) + "...";
        }
      };


    return (
        <section className="container mt-5">
            <div className="d-flex justify-content-center">

            {/* <svg className ="me-2 align-self-center" xmlns="http://www.w3.org/2000/svg" fill="red" width="35" height="40" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/>
            </svg> */}
            <MyTitle color="danger" content="Favorites"/>

            <svg className ="ms-2 align-self-center" xmlns="http://www.w3.org/2000/svg" fill="red" width="35" height="40" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/>
            </svg>
            </div>

            {myWishlist.length === 0 ?
            <div>
             {/* <h1 className="text-center text-danger mt-4">There are no Movies in Favourites</h1> */}
             <div className=" text-center ">
                <img src="nothing.gif"  className="" />
             </div>
             </div>
            :
            <div className="d-flex flex-wrap p-3 justify-content-between mt-4 ">
        
            {movies.map(movie => (
                            
                                <div className="" key={movie.id}>
                                <Card className=" mb-4 p-2 mx-3 " title={movie.title}>
                                    <Card.Img  variant="top" className="rounded mx-auto" src={`${movie.images[0]}`} style={{height:`13rem`, width:`13rem`}}/>
                                    <Card.Body>
                                    <Card.Title className="text-center">{truncateTitle(movie.title, 25)}</Card.Title>

                                    
                                    </Card.Body>

                                    
                                    <Button className="btn btn-dark" >
                                      <a className="btn text-light fw-bold" onClick={() => deleteFromWishlist(movie.id)}>Remove From Favorites <span  style={{fontSize:'1.3rem',color:'red'}}>&hearts;</span>
                                      </a>
                                      </Button>
                                     
                                </Card>
                                </div>
                        ))}

        </div>
        }


        </section>

   
)
}


export default Favorites;