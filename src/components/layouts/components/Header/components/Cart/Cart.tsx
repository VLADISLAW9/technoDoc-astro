import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Small } from "@/components/ui/typography";
import { ROUTES } from "@/utils/constants";
import { useCartStore } from "@/utils/store/useCartStore";

export const Cart = () => {
  const cartStore = useCartStore();

  return (
    <Popover>
      <PopoverTrigger>
        <ShoppingCart className="cursor-pointer" size={24} color="white" />
      </PopoverTrigger>
      <PopoverContent align="end" className="w-xl">
        {!cartStore.state.cart.length && (
          <div className="flex flex-col gap-2">
            <Small>Корзина пуста</Small>
          </div>
        )}
        {!!cartStore.state.cart.length && (
          <div className="flex flex-col gap-5">
            {cartStore.state.cart.map((product) => (
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
                    onClick={() => cartStore.actions.removeFromCart(product)}
                  >
                    -
                  </Button>
                  {cartStore.actions.getProductQuantity(product)}

                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => cartStore.actions.addToCart(product)}
                  >
                    +
                  </Button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Small className="font-bold">Итого:</Small>
                <Small className="font-bold">
                  {cartStore.state.totalPrice}
                </Small>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => cartStore.actions.clearCart()}
                >
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
