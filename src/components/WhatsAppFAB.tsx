import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function WhatsAppFAB() {
  const { t } = useLanguage();
  return (
    <a
      href="https://wa.me/966500000000"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-8 right-8 rtl:right-auto rtl:left-8 z-50 bg-[#25D366] text-luxury-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform group"
    >
      <MessageCircle size={24} />
      <span className="absolute right-full rtl:right-auto rtl:left-full mr-4 rtl:mr-0 rtl:ml-4 top-1/2 -translate-y-1/2 bg-luxury-white text-luxury-black px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        {t('VIP Concierge Styling', 'خدمة الكونسيرج الشخصية')}
      </span>
    </a>
  );
}
