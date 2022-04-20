import { productsAT } from "../actionTypes/productsAT";

export function productsInitAC(payload) {
  return {
    type: productsAT.PRODUCTS_INIT,
    payload
  }
}
