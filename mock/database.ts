export interface Product {
  brand: string;
  category: string;
  description: string;
  id: number;
  images: string[];
  model: string;
  name: string;
  price: string;
}

export interface Database {
  BANNERS: Banner[];
  PRODUCTS: Product[];
}

interface Banner {
  link: string;
  src: string;
}

const PRODUCTS = [
  {
    category: "phone",
    brand: "apple",
    id: 1,
    images: [
      "https://static.insales-cdn.com/r/Kbl_8Hf3XXI/rs:fit:1000:0:1/q:100/plain/images/products/1/2990/937536430/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD_%D0%B1%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_-_2024-11-24T110223.524.png@png",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-black-titanium-select-202309_SW_COLOR?wid=400&hei=400&fmt=jpeg",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-black-titanium-select-202309_SW_COLOR_2?wid=400&hei=400&fmt=jpeg",
    ],
    model: "iPhone 16 Pro Max",
    name: "Смартфон Apple iPhone 16 Pro Max 1Tb Black Titanium (Чёрный Титан)",
    price: "129 990 ₽",
    description: `  
  Apple iPhone 16 Pro Max — это смартфон премиум-класса с большим экраном и передовыми технологиями. Он оснащён мощным процессором, который обеспечивает быструю работу даже при выполнении сложных задач.
  ...
  `,
  },
  {
    category: "phone",
    brand: "samsung",
    id: 2,
    images: [
      "https://static.insales-cdn.com/r/Kbl_8Hf3XXI/rs:fit:1000:0:1/q:100/plain/images/products/1/2990/937536430/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD_%D0%B1%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_-_2024-11-24T110223.524.png@png",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-black-select-202309?wid=940&hei=1112&fmt=png-alpha",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-black-select-202309_2?wid=940&hei=1112&fmt=png-alpha",
    ],
    model: "Galaxy S24 Ultra",
    name: "Смартфон Samsung Galaxy S24 Ultra 12/512GB Titanium Black",
    price: "109 990 ₽",
    description: `
  Samsung Galaxy S24 Ultra - флагманский смартфон с экраном Dynamic AMOLED 2X 6.8", процессором Snapdragon 8 Gen 3 и камерой 200 Мп. 
  Оснащен S Pen, защитой IP68 и аккумулятором 5000 мАч с быстрой зарядкой 45W.
  `,
  },
  {
    category: "laptop",
    brand: "apple",
    id: 3,
    images: [
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671304673202",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spacegray-gallery1-202301?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1670621203113",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spacegray-gallery2-202301?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1670621203095",
    ],
    model: "MacBook Pro 16",
    name: "Ноутбук Apple MacBook Pro 16 M2 Max 32GB/1TB Space Gray",
    price: "229 990 ₽",
    description: `
  MacBook Pro 16 с чипом M2 Max обеспечивает исключительную производительность для профессиональных задач. 
  Оснащен дисплеем Liquid Retina XDR, 32 ГБ унифицированной памяти и 1 ТБ SSD.
  `,
  },
  {
    category: "laptop",
    brand: "asus",
    id: 4,
    images: [
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1633027804000",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-gallery1-201810?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1633027804000",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-gallery2-201810?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1633027804000",
    ],
    model: "ROG Zephyrus G14",
    name: "Игровой ноутбук ASUS ROG Zephyrus G14 GA402 32GB/1TB RTX 4070",
    price: "329 990 ₽",
    description: `
  Компактный игровой ноутбук с процессором AMD Ryzen 9 7940HS, видеокартой NVIDIA GeForce RTX 4070, 
  дисплеем 14" QHD+ 165Hz и подсветкой AniMe Matrix на крышке.
  `,
  },
  {
    category: "headphones",
    brand: "sony",
    id: 5,
    images: [
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-spacegray-202011?wid=940&hei=1112&fmt=png-alpha",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-spacegray-202011_1?wid=940&hei=1112&fmt=png-alpha",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-spacegray-202011_2?wid=940&hei=1112&fmt=png-alpha",
    ],
    model: "WH-1000XM5",
    name: "Наушники Sony WH-1000XM5 Black",
    price: "29 990 ₽",
    description: `
  Флагманские беспроводные наушники с шумоподавлением. Оснащены процессором HD Noise Cancelling QN1, 
  автоматической оптимизацией ANC, 30-часовым временем работы и поддержкой LDAC.
  `,
  },
  {
    category: "tablet",
    brand: "apple",
    id: 6,
    images: [
      "https://static.insales-cdn.com/r/Kbl_8Hf3XXI/rs:fit:1000:0:1/q:100/plain/images/products/1/2990/937536430/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD_%D0%B1%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_-_2024-11-24T110223.524.png@png",
      "https://static.insales-cdn.com/r/Kbl_8Hf3XXI/rs:fit:1000:0:1/q:100/plain/images/products/1/2990/937536430/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD_%D0%B1%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_-_2024-11-24T110223.524.png@png",
    ],
    model: "iPad Pro 12.9",
    name: "Планшет Apple iPad Pro 12.9 6th Gen 1TB Wi-Fi Space Gray",
    price: "90 990 ₽",
    description: `
  iPad Pro 12.9 с чипом M2 и дисплеем Liquid Retina XDR. Поддержка Apple Pencil 2 и Magic Keyboard. 
  Идеален для творческих профессионалов и мобильной работы.
  `,
  },
  {
    category: "smartwatch",
    brand: "samsung",
    id: 7,
    images: [
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDY3ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683224241054",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDY3ref_VW_PF+watch-49-titanium-ultra_VW_PF_WF_CO+watch-face-49-alpine-ultra_VW_PF_WF_CO?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683224241054",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDY3ref_VW_BACK?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683224241054",
    ],
    model: "Galaxy Watch5 Pro",
    name: "Умные часы Samsung Galaxy Watch5 Pro 45mm Titanium",
    price: "20 990 ₽",
    description: `
  Премиум-часы с защитой MIL-STD-810H, пульсометром, мониторингом ЭКГ и кровяного давления. 
  Автономность до 80 часов в режиме энергосбережения, поддержка бесконтактных платежей.
  `,
  },
  {
    category: "phone",
    brand: "xiaomi",
    id: 8,
    images: [
      "https://static.insales-cdn.com/r/Kbl_8Hf3XXI/rs:fit:1000:0:1/q:100/plain/images/products/1/2990/937536430/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD_%D0%B1%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_-_2024-11-24T110223.524.png@png",
      "https://static.insales-cdn.com/r/Kbl_8Hf3XXI/rs:fit:1000:0:1/q:100/plain/images/products/1/2990/937536430/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD_%D0%B1%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_-_2024-11-24T110223.524.png@png",
    ],
    model: "Redmi Note 12 Pro+",
    name: "Смартфон Xiaomi Redmi Note 12 Pro+ 8/256GB Midnight Black",
    price: "129 990 ₽",
    description: `
  Смартфон с AMOLED-экраном 120 Гц, камерой 200 Мп с OIS, процессором Dimensity 1080 и зарядкой 120 Вт. 
  Отличное сочетание цены и производительности.
  `,
  },
  {
    category: "TV",
    brand: "lg",
    id: 9,
    images: [
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202210?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1664896361408",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-gallery-1-202210?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1664628851177",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-gallery-2-202210?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1664628850804",
    ],
    model: "OLED C3",
    name: 'Телевизор LG OLED65C3 65" 4K Smart TV',
    price: "199 990 ₽",
    description: `
  Премиальный OLED телевизор с процессором α9 Gen6 AI, поддержкой Dolby Vision IQ и Dolby Atmos.
  Идеален для фильмов, игр и спортивных трансляций.
  `,
  },
  {
    category: "console",
    brand: "sony",
    id: 10,
    images: [
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-select-midnight-202210?wid=940&hei=1112&fmt=png-alpha",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-select-midnight-202210_1?wid=940&hei=1112&fmt=png-alpha",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-select-midnight-202210_2?wid=940&hei=1112&fmt=png-alpha",
    ],
    model: "PlayStation 5",
    name: "Игровая приставка Sony PlayStation 5 Digital Edition",
    price: "49 990 ₽",
    description: `
  Мощная игровая консоль с поддержкой 4K-графики, трассировкой лучей и SSD-накопителем.
  Включает инновационный контроллер DualSense с тактильной отдачей.
  `,
  },
  {
    category: "camera",
    brand: "canon",
    id: 11,
    images: [
      "https://static.insales-cdn.com/r/Kbl_8Hf3XXI/rs:fit:1000:0:1/q:100/plain/images/products/1/2990/937536430/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD_%D0%B1%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_-_2024-11-24T110223.524.png@png",
      "https://static.insales-cdn.com/r/Kbl_8Hf3XXI/rs:fit:1000:0:1/q:100/plain/images/products/1/2990/937536430/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD_%D0%B1%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_-_2024-11-24T110223.524.png@png",
    ],
    model: "EOS R5",
    name: "Фотоаппарат Canon EOS R5 Body",
    price: "299 990 ₽",
    description: `
  Профессиональная беззеркальная камера с 45МП сенсором, 8K-видео и стабилизацией.
  Идеальна для фото- и видеосъемки любой сложности.
  `,
  },
  {
    category: "monitor",
    brand: "samsung",
    id: 12,
    images: [
      "https://static.insales-cdn.com/r/Kbl_8Hf3XXI/rs:fit:1000:0:1/q:100/plain/images/products/1/2990/937536430/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD_%D0%B1%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_-_2024-11-24T110223.524.png@png",
    ],
    model: "Odyssey G9",
    name: 'Монитор Samsung Odyssey Neo G9 49" 240Hz',
    price: "159 990 ₽",
    description: `
  Ультраширокий игровой монитор с mini-LED подсветкой, HDR2000 и временем отклика 1мс.
  Изогнутый экран 1000R обеспечивает максимальное погружение.
  `,
  },
  {
    category: "laptop",
    brand: "asus",
    id: 13,
    images: [
      "https://static.insales-cdn.com/r/Kbl_8Hf3XXI/rs:fit:1000:0:1/q:100/plain/images/products/1/2990/937536430/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD_%D0%B1%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_-_2024-11-24T110223.524.png@png",
    ],
    model: "ROG Strix SCAR 18",
    name: "Игровой ноутбук ASUS ROG Strix SCAR 18 2024 i9-14900HX/RTX 4090",
    price: "399 990 ₽",
    description: `
  Мощный игровой ноутбук с 18" QHD+ 240Hz дисплеем, Intel Core i9-14900HX и RTX 4090.
  Оснащен механической клавиатурой и продвинутой системой охлаждения.
  `,
  },
  {
    category: "laptop",
    brand: "lg",
    id: 14,
    images: [
      "https://static.insales-cdn.com/r/Kbl_8Hf3XXI/rs:fit:1000:0:1/q:100/plain/images/products/1/2990/937536430/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD_%D0%B1%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_-_2024-11-24T110223.524.png@png",
    ],
    model: "Gram Style",
    name: "Ультрабук LG Gram Style 16Z90RS i7-1360P/32GB/1TB",
    price: "189 990 ₽",
    description: `
  Премиальный ультрабук с OLED-дисплеем, весом менее 1.3 кг и временем работы до 20 часов.
  Идеален для мобильной работы и развлечений.
  `,
  },
  {
    category: "phone",
    brand: "google",
    id: 15,
    images: [
      "https://static.insales-cdn.com/r/Kbl_8Hf3XXI/rs:fit:1000:0:1/q:100/plain/images/products/1/2990/937536430/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD_%D0%B1%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_-_2024-11-24T110223.524.png@png",
    ],
    model: "Pixel 8 Pro",
    name: "Смартфон Google Pixel 8 Pro 12/256GB Obsidian",
    price: "89 990 ₽",
    description: `
  Флагманский смартфон с чистым Android, процессором Google Tensor G3 и продвинутыми возможностями камеры.
  Оснащен LTPO OLED дисплеем и поддержкой беспроводной зарядки.
  `,
  },
] satisfies Database["PRODUCTS"];

const BANNERS = [
  {
    src: "https://static.insales-cdn.com/files/1/2307/36391171/original/Google_pixel_9.jpg",
    link: "/product/15",
  },
  {
    src: "https://static.insales-cdn.com/files/1/3735/38227607/original/galaxy_S25_black.jpg",
    link: "/product/2",
  },
  {
    src: "https://static.insales-cdn.com/files/1/7698/36388370/original/Samsung_Galaxy_2_d3e2ab88e63b4999f768d29ed6057819.png",
    link: "/product/2",
  },
  {
    src: "https://static.insales-cdn.com/files/1/3449/36392313/original/PlayStation_Nintendo__1_.jpg",
    link: "/product/10",
  },
  {
    src: "https://static.insales-cdn.com/files/1/16/36388880/original/iPad_e4ddb673b80b5e376f5ea053d9008114.png",
    link: "/product/6",
  },
  {
    src: "https://static.insales-cdn.com/files/1/49/36388913/original/Asus_ROG_Ally_992611eea0451db9dcf3eda2e6f4a40b.png",
    link: "/product/4",
  },
] satisfies Database["BANNERS"];

export const DATABASE = {
  PRODUCTS,
  BANNERS,
};
