import {
  toyota4Runner,
  lexusGx460,
  toyotaHighlander2018,
  toyotaPradoLc,
  toyotaHighlander2010,
  toyotaSienna,
} from './assets'

export const services = [
  {
    id: 1,
    slug: 'car-rental',
    title: 'Car Rental',
    shortDescription: 'Self-drive or chauffeur-driven rentals by the day, week, or month.',
    heroImage: toyota4Runner,
    description:
      "Brick 'N' Wheels' core service: a well-kept fleet of Toyota and Lexus SUVs and family vehicles, available daily, weekly, or monthly — with a chauffeur included if you'd rather not drive yourself. Rentals cover Lagos and beyond, whether you're staying local or heading out of state.",
    benefits: [
      'Daily, weekly, or monthly rental terms',
      'Chauffeur/driver available on every booking',
      'Well-maintained SUVs and family vehicles',
      'Available anywhere within or outside Lagos',
    ],
    useCases: [
      'Everyday transportation while your own car is unavailable',
      'Visiting family or traveling out of state',
      'Extended stays that need reliable daily transport',
    ],
    relatedCategory: null,
    faqSlugs: ['documents-required', 'multiple-days', 'chauffeur-included'],
  },
  {
    id: 2,
    slug: 'executive-suv-rental',
    title: 'Executive SUV Rental',
    shortDescription: 'Spacious, comfortable SUVs for travel that needs a bit more presence.',
    heroImage: lexusGx460,
    description:
      "Most of the fleet is executive-class SUVs — Lexus GX460, Toyota Highlander, Toyota 4Runner, and Toyota Prado — built for road conditions across Lagos without compromising on comfort. A dependable choice when you need more room, more presence, and a smoother ride.",
    benefits: [
      'Higher seating capacity — most seat 7',
      'Comfortable on both city roads and longer trips',
      'A more commanding presence for client-facing travel',
      'Chauffeur available for a fully hands-off experience',
    ],
    useCases: [
      'Client pickups and executive travel',
      'Group or family trips that need extra seats',
      'Longer road trips outside Lagos',
    ],
    relatedCategory: 'Executive SUV',
    faqSlugs: ['documents-required', 'locations-served'],
  },
  {
    id: 3,
    slug: 'chauffeur-service',
    title: 'Chauffeur Service',
    shortDescription: 'A professional driver included on every booking, at no extra cost.',
    heroImage: toyotaHighlander2018,
    description:
      "Every vehicle in the fleet can be booked with a professional chauffeur — you're free to work, relax, or enjoy the ride while someone else handles Lagos traffic. It's included as standard, not an upsell.",
    benefits: [
      'Included on daily, weekly, and monthly rentals',
      'Frees you up to work or relax during the journey',
      'A driver who knows the city and its traffic patterns',
      'No separate booking or extra paperwork required',
    ],
    useCases: [
      'Business travelers who want to work en route',
      'Visitors unfamiliar with Lagos roads',
      'Events where you shouldn’t have to think about parking',
    ],
    relatedCategory: null,
    faqSlugs: ['chauffeur-included', 'how-to-book'],
  },
  {
    id: 4,
    slug: 'airport-transfer',
    title: 'Airport Transfers',
    shortDescription: 'Punctual pickups and drop-offs, for locals, tourists, and expatriates.',
    heroImage: toyotaPradoLc,
    description:
      "Flying into or out of Lagos? We handle airport pickup and drop-off with a driver who'll be there on time, every time. It's a popular choice with expatriates and tourists, and pairs naturally with our shortlet apartments if you need a place to stay too.",
    benefits: [
      'Reliable, punctual pickup and drop-off',
      'Popular with expatriates and tourists',
      'Pairs with shortlet apartment stays for a complete arrival package',
      'Available for both short visits and extended trips',
    ],
    useCases: [
      'Airport pickup on arrival into Lagos',
      'Scheduled drop-off ahead of a flight',
      'Combined airport transfer + apartment stay',
    ],
    relatedCategory: null,
    faqSlugs: ['locations-served', 'how-to-book'],
  },
  {
    id: 5,
    slug: 'corporate-car-hire',
    title: 'Corporate Car Hire',
    shortDescription: 'Dependable transport for teams, executives, and business travel.',
    heroImage: toyotaHighlander2010,
    description:
      "For businesses that need reliable transport without owning a fleet — corporate car hire covers staff transport, executive travel, and client logistics, with flexible daily, weekly, or monthly terms to match your schedule.",
    benefits: [
      'Flexible terms to match business schedules',
      'A range of vehicles from economical to executive',
      'Chauffeur option for executive and client travel',
      'One point of contact for repeat, ongoing bookings',
    ],
    useCases: [
      'Staff or team transportation',
      'Executive and client pickups',
      'Ongoing corporate accounts with repeat bookings',
    ],
    relatedCategory: null,
    faqSlugs: ['multiple-days', 'how-to-book'],
  },
  {
    id: 6,
    slug: 'event-wedding-transportation',
    title: 'Event & Wedding Transportation',
    shortDescription: 'Reliable transport for weddings, guests, and special occasions.',
    heroImage: toyotaSienna,
    description:
      "Weddings and events run on schedules that don't leave room for transport headaches. Whether it's moving the bridal party or getting guests where they need to be, we provide dependable vehicles — including family-sized options — with a chauffeur included.",
    benefits: [
      'Family-sized vehicles for bridal party or guest transport',
      'Chauffeur included, so no one is worrying about driving',
      'Available for both single-day and multi-day events',
      'Booking coordinated directly with our team on WhatsApp',
    ],
    useCases: [
      'Bridal party and guest transportation',
      'Multi-day event logistics',
      'Airport pickup for out-of-town guests',
    ],
    relatedCategory: null,
    faqSlugs: ['how-to-book', 'multiple-days'],
  },
]

export default services
