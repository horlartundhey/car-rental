import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import {
  Home,
  Fleet,
  CarDetail,
  BuyCars,
  CarForSaleDetail,
  Apartments,
  ApartmentDetail,
  Services,
  ServiceDetail,
  Locations,
  LocationDetail,
  About,
  Contact,
  FAQ,
} from './pages'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import { ThemeProvider } from './context/ThemeContext'

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15, ease: 'easeInOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/fleet/:id" element={<CarDetail />} />
          <Route path="/buy-cars" element={<BuyCars />} />
          <Route path="/buy-cars/:id" element={<CarForSaleDetail />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/apartments/:id" element={<ApartmentDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:slug" element={<LocationDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <WhatsAppButton
          iconOnly
          className="md:hidden fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-gold text-charcoal shadow-lg shadow-black/40"
        />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
