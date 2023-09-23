"use client";
import { toast } from "@/components/ui/use-toast";
import { useLocalState } from "@/hooks/useLocalStorage";
import { PlanProps, ProductProps, ProgramProps } from "@/types/products";
import React, { createContext, ReactNode, useContext, useState } from "react";

type TcartItem = ProductProps;

interface ICartContext {
  cart: TcartItem[];
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
    // console.log(product);

    if (cart.find((cartItem: { id: string }) => cartItem.id === product.id))
      return;
    setCart((prevState: TcartItem[]) => [...prevState, product]);
    toast({
      title: "Item added to cart",
    });
  };

  const removeItem = (productId: string) => {
    setCart((prevState: TcartItem[]) =>
      prevState.filter((item: TcartItem) => item.id !== productId)
    );
    toast({
      title: "Item removed from cart",
    });
  };

  const resetCart = () => {
    setCart([]);
    toast({
      title: "Cart items reset",
    });
  };

  const isAdded = (productId: string) => {
    return cart?.some((item: { id: string }) => item.id === productId);
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
