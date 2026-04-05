export type Language = 'en' | 'ar';

export interface Product {
  id: string;
  name: { en: string; ar: string };
  price: number;
  image: string;
  category: { en: string; ar: string };
  description: { en: string; ar: string };
  sizes: string[];
  colors: { name: { en: string; ar: string }; hex: string }[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}
