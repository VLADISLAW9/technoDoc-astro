import { useLocalStorage } from "@mantine/hooks";

import { LOCAL_STORAGE_KEYS } from "@/utils/constanst";

export const useCart = () => {
  const [cart, setCart] = useLocalStorage<Product[]>({
    key: LOCAL_STORAGE_KEYS.CART,
    defaultValue: [],
  });

  const totalPrice = cart.reduce((acc, product) => acc + +product.price, 0);

  const getProductQuantity = (product: Product) =>
    cart.filter(({ id }) => id === product.id).length ?? 0;

  const clearCart = () => setCart([]);

  const addToCart = (product: Product) => setCart([...cart, product]);

  const removeFromCart = (product: Product) =>
    setCart(cart.filter(({ id }) => id !== product.id));

  return {
    state: {
      cart,
      totalPrice,
    },
    actions: { clearCart, addToCart, removeFromCart, getProductQuantity },
  };
};
