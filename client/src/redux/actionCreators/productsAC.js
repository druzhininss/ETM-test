import { productsAT } from "../actionTypes/productsAT";

export function productsInitAC() {
  return {
    type: productsAT.PRODUCTS_INIT
  }
}

export function productsFilterByBrand(payload) {
  return {
    type: productsAT.PRODUCTS_FILTER_BY_BRAND,
    payload
  }
}
