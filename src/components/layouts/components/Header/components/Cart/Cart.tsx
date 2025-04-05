import { Minus, Plus, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useCart } from "./hooks";

export const Cart = () => {
  const { state, actions } = useCart();

  return (
    <Popover>
      <PopoverTrigger>
        <ShoppingCart className="cursor-pointer" size={24} color="white" />
      </PopoverTrigger>
      <PopoverContent align="end" className="w-96">
        {!state.cart.length && (
          <div className="flex flex-col gap-2">
            <p>Корзина пуста</p>
          </div>
        )}
        {!!state.cart.length && (
          <div className="flex flex-col gap-2">
            {state.cart.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center gap-2"
              >
                <img className="w-10 h-10" src={product.images[0]} />
                <p>{product.name}</p>
                <p>{product.price}</p>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="outline">
                    <Minus
                      className="cursor-pointer"
                      size={24}
                      color="white"
                      onClick={() => actions.removeFromCart(product)}
                    />
                  </Button>
                  {actions.getProductQuantity(product)}
                  <Button size="icon" variant="outline">
                    <Plus
                      className="cursor-pointer"
                      size={24}
                      color="white"
                      onClick={() => actions.addToCart(product)}
                    />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};
