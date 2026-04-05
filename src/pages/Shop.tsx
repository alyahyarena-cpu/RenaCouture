import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { ShoppingBag, Filter, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Shop() {
  const { t } = useLanguage();
  const { addToCart } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-8 md:space-y-0">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-4 block">
            {t('Explore Our World', 'استكشفي عالمنا')}
          </span>
          <h1 className="text-4xl font-display tracking-widest uppercase">{t('SHOP ALL', 'تسوقي الكل')}</h1>
        </div>
        <div className="flex space-x-8 rtl:space-x-reverse items-center">
          <button className="text-[10px] uppercase tracking-widest flex items-center space-x-2 rtl:space-x-reverse hover:text-luxury-gold transition-colors">
            <Filter size={16} />
            <span>{t('Filter', 'تصفية')}</span>
          </button>
          <button className="text-[10px] uppercase tracking-widest flex items-center space-x-2 rtl:space-x-reverse hover:text-luxury-gold transition-colors">
            <Search size={16} />
            <span>{t('Search', 'بحث')}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group"
          >
            <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-luxury-sand overflow-hidden mb-6">
              <img
                src={product.image}
                alt={product.name.en}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-luxury-black/0 group-hover:bg-luxury-black/10 transition-colors" />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product, product.sizes[0], product.colors[0].name.en);
                }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-luxury-white text-luxury-black px-6 py-3 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-luxury-gold hover:text-luxury-white flex items-center space-x-2 rtl:space-x-reverse"
              >
                <ShoppingBag size={14} />
                <span>{t('Quick Add', 'إضافة سريعة')}</span>
              </button>
            </Link>
            <div className="text-center">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">
                {t(product.category.en, product.category.ar)}
              </span>
              <h3 className="text-xs uppercase tracking-widest font-medium mb-2 group-hover:text-luxury-gold transition-colors">
                {t(product.name.en, product.name.ar)}
              </h3>
              <p className="text-sm font-display tracking-widest">{product.price} {t('SAR', 'ريال')}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
