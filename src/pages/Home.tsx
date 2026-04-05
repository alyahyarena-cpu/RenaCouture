import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data';
import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useLanguage();
  const { addToCart } = useCart();

  const categories = [
    { name: { en: 'Everyday Elegance', ar: 'أناقة يومية' }, image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop' },
    { name: { en: 'Occasion Wear', ar: 'ملابس المناسبات' }, image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1000&auto=format&fit=crop' },
    { name: { en: 'Winter Abayas', ar: 'عبايات شتوية' }, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop' },
  ];

  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=2000&auto=format&fit=crop"
            alt="Rena Couture Hero"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-luxury-black/30" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-center text-luxury-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-7xl font-display tracking-[0.4em] mb-8"
          >
            {t('MAISON RENA', 'ميزون رينا')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xs md:text-sm uppercase tracking-[0.5em] mb-12 max-w-xl leading-loose"
          >
            {t(
              "Where tradition meets contemporary luxury. Discover the finest abayas crafted in Riyadh.",
              "حيث تلتقي التقاليد بالفخامة المعاصرة. اكتشفي أرقى العبايات المصنوعة في الرياض."
            )}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/shop"
              className="bg-luxury-white text-luxury-black px-12 py-5 text-xs uppercase tracking-[0.3em] hover:bg-luxury-gold hover:text-luxury-white transition-all duration-500 group"
            >
              {t('Discover the Collection', 'اكتشفي المجموعة')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name.en}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="relative aspect-[3/4] group overflow-hidden cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.name.en}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-luxury-black/20 group-hover:bg-luxury-black/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-luxury-white">
                <h3 className="text-lg font-display tracking-widest mb-4">{t(cat.name.en, cat.name.ar)}</h3>
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                  <span>{t('Shop Now', 'تسوقي الآن')}</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bestsellers Slider */}
      <section className="bg-luxury-sand/30 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-4 block">
                {t('Curated Selection', 'مجموعة مختارة')}
              </span>
              <h2 className="text-3xl font-display tracking-widest">{t('BESTSELLERS', 'الأكثر مبيعاً')}</h2>
            </div>
            <Link to="/shop" className="text-[10px] uppercase tracking-widest border-b border-luxury-black pb-1 hover:text-luxury-gold hover:border-luxury-gold transition-all">
              {t('View All', 'عرض الكل')}
            </Link>
          </div>

          <div className="flex overflow-x-auto space-x-8 rtl:space-x-reverse no-scrollbar pb-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="min-w-[280px] md:min-w-[350px] group"
                whileHover={{ y: -10 }}
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
      </section>

      {/* Social Proof / Instagram Feed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-4 block">
            {t('Follow Us', 'تابعونا')}
          </span>
          <h2 className="text-3xl font-display tracking-widest">@MAISONRENA.SA</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square bg-luxury-sand overflow-hidden relative group cursor-pointer">
              <img
                src={`https://picsum.photos/seed/rena${i}/800/800`}
                alt="Instagram"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-luxury-black/0 group-hover:bg-luxury-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <ArrowRight className="text-luxury-white" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
