import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
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
