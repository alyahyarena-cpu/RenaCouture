import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import AnnouncementBar from './components/AnnouncementBar';
import WhatsAppFAB from './components/WhatsAppFAB';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Shop from './pages/Shop';
import CheckoutPage from './pages/CheckoutPage';
import { AnimatePresence, motion } from 'motion/react';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MainLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isCheckout = location.pathname === '/checkout';

  return (
    <div className="min-h-screen flex flex-col">
      {!isCheckout && <AnnouncementBar />}
      {!isCheckout && <Header />}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      {!isCheckout && <Footer />}
      {!isCheckout && <WhatsAppFAB />}
      <CartDrawer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              {/* Fallback to Home for other routes in this demo */}
              <Route path="*" element={<Home />} />
            </Routes>
          </MainLayout>
        </Router>
      </CartProvider>
    </LanguageProvider>
  );
}
