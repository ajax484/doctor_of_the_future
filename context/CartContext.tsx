"use client";
import { useLocalState } from "@/hooks/useLocalStorage";
import React, { createContext, ReactNode, useContext } from "react";

interface ICartContext {
  cart: any[];
  addItem: (product: any) => void;
  removeItem: (productId: string) => void;
  resetItems: () => void;
  isAdded: (productId: string) => boolean;
}

const CartContext = createContext<ICartContext>({
  cart: [],
  addItem() {},
  removeItem() {},
  resetItems() {},
  isAdded() {
    return false;
  },
});

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useLocalState({
    stateKey: "cart",
    defaultValue: [],
  });

  const addItem = (product: any) => {
    console.log(product);
    setCart((prevState: any[]) => [...prevState, product]);
  };

  const removeItem = (productId: string) => {
    setCart((prevState: any[]) =>
      prevState.filter((item: { id: string }) => item.id !== productId)
    );
  };

  const resetItems = () => {
    setCart([]);
  };

  const isAdded = (productId: string) => {
    return cart.some((item: { slug: string }) => item.slug === productId);
  };

  const values: ICartContext = {
    cart,
    addItem,
    removeItem,
    resetItems,
    isAdded,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);

export default CartContextProvider;
