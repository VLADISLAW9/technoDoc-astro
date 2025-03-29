import type { RestRequestConfig } from "mock-config-server";

import { DATABASE } from "mock/database";

export const getProducts: RestRequestConfig = {
  method: "get",
  path: "/products",
  routes: [
    {
      data: DATABASE.PRODUCTS,
    },
  ],
};
