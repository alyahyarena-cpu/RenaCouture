import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function AnnouncementBar() {
  const { t } = useLanguage();
  return (
    <div className="bg-luxury-black text-luxury-white py-2 text-center text-xs tracking-widest uppercase">
      {t(
        "Free Express Shipping in Riyadh on orders over 500 SAR",
        "شحن سريع مجاني في الرياض للطلبات فوق 500 ريال"
      )}
    </div>
  );
}
