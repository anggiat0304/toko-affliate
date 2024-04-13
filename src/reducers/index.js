import { combineReducers } from "redux";
import AuthenticationReducer from "./AuthenticationReducer";
import ProductRecucer from "./ProductReducer";

export default combineReducers({
    auth :  AuthenticationReducer,
    product : ProductRecucer
 });