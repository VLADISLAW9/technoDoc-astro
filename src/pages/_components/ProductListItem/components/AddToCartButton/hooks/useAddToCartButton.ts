import { useLocalStorage } from "@mantine/hooks";

type UseAddToCartButtonParams = Product;

export const useAddToCartButton = (product: UseAddToCartButtonParams) => {
  const [cart, setCart] = useLocalStorage<Product[]>({
    key: "cart",
    defaultValue: [],
  });

  const addToCart = () => setCart([...cart, product]);

  const removeFromCart = () => {
    const productIndex = cart.findIndex((p) => p.id === product.id);

    if (productIndex !== -1) {
      const newCart = [...cart];
      newCart.splice(productIndex, 1);
      setCart(newCart);
    }
  };

  return {
    state: {
      cart,
      productQuantity: cart.filter((p) => p.id === product.id).length ?? 0,
    },
    actions: { addToCart, removeFromCart },
  };
};
