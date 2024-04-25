import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min.js";
import { useEffect, useState } from "react";
import MyTitle from "../Components/mytitle.js";
import axios from "axios"
import { Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { addToCardAction } from "../Store/Actions/changeCardAction.js";
import { Carousel } from 'react-bootstrap';
import StarRating from "../Components/rating.js";
import { changeLanguageAction } from "../Store/Actions/changeLangAction.js";
import { changeWishlistAction } from "../Store/Actions/changeWishlistAction.js";


function ProductDetails(){

    const param = useParams();
    const id = param.id

    const myWishlist = useSelector((state) => state.wishlistR.cartItems);


    const cards = useSelector((state) => state.cardR.cards);

    
    const [product, setProducts] = useState(null);
    // const [finalPrice, setfinalPrice] = useState(0)

    

    useEffect(()=>{
        //call Api with axios method
        axios.get(`https://dummyjson.com/products/${id}`)
        .then(res => setProducts(res.data))
        .catch(err => console.log(err))

        

    },[id])
    // console.log(movie)
// console.log(movie.id)

// let calculatedFinalPrice = (product.price ?product.price :0) * ((product.discountPercentage ? product.discountPercentage:0) / 100.0);
//         setfinalPrice(calculatedFinalPrice)

const history = useHistory();
const dispatch = useDispatch()

const addToCart = (product)=>{

  if(JSON.parse(localStorage.getItem('signed')) === 'true')
  {
    if(cards.includes(product))
    {
      alert(`This product already added to card 
      if you want to increase quantity go to cards page.`)
      history.push("/cards");

    }
    else
    {
      dispatch(addToCardAction(product))
      // alert("You have added this product to cart successfully.")
    }
    

  }
  else
  {
    alert("You have signed in first to can add to card.")
    history.push("/login");
  }

  

  
}

const changeWishlist = (productId)=>{

  dispatch(changeWishlistAction(productId))

  // setFavoriteMovies([...favoriteMovies, movieId]);
}



return (
  <div>
  {product != null ? (
    <section className="row mx-auto mt-5 mb-5" >

      <div className="col-3  offset-2 ">
      <Carousel className="rounded">
      {product.images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 rounded"
            src={image}
            alt={`Slide ${index}`}
            style={{height:`20rem`}}
          />
          <Carousel.Caption>
            {/* <h3>Slide {index}</h3>
            <p>Description of Slide {index}</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
      </Carousel>
      </div>

      <div className="col-5 mb-5">
        
        <h1>{`${product.title}`}</h1>

        <p className="">{`${product.description}`}{`${product.description}`}</p>

        <h2>${`${product.price}`}</h2>
          
        <StarRating rating={`${product.rating}`}/>

        <div className="d-flex justify-content-around mt-5">
          

        {myWishlist.includes(product.id) ? 
              <button className="btn btn-light btn-outline-danger fs-5"  disabled="true">
              Add To Favorites <span className=""  style={{fontSize:'1.2rem',color:'red'}}>&hearts;</span>
            </button>

              :<button className="btn btn-light btn-outline-danger fs-5"  onClick={() => changeWishlist(product.id)}>
               Add To Favorites <span className=""  style={{fontSize:'1.2rem',color:'red'}}>&hearts;</span>
             </button>}
          {/* <button className="btn btn-light btn-outline-danger fs-5">
            Add To Favorites <span  style={{fontSize:'1.3rem',color:'red'}}>&hearts;</span>
          </button> */}
          <button className="btn btn-dark btn-lg" onClick={() => addToCart(product)}>
            Add To Card
          </button>
        </div>
      </div>

    </section>
    
  ) : (
    <div className="d-flex justify-content-center">
          <img src="loading.gif"/>
            
            
            </div>
  )}
  
  </div>

)

}
export default ProductDetails