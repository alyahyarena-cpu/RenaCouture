import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Lock, ShieldCheck, CreditCard, Apple, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CheckoutPage() {
  const { t, isRTL } = useLanguage();
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: 'Riyadh',
    phone: '',
  });

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (isOrderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-luxury-white p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center space-y-8"
        >
          <div className="flex justify-center">
            <CheckCircle2 size={80} className="text-luxury-gold animate-bounce" />
          </div>
          <h1 className="text-3xl font-display tracking-widest uppercase">
            {t('Thank You For Your Order', 'شكراً لطلبك')}
          </h1>
          <p className="text-xs uppercase tracking-widest text-gray-500 leading-loose">
            {t('Your order has been placed successfully. A confirmation email has been sent to you.', 'تم تقديم طلبك بنجاح. تم إرسال بريد تأكيد إليك.')}
          </p>
          <div className="pt-8">
            <Link to="/" className="bg-luxury-black text-luxury-white px-12 py-5 text-xs uppercase tracking-widest hover:bg-luxury-gold transition-colors">
              {t('Back to Home', 'العودة للرئيسية')}
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury-white">
      {/* Distraction-free Header */}
      <header className="py-8 border-b border-luxury-sand">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <Link to="/" className="text-2xl font-display tracking-[0.4em] text-luxury-black">
            RENA COUTURE
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Checkout Form */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-8">
                <div className="w-8 h-8 bg-luxury-black text-luxury-white rounded-full flex items-center justify-center text-xs">1</div>
                <h2 className="text-sm uppercase tracking-widest font-bold">{t('Express Checkout', 'الدفع السريع')}</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-black text-white py-4 rounded flex items-center justify-center space-x-2 rtl:space-x-reverse hover:opacity-80 transition-opacity">
                  <Apple size={20} fill="white" />
                  <span className="text-xs font-bold uppercase tracking-widest">Apple Pay</span>
                </button>
                <button className="bg-[#58595b] text-white py-4 rounded flex items-center justify-center space-x-2 rtl:space-x-reverse hover:opacity-80 transition-opacity">
                  <CreditCard size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest">Mada</span>
                </button>
              </div>
            </div>

            <form onSubmit={handlePlaceOrder} className="space-y-12">
              <div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse mb-8">
                  <div className="w-8 h-8 bg-luxury-black text-luxury-white rounded-full flex items-center justify-center text-xs">2</div>
                  <h2 className="text-sm uppercase tracking-widest font-bold">{t('Shipping Information', 'معلومات الشحن')}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-full">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block">{t('Email Address', 'البريد الإلكتروني')}</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-luxury-sand/20 border border-luxury-sand p-4 text-xs uppercase tracking-widest focus:ring-0 focus:border-luxury-gold transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block">{t('First Name', 'الاسم الأول')}</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-luxury-sand/20 border border-luxury-sand p-4 text-xs uppercase tracking-widest focus:ring-0 focus:border-luxury-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block">{t('Last Name', 'اسم العائلة')}</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-luxury-sand/20 border border-luxury-sand p-4 text-xs uppercase tracking-widest focus:ring-0 focus:border-luxury-gold transition-colors"
                    />
                  </div>
                  <div className="col-span-full">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block">{t('Address', 'العنوان')}</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-luxury-sand/20 border border-luxury-sand p-4 text-xs uppercase tracking-widest focus:ring-0 focus:border-luxury-gold transition-colors"
                      placeholder={t('National Address / Building No.', 'العنوان الوطني / رقم المبنى')}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block">{t('City', 'المدينة')}</label>
                    <select className="w-full bg-luxury-sand/20 border border-luxury-sand p-4 text-xs uppercase tracking-widest focus:ring-0 focus:border-luxury-gold transition-colors">
                      <option>Riyadh</option>
                      <option>Jeddah</option>
                      <option>Dammam</option>
                      <option>Khobar</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block">{t('Phone Number', 'رقم الجوال')}</label>
                    <input
                      required
                      type="tel"
                      className="w-full bg-luxury-sand/20 border border-luxury-sand p-4 text-xs uppercase tracking-widest focus:ring-0 focus:border-luxury-gold transition-colors"
                      placeholder="+966 5X XXX XXXX"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse mb-8">
                  <div className="w-8 h-8 bg-luxury-black text-luxury-white rounded-full flex items-center justify-center text-xs">3</div>
                  <h2 className="text-sm uppercase tracking-widest font-bold">{t('Payment Method', 'طريقة الدفع')}</h2>
                </div>
                <div className="space-y-4">
                  <div className="border border-luxury-gold bg-luxury-sand/20 p-6 flex justify-between items-center cursor-pointer rounded">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="w-4 h-4 border-4 border-luxury-gold rounded-full" />
                      <span className="text-xs uppercase tracking-widest font-bold">Tamara / Tabby</span>
                    </div>
                    <div className="flex space-x-2 rtl:space-x-reverse">
                      <img src="https://tamara.co/favicon.ico" alt="Tamara" className="h-6" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                  <div className="border border-luxury-sand p-6 flex justify-between items-center cursor-pointer rounded opacity-50">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="w-4 h-4 border border-luxury-sand rounded-full" />
                      <span className="text-xs uppercase tracking-widest font-bold">{t('Credit Card', 'بطاقة ائتمان')}</span>
                    </div>
                    <CreditCard size={20} />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-luxury-black text-luxury-white py-6 text-xs uppercase tracking-[0.3em] hover:bg-luxury-gold transition-all duration-500 flex items-center justify-center space-x-3 rtl:space-x-reverse group"
              >
                <ShieldCheck size={18} />
                <span>{t('Place Order', 'إتمام الطلب')}</span>
              </button>

              <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse pt-8 border-t border-luxury-sand opacity-50">
                <Lock size={14} />
                <span className="text-[10px] uppercase tracking-widest">{t('Secure SSL Encryption', 'تشفير SSL آمن')}</span>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="bg-luxury-sand/30 p-8 rounded-lg border border-luxury-sand">
              <h2 className="text-sm uppercase tracking-widest font-bold mb-8">{t('Order Summary', 'ملخص الطلب')}</h2>
              <div className="space-y-6 mb-8 max-h-96 overflow-y-auto no-scrollbar">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex space-x-4 rtl:space-x-reverse">
                    <div className="w-16 h-20 bg-luxury-sand overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name.en} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[10px] uppercase tracking-widest font-bold leading-tight">{t(item.name.en, item.name.ar)}</h3>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                        {t('Size', 'المقاس')}: {item.selectedSize} | {t('Qty', 'الكمية')}: {item.quantity}
                      </p>
                      <p className="text-xs font-medium mt-2">{item.price * item.quantity} {t('SAR', 'ريال')}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-8 border-t border-luxury-sand">
                <div className="flex justify-between text-xs uppercase tracking-widest text-gray-500">
                  <span>{t('Subtotal', 'المجموع الفرعي')}</span>
                  <span>{totalPrice} {t('SAR', 'ريال')}</span>
                </div>
                <div className="flex justify-between text-xs uppercase tracking-widest text-gray-500">
                  <span>{t('Shipping', 'الشحن')}</span>
                  <span className="text-luxury-gold">{t('Free', 'مجاني')}</span>
                </div>
                <div className="flex justify-between text-sm uppercase tracking-widest font-bold pt-4 border-t border-luxury-sand">
                  <span>{t('Total', 'الإجمالي')}</span>
                  <span>{totalPrice} {t('SAR', 'ريال')}</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-luxury-gold/10 border border-luxury-gold/20 rounded-lg flex items-center space-x-3 rtl:space-x-reverse">
                <ShieldCheck size={20} className="text-luxury-gold" />
                <p className="text-[10px] uppercase tracking-widest leading-relaxed text-luxury-gold font-bold">
                  {t('Your purchase is protected by Rena Couture Guarantee', 'مشترياتك محمية بضمان رينا كوتور')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
