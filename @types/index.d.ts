interface BaseResponse<DATA> {
  data: DATA;
}

type Brand = "apple" | "asus" | "google" | "samsung" | "sony" | "xiaomi";
type Category = "headphones" | "laptop" | "phone" | "smartwatch" | "tablet";

interface Product {
  brand: Brand;
  category: Category;
  description: string;
  id: number;
  images: string[];
  model: string;
  name: string;
  price: string;
}
