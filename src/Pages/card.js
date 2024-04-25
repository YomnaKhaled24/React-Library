import MyTitle from "../Components/mytitle.js";
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux"
import { decreaseQuantityAction, deleteFromCardAction, increaseQuantityAction } from "../Store/Actions/changeCardAction.js";


function Cards(){
    const cards = useSelector((state) => state.cardR.cards)

    const dispatch = useDispatch()

    const deleteCard = (card)=>{

        dispatch(deleteFromCardAction(card))

    }

    const decreaseQuantity = (card)=>{

        dispatch(decreaseQuantityAction(card))

    }

    const increaseQuantity = (card)=>{

        dispatch(increaseQuantityAction(card))
        
    }



return <>

<div className="mt-5 d-flex justify-content-center">

<svg xmlns="http://www.w3.org/2000/svg"  width="50" height="50" viewBox="0 0 24 24">
    <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/>
</svg>
<MyTitle color="dark" content="Shopping Cart" />

</div>
{cards.length === 0?
    <div>
             {/* <h1 className="text-center text-danger mt-4">There are no Movies in Favourites</h1> */}
             <div className=" text-center ">
                <img src="nothing.gif"  className="" />
             </div>
             </div>

:
<Table striped bordered hover className="mt-5 container text-center align-middle border-dark " >
      <thead>
        <tr>
          <th>Product Image</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody className="my-auto">
      {cards.map((card, index) => (
                        <tr key={index}>
                            <td><img src={`${card.images[0]}`} style={{width:`10rem`,height:`8rem`}}/></td>
                            <td>{card.title}</td>
                            <td className="">
                                <div className="d-flex justify-content-evenly">
                                <button className="btn btn-secondary fw-bolder rounded-circle" onClick={()=>increaseQuantity(card)}>+</button>
                                 {card.quantity}
                                 <button className="btn btn-secondary fw-bolder rounded-circle " onClick={()=>decreaseQuantity(card)}>-</button>
                                </div>
                                 
                                 </td>
                            <td>{card.stock}</td>
                            <td>{card.price * card.quantity}$</td>
                            <td><button className="btn btn-danger" onClick={()=>deleteCard(card)}>Remove</button></td> 
                        </tr>
                    ))}
        
      </tbody>
    </Table>


                }
</>
}
export default Cards