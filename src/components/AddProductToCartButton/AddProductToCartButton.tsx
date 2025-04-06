import { ShoppingCart } from "lucide-react";

import type { ButtonProps } from "@/components/ui/button";

import { Button } from "@/components/ui/button";
import { addToCart, removeFromCart, useCartStore } from "@/utils/store";

interface AddProductToCartButtonProps extends ButtonProps {
  product: Product;
}

export const AddProductToCartButton = ({
  product,
  className,
  ...props
}: AddProductToCartButtonProps) => {
  const cart = useCartStore();

  const quantity = cart.find(({ id }) => id === product.id)?.quantity;

  return (
    <>
      {!quantity && (
        <Button
          className={className}
          onClick={() => addToCart(product)}
          {...props}
        >
          <ShoppingCart />В корзину
        </Button>
      )}
      {!!quantity && (
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => removeFromCart(product)}
            {...props}
          >
            -
          </Button>
          <span>{quantity}</span>
          <Button
            variant="outline"
            onClick={() => addToCart(product)}
            {...props}
          >
            +
          </Button>
        </div>
      )}
    </>
  );
};
