interface BaseResponse<DATA> {
  data: DATA;
}

type Brand =
  | "apple"
  | "asus"
  | "canon"
  | "google"
  | "lg"
  | "samsung"
  | "sony"
  | "xiaomi";
type Category =
  | "camera"
  | "console"
  | "headphones"
  | "laptop"
  | "monitor"
  | "phone"
  | "smartwatch"
  | "tablet"
  | "TV";

interface Banner {
  link: string;
  src: string;
}

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
