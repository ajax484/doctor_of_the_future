"use client";
import { planCardProps } from "@/components/ui/planCard";
import { ProductCardProps } from "@/components/ui/productCard";
import { ProgramCardProps } from "@/components/ui/programCard";
import { useLocalState } from "@/hooks/useLocalStorage";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface ICartContext {
  cart: planCardProps[] | ProductCardProps[] | ProgramCardProps[];
  cartVisible: boolean;
  showCart: () => void;
  hideCart: () => void;
  addItem: (product: any) => void;
  removeItem: (productId: string) => void;
  resetCart: () => void;
  isAdded: (productId: string) => boolean;
}

const CartContext = createContext<ICartContext>({
  cart: [],
  cartVisible: false,
  showCart() {},
  hideCart() {},
  addItem() {},
  removeItem() {},
  resetCart() {},
  isAdded() {
    return false;
  },
});

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useLocalState({
    stateKey: "cart",
    defaultValue: [],
  });

  const [cartVisible, setShowCart] = useState<boolean>(false);

  const showCart = () => setShowCart(true);

  const hideCart = () => setShowCart(false);

  const addItem = (product: any) => {
    console.log(product);
    setCart((prevState: any[]) => [...prevState, product]);
  };

  const removeItem = (productId: string) => {
    setCart((prevState: any[]) =>
      prevState.filter((item: { id: string }) => item.id !== productId)
    );
  };

  const resetCart = () => {
    setCart([]);
  };

  const isAdded = (productId: string) => {
    return cart?.some((item: { slug: string }) => item.slug === productId);
  };

  const values: ICartContext = {
    cart,
    cartVisible,
    hideCart,
    showCart,
    addItem,
    removeItem,
    resetCart,
    isAdded,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);

export default CartContextProvider;
