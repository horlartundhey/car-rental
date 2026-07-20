import lexusGx460 from './images/cars/lexus-gx460.jpg'
import toyotaHighlander2018 from './images/cars/toyota-highlander-2018.jpg'
import toyotaHighlander2010 from './images/cars/toyota-highlander-2010.jpg'
import toyota4Runner from './images/cars/toyota-4runner.jpg'
import toyotaPradoLc from './images/cars/toyota-land-cruiser-prado.jpg'
import toyotaVenza from './images/cars/toyota-venza.jpg'
import toyotaSienna from './images/cars/toyota-sienna.jpg'

export {
  lexusGx460,
  toyotaHighlander2018,
  toyotaHighlander2010,
  toyota4Runner,
  toyotaPradoLc,
  toyotaVenza,
  toyotaSienna,
}

// NOTE: This is the real Brick 'N' Wheels fleet, sourced from the client's
// own promotional flyer (vehicles, years, and day-rates are real). Images
// are temporary Unsplash placeholder photography, not actual fleet photos —
// replace with real vehicle photography when available.
export const cars = [
  {
    id: 1,
    slug: 'lexus-gx460-2016',
    name: 'GX460',
    brand: 'Lexus',
    model: 'GX460',
    year: 2016,
    category: 'Executive SUV',
    price: 150000,
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Petrol',
    images: [lexusGx460],
    description:
      'The flagship of the fleet — a body-on-frame luxury SUV built for executive comfort on Lagos roads, with a chauffeur available on every booking.',
    features: ['Leather Seats', 'Chauffeur Available', '7 Seats', 'All-Wheel Drive'],
  },
  {
    id: 2,
    slug: 'toyota-highlander-2018',
    name: 'Highlander',
    brand: 'Toyota',
    model: 'Highlander',
    year: 2018,
    category: 'Executive SUV',
    price: 120000,
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Petrol',
    images: [toyotaHighlander2018],
    description:
      'A newer, well-kept Highlander with room for the whole family or group — a dependable choice for airport transfers and day trips around Lagos.',
    features: ['7 Seats', 'Chauffeur Available', 'Bluetooth', 'Reversing Camera'],
  },
  {
    id: 3,
    slug: 'toyota-highlander-2010',
    name: 'Highlander',
    brand: 'Toyota',
    model: 'Highlander',
    year: 2010,
    category: 'Executive SUV',
    price: 80000,
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Petrol',
    images: [toyotaHighlander2010],
    description:
      'A budget-friendly Highlander option without compromising on space — ideal for longer rentals and everyday city driving.',
    features: ['7 Seats', 'Chauffeur Available', 'Bluetooth'],
  },
  {
    id: 4,
    slug: 'toyota-4runner-2016',
    name: '4Runner',
    brand: 'Toyota',
    model: '4Runner',
    year: 2016,
    category: 'Executive SUV',
    price: 100000,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    images: [toyota4Runner],
    description:
      'Rugged and dependable — the 4Runner handles Lagos road conditions with ease, on airport runs or longer out-of-state trips.',
    features: ['Chauffeur Available', 'All-Wheel Drive', 'Bluetooth'],
  },
  {
    id: 5,
    slug: 'toyota-prado-lc-2015',
    name: 'Land Cruiser Prado',
    brand: 'Toyota',
    model: 'Prado LC',
    year: 2015,
    category: 'Executive SUV',
    price: 120000,
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Petrol',
    images: [toyotaPradoLc],
    description:
      'A trusted favourite for weddings, airport pickups, and executive travel — spacious, comfortable, and always presentable.',
    features: ['Leather Seats', '7 Seats', 'Chauffeur Available', 'All-Wheel Drive'],
  },
  {
    id: 6,
    slug: 'toyota-venza-2012',
    name: 'Venza',
    brand: 'Toyota',
    model: 'Venza',
    year: 2012,
    category: 'Crossover SUV',
    price: 80000,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    images: [toyotaVenza],
    description:
      'A comfortable, car-like crossover for smaller groups — an easy, affordable choice for city driving and short trips.',
    features: ['Bluetooth', 'Reversing Camera'],
  },
  {
    id: 7,
    slug: 'toyota-sienna-2012',
    name: 'Sienna',
    brand: 'Toyota',
    model: 'Sienna',
    year: 2012,
    category: 'Family Van',
    price: 80000,
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Petrol',
    images: [toyotaSienna],
    description:
      'The practical pick for larger families and group travel, with sliding doors and generous luggage space for airport runs.',
    features: ['7 Seats', 'Chauffeur Available', 'Sliding Doors'],
  },
]

export default cars
