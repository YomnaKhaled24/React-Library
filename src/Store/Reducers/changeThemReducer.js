
const INITIAL_VALUE = {
    theme:"Light",
    
}

export default function themReducer(state = INITIAL_VALUE , action)
{
    switch(action.type)
    {
        case "CHANG_THEM":
            return{
                ...state,
                theme: action.payload
            }
            
        default:
            return state
    }
}