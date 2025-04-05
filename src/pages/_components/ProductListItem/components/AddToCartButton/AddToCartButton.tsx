import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/utils/store/useCartStore";

interface AddToCartButtonProps {
  product: Product;
}

export const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const cartStore = useCartStore();

  return (
    <>
      {!cartStore.actions.getProductQuantity(product) && (
        <Button onClick={() => cartStore.actions.addToCart(product)}>
          <ShoppingCart />В корзину
        </Button>
      )}
      {!!cartStore.actions.getProductQuantity(product) && (
        <>
          <Button
            variant="outline"
            onClick={() => cartStore.actions.removeFromCart(product)}
          >
            -
          </Button>
          <span>{cartStore.actions.getProductQuantity(product)}</span>
          <Button
            variant="outline"
            onClick={() => cartStore.actions.addToCart(product)}
          >
            +
          </Button>
        </>
      )}
    </>
  );
};
