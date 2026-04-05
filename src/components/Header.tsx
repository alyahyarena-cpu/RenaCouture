import React, { useState } from 'react';
import { Menu, Search, ShoppingBag, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Header() {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const { totalItems, setIsCartOpen } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: { en: 'Home', ar: 'الرئيسية' }, path: '/' },
    { name: { en: 'Shop All', ar: 'تسوق الكل' }, path: '/shop' },
    { name: { en: 'New Arrivals', ar: 'وصلنا حديثاً' }, path: '/new' },
    { name: { en: 'Bridal Collection', ar: 'مجموعة العرائس' }, path: '/bridal' },
    { name: { en: 'Fabric Care', ar: 'العناية بالأقمشة' }, path: '/care' },
    { name: { en: 'Contact', ar: 'اتصل بنا' }, path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-luxury-white/90 backdrop-blur-md border-b border-luxury-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile Menu Button */}
          <div className="flex-1 flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(true)} className="p-2 text-luxury-black">
              <Menu size={24} />
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 space-x-8 rtl:space-x-reverse">
            {navLinks.slice(1, 4).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xs uppercase tracking-widest text-luxury-black hover:text-luxury-gold transition-colors"
              >
                {t(link.name.en, link.name.ar)}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Link to="/" className="text-2xl font-display tracking-[0.3em] text-luxury-black">
              RENA COUTURE
            </Link>
          </div>

          {/* Icons & Language Toggle */}
          <div className="flex-1 flex items-center justify-end space-x-4 rtl:space-x-reverse">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="flex items-center space-x-1 text-xs uppercase tracking-widest hover:text-luxury-gold transition-colors"
            >
              <Globe size={16} />
              <span>{language === 'en' ? 'العربية' : 'EN'}</span>
            </button>
            <button className="p-2 text-luxury-black hover:text-luxury-gold transition-colors">
              <Search size={20} />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-luxury-black hover:text-luxury-gold transition-colors relative"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-luxury-gold text-luxury-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-luxury-black/50 z-[60]"
            />
            <motion.div
              initial={{ x: isRTL ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? '100%' : '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 rtl:left-auto rtl:right-0 w-full max-w-xs bg-luxury-white z-[70] p-6 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-xl font-display tracking-widest">RENA</span>
                <button onClick={() => setIsMenuOpen(false)} className="p-2">
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm uppercase tracking-[0.2em] text-luxury-black border-b border-luxury-sand pb-2"
                  >
                    {t(link.name.en, link.name.ar)}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
