import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Lead,
  Small,
} from "@/components/ui/typography";

type ProductListItemProps = Product;

export const ProductListItem = ({
  name,
  price,
  images,
}: ProductListItemProps) => (
  <li className="rounded-3xl p-5 flex flex-col justify-between gap-3 hover:shadow-2xl">
    <img alt={name} className="w-full" src={images[0]} />
    <Small>{name}</Small>
    <div className="flex items-center justify-between gap-2">
      <Lead>{price}</Lead>
      <Button>
        <ShoppingCart />В корзину
      </Button>
    </div>
  </li>
);
