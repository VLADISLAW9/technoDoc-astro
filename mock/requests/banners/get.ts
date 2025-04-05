import type { RestRequestConfig } from "mock-config-server";

import { DATABASE } from "mock/database";

export const getBanners: RestRequestConfig = {
  method: "get",
  path: "/banners",
  routes: [
    {
      data: DATABASE.BANNERS,
    },
  ],
};
