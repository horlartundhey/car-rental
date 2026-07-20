import { Link } from 'react-router-dom'
import { Car, UserCheck, Plane, Building2, Heart, ArrowRight } from 'lucide-react'
import { services } from '../assets/services'

const iconBySlug = {
  'car-rental': Car,
  'executive-suv-rental': Car,
  'chauffeur-service': UserCheck,
  'airport-transfer': Plane,
  'corporate-car-hire': Building2,
  'event-wedding-transportation': Heart,
}

const ServicesTeaser = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="flex items-end justify-between gap-4 flex-wrap mb-12">
        <div>
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Services</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground max-w-xl">
            More Than Just a Rental
          </h2>
        </div>
        <Link
          to="/services"
          className="centered gap-1.5 text-sm text-foreground/70 hover:text-gold transition-colors"
        >
          View All Services <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ slug, title, shortDescription }) => {
          const Icon = iconBySlug[slug] ?? Car
          return (
            <Link
              key={slug}
              to={`/services/${slug}`}
              className="block bg-surface border border-border rounded-2xl p-6 hover:border-gold/40 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-full bg-gold/10 center-item mb-5">
                <Icon size={18} className="text-gold" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">{title}</h3>
              <p className="text-sm text-foreground-subtle leading-relaxed">{shortDescription}</p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default ServicesTeaser
