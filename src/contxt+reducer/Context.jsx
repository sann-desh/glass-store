import { createContext, useContext, useReducer } from "react";
import storeReducer, { initialState } from "./reducer";

export const storeContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  const addToBasket = (product) => {
    const updatedProducts = state.products;
    updatedProducts.push(product);

    dispatch({
      type: "add",
      payload: updatedProducts,
    });

    calculateTotal(updatedProducts);
  };

  const removeFromBasket = (product) => {
    const updatedProducts = state.products.filter(
      (current) => current.name != product.name
    );

    dispatch({
      type: "remove",
      payload: updatedProducts,
    });
    calculateTotal(updatedProducts);
  };

  const calculateTotal = (products) => {
    let total = 0;
    products.forEach((element) => {
      total += element.price;
    });
    dispatch({
      type: "calculateTotal",
      payload: total,
    });
  };

  const value = {
    products: state.products,
    total: state.total,
    addToBasket,
    removeFromBasket,
  };

  return (
    <storeContext.Provider value={value}>{children}</storeContext.Provider>
  );
};
