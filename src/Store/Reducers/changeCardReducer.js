const INITIAL_VALUE = {

    cards: [] 

};



export default function cardReducer(state = INITIAL_VALUE , action)
{
    const ProductIndex = state.cards.findIndex(product => product.id === action.payload.id);

    switch(action.type)
    {
        case "ADD_TO_CARD":
            if (ProductIndex !== -1) {
                
                const updatedCards = [...state.cards];
                updatedCards[ProductIndex].quantity += 1;
                updatedCards[ProductIndex].stock -= 1;
                return {
                ...state,
                cards: updatedCards,
                };
            } else {
                
                return {
                ...state,
                cards: [...state.cards, { ...action.payload, quantity: 1, stock: action.payload.stock - 1 }],
                };
            }

        case "DELETE_FROM_CARD":
            return{
                ...state,
                cards: state.cards.filter(product => product.id !== action.payload.id) 


            }

        case "DECREASE_QUANTITY":

        if (ProductIndex !== -1) {
            const decCards = [...state.cards];
            if(decCards[ProductIndex].quantity > 1)
            {
            decCards[ProductIndex].quantity -= 1;
            decCards[ProductIndex].stock += 1;

            return{
                ...state,
                cards: decCards,
            }
            }
            else
            {
                return{
                    ...state,
                    cards:decCards
                }
            }
        }

        case "INCREASE_QUANTITY":
            if (ProductIndex !== -1) {
                
            const incCards = [...state.cards];
            if(incCards[ProductIndex].stock > 0)
            {
            incCards[ProductIndex].quantity += 1;
            incCards[ProductIndex].stock -= 1;
            return{
                ...state,
                cards: incCards,
                    
            }
           }}

        default:
            return state
    }
}
