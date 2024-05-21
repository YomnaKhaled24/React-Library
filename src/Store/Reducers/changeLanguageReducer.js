
import Cookies from "js-cookie";
const lng = Cookies.get("i18next") || 'ar';

const INITIAL_VALUE = {
    lang:lng,
    
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