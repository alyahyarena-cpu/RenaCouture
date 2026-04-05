import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = [
    {
      title: { en: 'Customer Care', ar: 'خدمة العملاء' },
      links: [
        { name: { en: 'Sizing Guide', ar: 'دليل المقاسات' }, path: '/sizing' },
        { name: { en: 'Shipping & Returns', ar: 'الشحن والاسترجاع' }, path: '/shipping' },
        { name: { en: 'Fabric Care', ar: 'العناية بالأقمشة' }, path: '/care' },
        { name: { en: 'Contact Us', ar: 'اتصل بنا' }, path: '/contact' },
      ],
    },
    {
      title: { en: 'About Rena', ar: 'عن رينا' },
      links: [
        { name: { en: 'Our Story', ar: 'قصتنا' }, path: '/story' },
        { name: { en: 'Maison Rena', ar: 'ميزون رينا' }, path: '/maison' },
        { name: { en: 'Sustainability', ar: 'الاستدامة' }, path: '/sustainability' },
      ],
    },
  ];

  return (
    <footer className="bg-luxury-black text-luxury-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-display tracking-[0.3em] mb-6">RENA</h2>
            <p className="text-xs text-gray-400 leading-relaxed uppercase tracking-widest">
              {t(
                "Luxury Abayas for the modern woman. Designed in Riyadh, inspired by elegance.",
                "عبايات فاخرة للمرأة العصرية. صممت في الرياض، مستوحاة من الأناقة."
              )}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse mt-8">
              <a href="https://instagram.com/maisonrena.sa" target="_blank" rel="noreferrer" className="hover:text-luxury-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-luxury-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-luxury-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title.en}>
              <h3 className="text-xs uppercase tracking-[0.3em] font-medium mb-8 text-luxury-gold">
                {t(section.title.en, section.title.ar)}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name.en}>
                    <a href={link.path} className="text-xs uppercase tracking-widest text-gray-400 hover:text-luxury-white transition-colors">
                      {t(link.name.en, link.name.ar)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-medium mb-8 text-luxury-gold">
              {t('Newsletter', 'النشرة الإخبارية')}
            </h3>
            <p className="text-xs text-gray-400 mb-6 uppercase tracking-widest">
              {t('Subscribe for 10% off your first order.', 'اشترك للحصول على خصم 10% على طلبك الأول.')}
            </p>
            <form className="flex border-b border-gray-700 pb-2">
              <input
                type="email"
                placeholder={t('Enter your email', 'أدخل بريدك الإلكتروني')}
                className="bg-transparent border-none focus:ring-0 text-xs w-full uppercase tracking-widest"
              />
              <button type="submit" className="text-luxury-gold hover:text-luxury-white transition-colors">
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-[10px] text-gray-500 uppercase tracking-widest">
            © {new Date().getFullYear()} RENA COUTURE. {t('All Rights Reserved.', 'جميع الحقوق محفوظة.')}
          </div>
          <div className="flex items-center space-x-4 rtl:space-x-reverse grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Apple_Pay_logo.svg/1280px-Apple_Pay_logo.svg.png" alt="Apple Pay" className="h-6" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mada_Logo.svg/1200px-Mada_Logo.svg.png" alt="Mada" className="h-4" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
