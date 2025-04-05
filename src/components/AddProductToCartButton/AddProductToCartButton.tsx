import { ShoppingCart } from "lucide-react";

import type { ButtonProps } from "@/components/ui/button";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/utils/store/useCartStore";

interface AddProductToCartButtonProps extends ButtonProps {
  product: Product;
}

export const AddProductToCartButton = ({
  product,
  className,
  ...props
}: AddProductToCartButtonProps) => {
  const cartStore = useCartStore();

  return (
    <>
      {!cartStore.actions.getProductQuantity(product) && (
        <Button
          className={className}
          onClick={() => cartStore.actions.addToCart(product)}
          {...props}
        >
          <ShoppingCart />В корзину
        </Button>
      )}
      {!!cartStore.actions.getProductQuantity(product) && (
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => cartStore.actions.removeFromCart(product)}
            {...props}
          >
            -
          </Button>
          <span>{cartStore.actions.getProductQuantity(product)}</span>
          <Button
            variant="outline"
            onClick={() => cartStore.actions.addToCart(product)}
            {...props}
          >
            +
          </Button>
        </div>
      )}
    </>
  );
};
