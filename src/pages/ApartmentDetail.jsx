import { useParams, Link } from 'react-router-dom'
import { BedDouble, Bath, MapPin, Check, BadgePercent } from 'lucide-react'
import { apartments } from '../assets/apartments'
import { formatNaira, generateWhatsAppApartmentBookingLink } from '../utils/whatsapp'
import WhatsAppButton from '../components/WhatsAppButton'

const ApartmentDetail = () => {
  const { id } = useParams()
  const apartment = apartments.find((apt) => apt.id === Number(id))

  if (!apartment) {
    return (
      <div className="min-h-screen pt-40 pb-24 text-center px-6">
        <h1 className="font-display text-3xl text-foreground mb-4">Apartment Not Found</h1>
        <p className="text-foreground-subtle mb-8">This listing may no longer be available.</p>
        <Link to="/apartments" className="text-gold hover:text-foreground transition-colors">
          Back to Apartments
        </Link>
      </div>
    )
  }

  const {
    name,
    location,
    bedrooms,
    bathrooms,
    pricePerNight,
    discountNote,
    images,
    description,
    amenities,
  } = apartment

  const bookingLink = generateWhatsAppApartmentBookingLink(apartment)

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <Link
          to="/apartments"
          className="text-sm text-foreground-subtle hover:text-gold transition-colors"
        >
          &larr; Back to Apartments
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6">
          <div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border">
              <img src={images[0]} alt={name} className="w-full h-full object-cover" />
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-3 mt-3">
                {images.map((img, i) => (
                  <div
                    key={img}
                    className="aspect-square rounded-lg overflow-hidden border border-border"
                  >
                    <img
                      src={img}
                      alt={`${name} view ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-2 centered gap-1.5">
              <MapPin size={14} /> {location}
            </p>
            <h1 className="font-display text-3xl md:text-4xl text-foreground">{name}</h1>
            <p className="font-display text-2xl text-foreground mt-4">
              {formatNaira(pricePerNight)}{' '}
              <span className="text-sm text-foreground-subtle font-body">/ night</span>
            </p>
            {discountNote && (
              <p className="centered gap-1.5 text-sm text-gold mt-2">
                <BadgePercent size={15} /> {discountNote}
              </p>
            )}

            <p className="text-foreground-muted leading-relaxed mt-6">{description}</p>

            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border">
              <div>
                <BedDouble size={16} className="text-gold mb-1.5" />
                <p className="text-xs text-foreground-subtle">Bedrooms</p>
                <p className="text-sm text-foreground mt-0.5">{bedrooms}</p>
              </div>
              <div>
                <Bath size={16} className="text-gold mb-1.5" />
                <p className="text-xs text-foreground-subtle">Bathrooms</p>
                <p className="text-sm text-foreground mt-0.5">{bathrooms}</p>
              </div>
            </div>

            {amenities?.length > 0 && (
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-foreground font-display mb-4">Amenities</p>
                <div className="grid grid-cols-2 gap-3">
                  {amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2 text-sm text-foreground-muted">
                      <Check size={14} className="text-gold shrink-0" /> {amenity}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <WhatsAppButton
              href={bookingLink}
              label="Book This Apartment on WhatsApp"
              className="justify-center w-full bg-gold text-charcoal font-display px-7 py-4 rounded-full mt-10 hover:-translate-y-0.5 active:scale-95 transition-transform duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApartmentDetail
