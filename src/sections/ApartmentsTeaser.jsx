import { Link } from 'react-router-dom'
import { ArrowRight, Wifi, Zap, Tv, Plane } from 'lucide-react'
import { apartments } from '../assets/apartments'
import { formatNaira } from '../utils/whatsapp'

const highlights = [
  { icon: Wifi, label: 'Fast Wi-Fi' },
  { icon: Zap, label: '24/7 Electricity' },
  { icon: Tv, label: 'Smart TV' },
  { icon: Plane, label: 'Free Airport Pickup' },
]

const ApartmentsTeaser = () => {
  const apartment = apartments[0]

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Shortlet Apartments</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5">
            A Complete Life Package — Beyond the Car
          </h2>
          <p className="text-foreground-muted leading-relaxed mb-6">
            Landing in Lagos and need a place to stay too? We also rent fully furnished
            apartments for short and extended stays — currently featuring a cozy 2-bedroom
            apartment in {apartment.location}.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {highlights.map(({ icon: Icon, label }) => (
              <div key={label} className="centered gap-2 text-sm text-foreground-muted">
                <Icon size={16} className="text-gold" /> {label}
              </div>
            ))}
          </div>

          <div className="centered gap-6">
            <p className="font-display text-2xl text-foreground">
              {formatNaira(apartment.pricePerNight)}
              <span className="text-sm text-foreground-subtle font-body"> / night</span>
            </p>
            <Link
              to="/apartments"
              className="centered gap-2 bg-gold text-charcoal font-display px-6 py-3 rounded-full hover:-translate-y-0.5 transition-transform duration-200"
            >
              Explore Apartments <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src={apartment.images[0]}
            alt={`${apartment.name} living room`}
            className="col-span-2 aspect-[16/10] rounded-2xl object-cover w-full"
          />
          <img
            src={apartment.images[1]}
            alt={`${apartment.name} bedroom`}
            className="aspect-square rounded-2xl object-cover w-full"
          />
          <img
            src={apartment.images[2]}
            alt={`${apartment.name} kitchenette`}
            className="aspect-square rounded-2xl object-cover w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default ApartmentsTeaser
