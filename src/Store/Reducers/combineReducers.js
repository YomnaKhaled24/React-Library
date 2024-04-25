import { combineReducers } from "redux";
import languageReducer from "./changLangReducer";
import themReducer from "./changeThemReducer";
import wishlistReducer from "./changeWishlistReducer";
import cardReducer from "./changeCardReducer";


export default combineReducers({
    langR: languageReducer,
    themeR: themReducer,
    wishlistR: wishlistReducer,
    cardR: cardReducer
})