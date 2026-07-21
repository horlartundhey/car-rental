import { Link } from 'react-router-dom'
import { BedDouble, Bath, MapPin } from 'lucide-react'
import { formatNaira } from '../utils/whatsapp'

const ApartmentCard = ({ apartment }) => {
  const { id, images, name, location, bedrooms, bathrooms, pricePerNight } = apartment

  return (
    <div className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-gold/50 transition-colors duration-300">
      <Link to={`/apartments/${id}`} className="block aspect-[4/3] overflow-hidden">
        <img
          src={images[0]}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      <div className="p-5">
        <p className="text-xs uppercase tracking-wider text-gold centered gap-1.5">
          <MapPin size={12} /> {location}
        </p>
        <h3 className="font-display text-lg text-foreground mt-1">{name}</h3>

        <div className="flex items-center gap-4 mt-4 text-foreground-muted text-sm">
          <span className="centered gap-1.5">
            <BedDouble size={14} /> {bedrooms} Bed
          </span>
          <span className="centered gap-1.5">
            <Bath size={14} /> {bathrooms} Bath
          </span>
        </div>

        <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
          <div>
            <p className="font-display text-xl text-foreground">{formatNaira(pricePerNight)}</p>
            <p className="text-xs text-foreground-subtle">per night</p>
          </div>
          <Link
            to={`/apartments/${id}`}
            className="text-sm font-medium text-charcoal bg-gold px-4 py-2 rounded-full hover:-translate-y-0.5 active:scale-95 transition-transform duration-200"
          >
            View Apartment
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ApartmentCard
