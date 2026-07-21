import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'
import { locations } from '../assets/locations'
import Reveal from '../components/Reveal'

const Locations = () => {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Service Areas</p>
          <h1 className="font-display text-3xl md:text-5xl text-foreground">
            Where We Operate
          </h1>
          <p className="text-foreground-muted mt-4 max-w-xl">
            Based in Lagos, serving the whole city — with rentals available anywhere within or
            outside Lagos on request.
          </p>
        </div>

        <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <Link
              key={location.slug}
              to={`/locations/${location.slug}`}
              className="group block bg-surface border border-border rounded-2xl p-6 hover:border-gold/50 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-full bg-gold/10 center-item mb-5">
                <MapPin size={18} className="text-gold" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">{location.name}</h3>
              <p className="text-sm text-foreground-subtle leading-relaxed mb-4 line-clamp-3">
                {location.intro}
              </p>
              <span className="centered gap-1.5 text-sm text-gold">
                Learn More <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </Reveal>
      </div>
    </div>
  )
}

export default Locations
