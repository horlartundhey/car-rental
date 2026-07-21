import toyotaCamryNew from './images/cars-for-sale/toyota-camry-new.jpg'
import toyotaFortunerNew from './images/cars-for-sale/toyota-fortuner-new.jpg'
import toyotaLandCruiserNew from './images/cars-for-sale/toyota-land-cruiser-new.jpg'
import toyotaGranaceNew from './images/cars-for-sale/toyota-granace-new.jpg'

export { toyotaCamryNew, toyotaFortunerNew, toyotaLandCruiserNew, toyotaGranaceNew }

// PLACEHOLDER DATA — sample brand-new-car-for-sale listings, not real inventory.
// This is a new business line (separate from the used rental fleet in assets.jsx)
// and needs real listings, prices, and photos from the client before launch.
// Images are a distinct set of stock photos (not reused from the rental fleet).
export const carsForSale = [
  {
    id: 1,
    slug: 'toyota-camry-2026-brand-new',
    name: 'Camry',
    brand: 'Toyota',
    model: 'Camry',
    year: 2026,
    price: 48000000,
    condition: 'Brand New',
    transmission: 'Automatic',
    fuel: 'Petrol',
    warranty: '2-Year Manufacturer Warranty',
    images: [toyotaCamryNew],
    description:
      'Brand new, factory-fresh Camry sedan — full manufacturer warranty, zero mileage, and available for immediate delivery.',
    features: ['Leather Seats', 'Reversing Camera', 'Bluetooth', 'Cruise Control'],
  },
  {
    id: 2,
    slug: 'toyota-fortuner-2026-brand-new',
    name: 'Fortuner',
    brand: 'Toyota',
    model: 'Fortuner',
    year: 2026,
    price: 65000000,
    condition: 'Brand New',
    transmission: 'Automatic',
    fuel: 'Petrol',
    warranty: '2-Year Manufacturer Warranty',
    images: [toyotaFortunerNew],
    description:
      'A brand new Fortuner straight from the factory — spacious, rugged, and ready for both city and out-of-state driving.',
    features: ['7 Seats', 'All-Wheel Drive', 'Reversing Camera', 'Sunroof'],
  },
  {
    id: 3,
    slug: 'toyota-land-cruiser-2026-brand-new',
    name: 'Land Cruiser',
    brand: 'Toyota',
    model: 'Land Cruiser VX V8',
    year: 2026,
    price: 155000000,
    condition: 'Brand New',
    transmission: 'Automatic',
    fuel: 'Petrol',
    warranty: '2-Year Manufacturer Warranty',
    images: [toyotaLandCruiserNew],
    description:
      'The flagship Land Cruiser VX V8, brand new with zero mileage — the definitive executive SUV for those who want the very best.',
    features: ['Leather Seats', '7 Seats', 'All-Wheel Drive', 'Premium Sound System'],
  },
  {
    id: 4,
    slug: 'toyota-granace-2026-brand-new',
    name: 'GranAce',
    brand: 'Toyota',
    model: 'GranAce',
    year: 2026,
    price: 70000000,
    condition: 'Brand New',
    transmission: 'Automatic',
    fuel: 'Petrol',
    warranty: '2-Year Manufacturer Warranty',
    images: [toyotaGranaceNew],
    description:
      'A brand new, premium GranAce van — spacious captain’s-chair seating and a smooth ride, ideal for VIP group transport.',
    features: ['Captain Chairs', 'Sliding Doors', 'Rear AC', 'Bluetooth'],
  },
]

export default carsForSale
