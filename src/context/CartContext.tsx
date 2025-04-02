
import { createContext, Dispatch, SetStateAction } from "react";
import { Product } from "../types";

interface CartContextType {
  carrito: Product[];
  setCarrito: Dispatch<SetStateAction<Product[]>>;
}

export const CartContext = createContext<CartContextType>({
  carrito: [],
  setCarrito: () => {},
});


 