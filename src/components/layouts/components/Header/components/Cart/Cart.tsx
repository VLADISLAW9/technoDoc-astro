import { ShoppingCart } from "lucide-react";

import type { CartProduct } from "@/utils/store/cartStore";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Small } from "@/components/ui/typography";
import { ROUTES } from "@/utils/constants";
import {
  addToCart,
  clearCart,
  getTotalPrice,
  removeFromCart,
  useCartStore,
} from "@/utils/store/cartStore";

export const Cart = () => {
  const cart = useCartStore();

  return (
    <Popover>
      <PopoverTrigger>
        <ShoppingCart className="cursor-pointer" size={24} color="white" />
      </PopoverTrigger>
      <PopoverContent align="end" className="w-xl">
        {!cart.length && (
          <div className="flex flex-col gap-2">
            <Small>Корзина пуста</Small>
          </div>
        )}
        {!!cart.length && (
          <div className="flex flex-col gap-5">
            {cart.map((product: CartProduct) => (
              <div
                key={product.id}
                className="flex justify-between items-center"
              >
                <img className="w-13 " src={product.images[0]} />
                <Small className="line-clamp-2 w-[250px]">{product.name}</Small>
                <Small className="font-bold">{product.price}</Small>
                <div className="flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => removeFromCart(product)}
                  >
                    -
                  </Button>
                  {product.quantity}
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => addToCart(product)}
                  >
                    +
                  </Button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Small className="font-bold">Итого:</Small>
                <Small className="font-bold">{getTotalPrice()}</Small>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => clearCart()}>
                  Очистить корзину
                </Button>
                <a href={ROUTES.CREATE_ORDER}>
                  <Button>Оформить заказ</Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};
