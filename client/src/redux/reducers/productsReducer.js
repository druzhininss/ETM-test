import { productsAT } from '../actionTypes/productsAT';
import { productsData } from "../../data/data";

const initialState = { products: [] };

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {

    case productsAT.PRODUCTS_INIT: {
      return {
        ...state,
        products: productsData,
      }
    }


    default: {
      return state;
    }
  }
}
