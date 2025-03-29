export interface Database {
  PRODUCTS: Product[];
}

const PRODUCTS = [
  {
    category: "phone",
    brand: "apple",
    id: 1,
    images: [
      "https://static.insales-cdn.com/images/products/1/8190/908550142/1.jpeg",
      "https://static.insales-cdn.com/images/products/1/8189/908550141/2.jpeg",
      "https://static.insales-cdn.com/images/products/1/8188/908550140/3.jpeg",
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
      "https://static.insales-cdn.com/images/products/1/8190/908550142/1.jpeg",
      "https://static.insales-cdn.com/images/products/1/8189/908550141/2.jpeg",
      "https://static.insales-cdn.com/images/products/1/8188/908550140/3.jpeg",
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
      "https://static.insales-cdn.com/images/products/1/8190/908550142/1.jpeg",
      "https://static.insales-cdn.com/images/products/1/8189/908550141/2.jpeg",
      "https://static.insales-cdn.com/images/products/1/8188/908550140/3.jpeg",
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
      "https://static.insales-cdn.com/images/products/1/8190/908550142/1.jpeg",
      "https://static.insales-cdn.com/images/products/1/8189/908550141/2.jpeg",
      "https://static.insales-cdn.com/images/products/1/8188/908550140/3.jpeg",
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
      "https://static.insales-cdn.com/images/products/1/8190/908550142/1.jpeg",
      "https://static.insales-cdn.com/images/products/1/8189/908550141/2.jpeg",
      "https://static.insales-cdn.com/images/products/1/8188/908550140/3.jpeg",
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
      "https://static.insales-cdn.com/images/products/1/8190/908550142/1.jpeg",
      "https://static.insales-cdn.com/images/products/1/8189/908550141/2.jpeg",
      "https://static.insales-cdn.com/images/products/1/8188/908550140/3.jpeg",
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
      "https://static.insales-cdn.com/images/products/1/8190/908550142/1.jpeg",
      "https://static.insales-cdn.com/images/products/1/8189/908550141/2.jpeg",
      "https://static.insales-cdn.com/images/products/1/8188/908550140/3.jpeg",
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
      "https://static.insales-cdn.com/images/products/1/8190/908550142/1.jpeg",
      "https://static.insales-cdn.com/images/products/1/8189/908550141/2.jpeg",
      "https://static.insales-cdn.com/images/products/1/8188/908550140/3.jpeg",
    ],
    model: "Redmi Note 12 Pro+",
    name: "Смартфон Xiaomi Redmi Note 12 Pro+ 8/256GB Midnight Black",
    price: "129 990 ₽",
    description: `
  Смартфон с AMOLED-экраном 120 Гц, камерой 200 Мп с OIS, процессором Dimensity 1080 и зарядкой 120 Вт. 
  Отличное сочетание цены и производительности.
  `,
  },
] satisfies Database["PRODUCTS"];

export const DATABASE: Database = {
  PRODUCTS,
};
