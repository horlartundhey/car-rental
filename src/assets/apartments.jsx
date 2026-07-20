import livingRoom from './images/apartments/living-room.jpg'
import bedroom from './images/apartments/bedroom.jpg'
import kitchenette from './images/apartments/kitchenette.jpg'
import bathroom from './images/apartments/bathroom.jpg'

export { livingRoom, bedroom, kitchenette, bathroom }

// Real listing from the client's shortlet flyer (name, location, price,
// amenities are real). Images are temporary Unsplash placeholder interiors,
// not the actual apartment — replace with real photography when available.
export const apartments = [
  {
    id: 1,
    slug: 'cozy-2-bedroom-adeniyi-jones-ikeja',
    name: 'Cozy 2 Bedroom Apartment',
    location: 'Adeniyi Jones, Ikeja, Lagos',
    bedrooms: 2,
    bathrooms: 2,
    pricePerNight: 120000,
    discountNote: 'Discount available for stays of 14 nights or more',
    images: [livingRoom, bedroom, kitchenette, bathroom],
    description:
      "A newly renovated 2-bedroom apartment in Adeniyi Jones, Ikeja — just a few minutes' drive from the airport. Comfortably furnished for both short and extended stays, with free airport pickup and dropoff available.",
    amenities: [
      'Fast Wi-Fi',
      '24/7 Electricity',
      'Smart TV',
      'Double Unit Refrigerator',
      'Gas Cooker (3 Burners)',
      'Kitchenette',
      'Oven',
      'Microwave',
      'Pressing Iron & Board',
      'En-Suite Rooms',
      'Free Airport Pickup & Dropoff',
    ],
    featured: true,
  },
]

export default apartments
