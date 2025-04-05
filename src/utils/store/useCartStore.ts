import { useLocalStorage } from "@mantine/hooks";

export const useCartStore = () => {
  const [cart, setCart] = useLocalStorage<(Product & { quantity: number })[]>({
    key: "cart",
    defaultValue: [],
  });

  const totalPrice = cart
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

  const getProductQuantity = (product: Product) => {
    const existingProduct = cart.find(({ id }) => id === product.id);
    return existingProduct?.quantity ?? 0;
  };

  const clearCart = () => setCart([]);

  const addToCart = (product: Product) => {
    const existingProduct = cart.find(({ id }) => id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
      return;
    }

    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (product: Product) => {
    const existingProduct = cart.find(({ id }) => id === product.id);

    if (!existingProduct) return;

    if (existingProduct.quantity === 1) {
      setCart(cart.filter(({ id }) => id !== product.id));
      return;
    }

    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  return {
    state: {
      cart,
      totalPrice,
    },
    actions: { clearCart, addToCart, removeFromCart, getProductQuantity },
  };
};
