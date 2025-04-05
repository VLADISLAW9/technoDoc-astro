import { getBanners } from "./requests/banners/get";
import { getProducts } from "./requests/products/get";
import { getProduct } from "./requests/products/{id}/get";

export const requests = new Set([getProducts, getBanners, getProduct]);
