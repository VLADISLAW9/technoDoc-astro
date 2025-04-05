import type { RestRequestConfig } from "mock-config-server";

import { DATABASE } from "mock/database";

export const getProduct: RestRequestConfig = {
  method: "get",
  path: "/products/:id",
  routes: [
    {
      data: ({ params }) => {
        const product = DATABASE.PRODUCTS.find(
          (product) => product.id === +params.id,
        );

        return product;
      },
    },
  ],
};
