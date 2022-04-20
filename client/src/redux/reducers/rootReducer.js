import { combineReducers } from "redux";
import { productsReducer } from "../reducers/productsReducer"

export const rootReducer = combineReducers({
  productsReducer,
})
