import { AddProductToCartButton } from "@/components";
import { Small } from "@/components/ui/typography";
import { useCartStore } from "@/utils/store";

export const CartProductsSection = () => {
  const cart = useCartStore();

  return (
    <div>
      {cart.map((product) => (
        <div key={product.id} className="flex gap-2">
          <img
            alt={product.name}
            className="w-30 h-30 object-cover"
            src={product.images[0]}
          />
          <div className="flex flex-col gap-2">
            <div className=" ">{product.name}</div>
            <Small className="font-bold">{product.price}</Small>
            <AddProductToCartButton product={product} />
          </div>
        </div>
      ))}
    </div>
  );
};
