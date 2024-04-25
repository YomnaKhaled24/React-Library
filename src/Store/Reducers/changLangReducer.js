//This file can have more reducers
//It can be many reducers in the project


const INITIAL_VALUE = {
    lang:"En",
    
}

export default function languageReducer(state = INITIAL_VALUE , action)
{
    switch(action.type)
    {
        case "CHANG_LANG":
            return{
                ...state,
                lang: action.payload
            }
            
        default:
            return state
    }
}