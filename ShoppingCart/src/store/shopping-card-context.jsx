import { createContext } from "react";

// Starts with a capital letter bc it's object that contains a React component
export const CartContext = createContext({
  items: [],
  
  // doesn't actually get used, but helps with autocompletion
  addItemToCart: () => {}, 
  updateItemQuantity: ()=> {},
});

