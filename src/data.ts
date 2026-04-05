import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: { en: 'The Signature Silk Crepe Abaya', ar: 'عباية كريب الحرير الأصلية' },
    price: 1250,
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1000&auto=format&fit=crop',
    category: { en: 'Occasion Wear', ar: 'ملابس المناسبات' },
    description: {
      en: 'A masterpiece of elegance, crafted from the finest Japanese silk crepe. Features a minimalist silhouette with subtle hand-stitched detailing on the cuffs.',
      ar: 'تحفة فنية من الأناقة، مصنوعة من أجود أنواع كريب الحرير الياباني. تتميز بتصميم بسيط مع تفاصيل مخيطة يدوياً على الأكمام.'
    },
    sizes: ['52', '54', '56', '58', '60'],
    colors: [
      { name: { en: 'Matte Black', ar: 'أسود مطفي' }, hex: '#0A0A0A' },
      { name: { en: 'Deep Navy', ar: 'كحلي غامق' }, hex: '#000080' }
    ]
  },
  {
    id: '2',
    name: { en: 'Pearl Embellished Evening Abaya', ar: 'عباية سهرة مزينة باللؤلؤ' },
    price: 1850,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop',
    category: { en: 'The Bridal Collection', ar: 'مجموعة العرائس' },
    description: {
      en: 'Exquisite evening abaya adorned with genuine freshwater pearls. Perfect for weddings and special celebrations.',
      ar: 'عباية سهرة رائعة مزينة بلآلئ المياه العذبة الطبيعية. مثالية لحفلات الزفاف والمناسبات الخاصة.'
    },
    sizes: ['52', '54', '56', '58', '60'],
    colors: [
      { name: { en: 'Pearl White', ar: 'أبيض لؤلؤي' }, hex: '#FCFCFC' },
      { name: { en: 'Soft Sand', ar: 'رملي ناعم' }, hex: '#F5F2ED' }
    ]
  },
  {
    id: '3',
    name: { en: 'Minimalist Linen Everyday Abaya', ar: 'عباية كتان يومية بسيطة' },
    price: 750,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    category: { en: 'Everyday Elegance', ar: 'أناقة يومية' },
    description: {
      en: 'Lightweight and breathable linen abaya designed for the Riyadh summer. Effortless style for your daily routine.',
      ar: 'عباية كتان خفيفة الوزن وتسمح بمرور الهواء مصممة لصيف الرياض. أسلوب سهل لروتينك اليومي.'
    },
    sizes: ['52', '54', '56', '58', '60'],
    colors: [
      { name: { en: 'Desert Beige', ar: 'بيج صحراوي' }, hex: '#D2B48C' },
      { name: { en: 'Slate Grey', ar: 'رمادي صخري' }, hex: '#708090' }
    ]
  },
  {
    id: '4',
    name: { en: 'Velvet Trimmed Winter Abaya', ar: 'عباية شتوية مزينة بالمخمل' },
    price: 950,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop',
    category: { en: 'Winter Abayas', ar: 'عبايات شتوية' },
    description: {
      en: 'Luxurious heavy crepe abaya with soft velvet trimming. Designed to keep you warm without compromising on style.',
      ar: 'عباية كريب ثقيلة فاخرة مع تقليم مخملي ناعم. مصممة لتبقيك دافئة دون المساومة على الأناقة.'
    },
    sizes: ['52', '54', '56', '58', '60'],
    colors: [
      { name: { en: 'Midnight Black', ar: 'أسود منتصف الليل' }, hex: '#000000' },
      { name: { en: 'Burgundy', ar: 'عنابي' }, hex: '#800020' }
    ]
  }
];
