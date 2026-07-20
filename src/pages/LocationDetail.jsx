import { useParams, Link } from 'react-router-dom'
import { Check, ArrowRight, Home } from 'lucide-react'
import { locations } from '../assets/locations'
import { services } from '../assets/services'
import WhatsAppButton from '../components/WhatsAppButton'
import { generateWhatsAppContactLink } from '../utils/whatsapp'

const LocationDetail = () => {
  const { slug } = useParams()
  const location = locations.find((loc) => loc.slug === slug)

  if (!location) {
    return (
      <div className="min-h-screen pt-40 pb-24 text-center px-6">
        <h1 className="font-display text-3xl text-foreground mb-4">Location Not Found</h1>
        <p className="text-foreground-subtle mb-8">This location page may no longer be available.</p>
        <Link to="/locations" className="text-gold hover:text-foreground transition-colors">
          Back to Locations
        </Link>
      </div>
    )
  }

  const { name, heading, intro, whyChooseUs, relatedServiceSlugs, apartmentCallout } = location

  const relatedServices = services.filter((service) =>
    relatedServiceSlugs?.includes(service.slug)
  )

  const contactLink = generateWhatsAppContactLink(
    `Hello, I'd like to book a vehicle in ${name}. Could you tell me more?`
  )

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/locations" className="text-sm text-foreground-subtle hover:text-gold transition-colors">
          &larr; Back to Service Areas
        </Link>

        <p className="text-gold text-sm tracking-[0.2em] uppercase mt-6 mb-3">Service Area</p>
        <h1 className="font-display text-3xl md:text-5xl text-foreground mb-6">{heading}</h1>
        <p className="text-foreground-muted leading-relaxed text-base">{intro}</p>

        {apartmentCallout && (
          <div className="mt-8 bg-surface border border-gold/20 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-gold/10 center-item shrink-0">
              <Home size={18} className="text-gold" />
            </div>
            <div>
              <p className="text-foreground font-display mb-1">Staying in Ikeja?</p>
              <p className="text-sm text-foreground-subtle mb-3">
                We manage a furnished 2-bedroom shortlet apartment in Adeniyi Jones, Ikeja —
                available for short or extended stays.
              </p>
              <Link
                to="/apartments"
                className="centered gap-1.5 text-sm text-gold hover:text-foreground transition-colors"
              >
                View the Apartment <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}

        {whyChooseUs?.length > 0 && (
          <div className="mt-10">
            <h2 className="font-display text-xl text-foreground mb-5">
              Why Rent With Us in {name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseUs.map((point) => (
                <div key={point} className="flex items-start gap-2 text-sm text-foreground-muted">
                  <Check size={14} className="text-gold shrink-0 mt-0.5" /> {point}
                </div>
              ))}
            </div>
          </div>
        )}

        {relatedServices.length > 0 && (
          <div className="mt-10">
            <h2 className="font-display text-xl text-foreground mb-5">Relevant Services</h2>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="centered gap-1.5 text-sm text-foreground bg-surface border border-border rounded-full px-4 py-2 hover:border-gold/50 hover:text-gold transition-colors"
                >
                  {service.title} <ArrowRight size={13} />
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 bg-surface border border-border rounded-2xl p-6">
          <h3 className="font-display text-lg text-foreground mb-2">Ready to Book in {name}?</h3>
          <p className="text-sm text-foreground-subtle mb-5">
            Message us on WhatsApp and we'll confirm availability directly.
          </p>
          <WhatsAppButton
            href={contactLink}
            label="Chat on WhatsApp"
            className="justify-center w-full sm:w-fit bg-gold text-charcoal font-display px-7 py-3 rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default LocationDetail
