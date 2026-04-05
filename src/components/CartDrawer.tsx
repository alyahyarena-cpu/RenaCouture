import React from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();
  const { t, isRTL } = useLanguage();

  const freeShippingThreshold = 500;
  const progress = Math.min((totalPrice / freeShippingThreshold) * 100, 100);
  const remaining = Math.max(freeShippingThreshold - totalPrice, 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-luxury-black/50 z-[100]"
          />
          <motion.div
            initial={{ x: isRTL ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: isRTL ? '-100%' : '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 rtl:right-auto rtl:left-0 w-full max-w-md bg-luxury-white z-[110] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-luxury-sand flex justify-between items-center">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <ShoppingBag size={20} />
                <h2 className="text-sm uppercase tracking-widest font-medium">
                  {t('Shopping Cart', 'حقيبة التسوق')}
                </h2>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:rotate-90 transition-transform">
                <X size={24} />
              </button>
            </div>

            <div className="p-6 bg-luxury-sand/30">
              <div className="flex justify-between text-[10px] uppercase tracking-widest mb-2">
                <span>{remaining > 0 ? t(`Only ${remaining} SAR away from free shipping`, `باقي ${remaining} ريال للشحن المجاني`) : t('You unlocked free shipping!', 'لقد حصلت على شحن مجاني!')}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-luxury-gold"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center space-y-6">
                  <ShoppingBag size={48} className="text-gray-300" />
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    {t('Your cart is empty', 'حقيبتك فارغة')}
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="bg-luxury-black text-luxury-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-luxury-gold transition-colors"
                  >
                    {t('Start Shopping', 'ابدأ التسوق')}
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex space-x-4 rtl:space-x-reverse">
                    <div className="w-24 h-32 bg-luxury-sand overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name.en} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-xs uppercase tracking-widest font-medium leading-relaxed">
                            {t(item.name.en, item.name.ar)}
                          </h3>
                          <button
                            onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                          {t('Size', 'المقاس')}: {item.selectedSize} | {t('Color', 'اللون')}: {item.selectedColor}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center border border-luxury-sand">
                          <button
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                            className="p-2 hover:bg-luxury-sand transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-4 text-xs font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                            className="p-2 hover:bg-luxury-sand transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="text-xs font-medium">
                          {item.price * item.quantity} {t('SAR', 'ريال')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-luxury-sand space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest text-gray-500">{t('Subtotal', 'المجموع الفرعي')}</span>
                  <span className="text-lg font-display">{totalPrice} {t('SAR', 'ريال')}</span>
                </div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest text-center">
                  {t('Shipping and taxes calculated at checkout', 'يتم حساب الشحن والضرائب عند الدفع')}
                </p>
                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full bg-luxury-black text-luxury-white py-5 flex items-center justify-center space-x-2 rtl:space-x-reverse text-xs uppercase tracking-widest hover:bg-luxury-gold transition-colors group"
                >
                  <span>{t('Secure Checkout', 'الدفع الآمن')}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
