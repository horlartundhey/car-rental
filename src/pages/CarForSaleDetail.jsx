import { useParams, Link } from 'react-router-dom'
import { Fuel, Calendar, Tag, ShieldCheck, Check } from 'lucide-react'
import { carsForSale } from '../assets/carsForSale'
import { formatNaira, generateWhatsAppPurchaseInquiryLink } from '../utils/whatsapp'
import WhatsAppButton from '../components/WhatsAppButton'

const CarForSaleDetail = () => {
  const { id } = useParams()
  const car = carsForSale.find((c) => c.id === Number(id))

  if (!car) {
    return (
      <div className="min-h-screen pt-40 pb-24 text-center px-6">
        <h1 className="font-display text-3xl text-foreground mb-4">Listing Not Found</h1>
        <p className="text-foreground-subtle mb-8">This vehicle may no longer be available.</p>
        <Link to="/buy-cars" className="text-gold hover:text-foreground transition-colors">
          Back to Buy a Car
        </Link>
      </div>
    )
  }

  const {
    name,
    brand,
    year,
    price,
    condition,
    transmission,
    fuel,
    warranty,
    images,
    features,
    description,
  } = car

  const inquiryLink = generateWhatsAppPurchaseInquiryLink(car)

  const specs = [
    { icon: Calendar, label: 'Year', value: year },
    { icon: ShieldCheck, label: 'Condition', value: condition },
    { icon: Tag, label: 'Transmission', value: transmission },
    { icon: Fuel, label: 'Fuel Type', value: fuel },
    { icon: ShieldCheck, label: 'Warranty', value: warranty },
  ]

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <Link
          to="/buy-cars"
          className="text-sm text-foreground-subtle hover:text-gold transition-colors"
        >
          &larr; Back to Buy a Car
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6">
          <div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border">
              <img
                src={images[0]}
                alt={`${brand} ${name}`}
                className="w-full h-full object-cover"
              />
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
                      alt={`${brand} ${name} view ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-2">{condition}</p>
            <h1 className="font-display text-3xl md:text-4xl text-foreground">
              {brand} {name}
            </h1>
            <p className="font-display text-2xl text-foreground mt-4">{formatNaira(price)}</p>

            <p className="text-foreground-muted leading-relaxed mt-6">{description}</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
              {specs.map(({ icon: Icon, label, value }) => (
                <div key={label}>
                  <Icon size={16} className="text-gold mb-1.5" />
                  <p className="text-xs text-foreground-subtle">{label}</p>
                  <p className="text-sm text-foreground mt-0.5">{value}</p>
                </div>
              ))}
            </div>

            {features?.length > 0 && (
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-foreground font-display mb-4">Features</p>
                <div className="grid grid-cols-2 gap-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-foreground-muted">
                      <Check size={14} className="text-gold shrink-0" /> {feature}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <WhatsAppButton
              href={inquiryLink}
              label="Inquire on WhatsApp"
              className="justify-center w-full bg-gold text-charcoal font-display px-7 py-4 rounded-full mt-10 hover:-translate-y-0.5 transition-transform duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarForSaleDetail
