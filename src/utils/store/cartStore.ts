import { useStore } from "@nanostores/react";
import { atom } from "nanostores";

import { LOCAL_STORAGE_KEYS } from "../constants";

export type CartProduct = Product & {
  quantity: number;
};

const cart = atom<CartProduct[]>([]);

export const useCartStore = () => {
  const isClient = typeof window !== "undefined";

  if (isClient) {
    const savedCart = localStorage.getItem(LOCAL_STORAGE_KEYS.CART);

    if (savedCart && cart.get().length === 0) {
      cart.set(JSON.parse(savedCart));
    }
  }

  const cartItems = useStore(cart);

  if (isClient) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.CART, JSON.stringify(cartItems));
  }

  return cartItems;
};

export const addToCart = (product: Product) => {
  const currentCart = cart.get();
  const existingProduct = currentCart.find(({ id }) => id === product.id);

  if (existingProduct) {
    cart.set(
      currentCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
    return;
  }

  cart.set([...currentCart, { ...product, quantity: 1 }]);
};

export const removeFromCart = (product: Product) => {
  const currentCart = cart.get();
  const existingProduct = currentCart.find(({ id }) => id === product.id);

  if (!existingProduct) return;

  if (existingProduct.quantity === 1) {
    cart.set(currentCart.filter(({ id }) => id !== product.id));
    return;
  }

  cart.set(
    currentCart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item,
    ),
  );
};

export const clearCart = () => cart.set([]);

export const getProductQuantity = (product: Product) => {
  const currentCart = cart.get();
  const existingProduct = currentCart.find(({ id }) => id === product.id);
  return existingProduct?.quantity ?? 0;
};

export const getTotalPrice = () => {
  const currentCart = cart.get();
  return currentCart
    .reduce(
      (acc, product) =>
        acc + Number(product.price.replace(/\D/g, "")) * product.quantity,
      0,
    )
    .toLocaleString("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    });
};
