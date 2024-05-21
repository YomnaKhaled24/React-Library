import { combineReducers } from "redux";
import languageReducer from "./changeLanguageReducer";


export default combineReducers({
    langR: languageReducer
})