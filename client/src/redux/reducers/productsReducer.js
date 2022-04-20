import { productsAT } from '../actionTypes/productsAT';
import { productsData } from "../../data/data";

const initialState = { products: [], productsOrigin: [] };

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {

    case productsAT.PRODUCTS_INIT: {
      return {
        ...state,
        products: productsData,
        productsOrigin: productsData,
      }
    }

    case productsAT.PRODUCTS_FILTER_BY_BRAND: {
      const productsCopy = [...state.products];
      const productsOriginCopy = [...state.productsOrigin];
      const userBrand = action.payload;

      const filteredProducts = productsCopy.filter((product) => {
        const productName = product.vendor.toLowerCase();
        const userBrandName = userBrand.toLowerCase();
        const productNameShorted = productName.slice(0, userBrand.length);

        if (!userBrandName.length || userBrandName.length > productName.length) {
          return false;
        } else if (productNameShorted === userBrand) {
          return true;
        } else {
          return false;
        };
      });
      return {
        ...state,
        products: filteredProducts.length ? filteredProducts : productsOriginCopy
      }
    }

    default: {
      return state;
    }
  }
}
