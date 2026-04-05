import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { products } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, Star, Truck, RefreshCw, Ruler, ShoppingBag, Heart, Share2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id) || products[0];

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name.en);
  const [activeImage, setActiveImage] = useState(product.image);
  const [openAccordion, setOpenAccordion] = useState<string | null>('details');
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const atcButton = document.getElementById('main-atc');
      if (atcButton) {
        const rect = atcButton.getBoundingClientRect();
        setIsStickyVisible(rect.bottom < 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const accordions = [
    { id: 'details', title: { en: 'Fabric & Care', ar: 'القماش والعناية' }, content: { en: '100% Premium Japanese Silk Crepe. Dry clean only. Iron on low heat.', ar: 'كريب حرير ياباني فاخر 100%. تنظيف جاف فقط. كوي على حرارة منخفضة.' } },
    { id: 'shipping', title: { en: 'Shipping & Returns', ar: 'الشحن والاسترجاع' }, content: { en: 'Free express shipping in Riyadh. 7-day easy returns policy.', ar: 'شحن سريع مجاني في الرياض. سياسة استرجاع سهلة خلال 7 أيام.' } },
    { id: 'sizing', title: { en: 'Sizing Guide', ar: 'دليل المقاسات' }, content: { en: 'Our abayas are designed for a loose, elegant fit. Standard length is 56 inches.', ar: 'عباياتنا مصممة لتكون واسعة وأنيقة. الطول القياسي هو 56 بوصة.' } },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-[3/4] bg-luxury-sand overflow-hidden relative group cursor-zoom-in">
            <motion.img
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={activeImage}
              alt={product.name.en}
              className="w-full h-full object-cover zoom-image"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 right-6 flex flex-col space-y-4">
              <button className="bg-luxury-white/80 p-3 rounded-full hover:bg-luxury-white transition-colors">
                <Heart size={20} />
              </button>
              <button className="bg-luxury-white/80 p-3 rounded-full hover:bg-luxury-white transition-colors">
                <Share2 size={20} />
              </button>
            </div>
          </div>
          <div className="flex space-x-4 rtl:space-x-reverse overflow-x-auto no-scrollbar">
            {[product.image, 'https://picsum.photos/seed/rena_alt1/800/1200', 'https://picsum.photos/seed/rena_alt2/800/1200'].map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={cn(
                  "w-24 aspect-[3/4] flex-shrink-0 border-2 transition-all",
                  activeImage === img ? "border-luxury-gold" : "border-transparent opacity-60 hover:opacity-100"
                )}
              >
                <img src={img} alt="Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-8">
            <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-4 block">
              {t(product.category.en, product.category.ar)}
            </span>
            <h1 className="text-3xl md:text-4xl font-display tracking-widest mb-4">
              {t(product.name.en, product.name.ar)}
            </h1>
            <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
              <span className="text-2xl font-display">{product.price} {t('SAR', 'ريال')}</span>
              <div className="flex items-center text-luxury-gold">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                <span className="text-[10px] text-gray-400 ml-2 rtl:mr-2 uppercase tracking-widest">(48 {t('Reviews', 'تقييم')})</span>
              </div>
            </div>

            {/* Tamara/Tabby Widget */}
            <div className="bg-luxury-sand/50 p-4 rounded-lg flex items-center justify-between mb-8 border border-luxury-sand">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://tamara.co/favicon.ico" alt="Tamara" className="w-6 h-6 rounded-full" referrerPolicy="no-referrer" />
                <p className="text-[10px] uppercase tracking-widest leading-relaxed">
                  {t('Split into 4 interest-free payments of', 'قسمها على 4 دفعات بدون فوائد بقيمة')} <br />
                  <span className="font-bold text-luxury-black">{product.price / 4} {t('SAR', 'ريال')}</span>
                </p>
              </div>
              <button className="text-[10px] uppercase tracking-widest font-bold border-b border-luxury-black">
                {t('Learn More', 'لمعرفة المزيد')}
              </button>
            </div>

            {/* Scarcity Indicator */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-8 text-red-600 animate-pulse">
              <div className="w-2 h-2 bg-red-600 rounded-full" />
              <p className="text-[10px] uppercase tracking-widest font-bold">
                {t('Only 2 left in this size', 'بقي 2 فقط بهذا المقاس')}
              </p>
            </div>
          </div>

          {/* Variant Selectors */}
          <div className="space-y-8 mb-12">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-[10px] uppercase tracking-widest font-bold">{t('Select Size', 'اختر المقاس')}</label>
                <button className="text-[10px] uppercase tracking-widest text-gray-400 flex items-center space-x-1 rtl:space-x-reverse hover:text-luxury-gold transition-colors">
                  <Ruler size={14} />
                  <span>{t('Size Guide', 'دليل المقاسات')}</span>
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "w-12 h-12 text-xs uppercase tracking-widest border transition-all flex items-center justify-center",
                      selectedSize === size ? "bg-luxury-black text-luxury-white border-luxury-black" : "border-luxury-sand hover:border-luxury-black"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold mb-4 block">{t('Select Color', 'اختر اللون')}</label>
              <div className="flex space-x-4 rtl:space-x-reverse">
                {product.colors.map((color) => (
                  <button
                    key={color.name.en}
                    onClick={() => setSelectedColor(color.name.en)}
                    className={cn(
                      "w-8 h-8 rounded-full border-2 transition-all p-0.5",
                      selectedColor === color.name.en ? "border-luxury-gold" : "border-transparent"
                    )}
                  >
                    <div className="w-full h-full rounded-full" style={{ backgroundColor: color.hex }} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            id="main-atc"
            onClick={() => addToCart(product, selectedSize, selectedColor)}
            className="w-full bg-luxury-black text-luxury-white py-6 text-xs uppercase tracking-[0.3em] hover:bg-luxury-gold transition-all duration-500 flex items-center justify-center space-x-3 rtl:space-x-reverse group"
          >
            <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
            <span>{t('Add to Cart', 'إضافة إلى الحقيبة')}</span>
          </button>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-luxury-sand/20 rounded-lg">
              <Truck size={20} className="text-luxury-gold" />
              <span className="text-[10px] uppercase tracking-widest leading-tight">{t('Fast Delivery in Riyadh', 'توصيل سريع في الرياض')}</span>
            </div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-luxury-sand/20 rounded-lg">
              <RefreshCw size={20} className="text-luxury-gold" />
              <span className="text-[10px] uppercase tracking-widest leading-tight">{t('7-Day Easy Returns', 'استرجاع سهل خلال 7 أيام')}</span>
            </div>
          </div>

          {/* Accordions */}
          <div className="mt-12 border-t border-luxury-sand">
            {accordions.map((acc) => (
              <div key={acc.id} className="border-b border-luxury-sand">
                <button
                  onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                  className="w-full py-6 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold text-left rtl:text-right"
                >
                  <span>{t(acc.title.en, acc.title.ar)}</span>
                  {openAccordion === acc.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <AnimatePresence>
                  {openAccordion === acc.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-xs text-gray-500 leading-relaxed uppercase tracking-widest">
                        {t(acc.content.en, acc.content.ar)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Mobile Add to Cart */}
      <AnimatePresence>
        {isStickyVisible && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-luxury-white p-4 border-t border-luxury-sand md:hidden"
          >
            <button
              onClick={() => addToCart(product, selectedSize, selectedColor)}
              className="w-full bg-luxury-black text-luxury-white py-5 text-xs uppercase tracking-[0.2em] flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <ShoppingBag size={16} />
              <span>{t('Add to Cart', 'إضافة إلى الحقيبة')}</span>
              <span className="mx-2 opacity-30">|</span>
              <span>{product.price} {t('SAR', 'ريال')}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
