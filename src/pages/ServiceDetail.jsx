import { useParams, Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import { services } from '../assets/services'
import { cars } from '../assets/assets'
import { faqs } from '../assets/faqs'
import VehicleCard from '../components/VehicleCard'
import WhatsAppButton from '../components/WhatsAppButton'
import { generateWhatsAppContactLink } from '../utils/whatsapp'

const ServiceDetail = () => {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="min-h-screen pt-40 pb-24 text-center px-6">
        <h1 className="font-display text-3xl text-foreground mb-4">Service Not Found</h1>
        <p className="text-foreground-subtle mb-8">This service page may no longer be available.</p>
        <Link to="/services" className="text-gold hover:text-foreground transition-colors">
          Back to Services
        </Link>
      </div>
    )
  }

  const { title, heroImage, description, benefits, useCases, relatedCategory, faqSlugs } =
    service

  const relatedVehicles = (
    relatedCategory ? cars.filter((car) => car.category === relatedCategory) : cars
  ).slice(0, 3)

  const relatedFaqs = faqs.filter((faq) => faqSlugs?.includes(faq.slug))

  const contactLink = generateWhatsAppContactLink(
    `Hello, I'd like to know more about your ${title} service.`
  )

  return (
    <div className="min-h-screen pb-24">
      {/* Hero band sits on photography — stays permanently dark regardless
          of site theme, matching HeroSection/VideoSection/About hero. */}
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <img src={heroImage} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/40" />
        <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-end pb-12 pt-32">
          <Link to="/services" className="text-sm text-zinc-300 hover:text-gold transition-colors mb-4">
            &larr; Back to Services
          </Link>
          <h1 className="font-display text-3xl md:text-5xl text-offwhite max-w-2xl">{title}</h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          <div className="lg:col-span-2">
            <p className="text-foreground-muted leading-relaxed text-base">{description}</p>

            {benefits?.length > 0 && (
              <div className="mt-10">
                <h2 className="font-display text-xl text-foreground mb-5">Why Choose This Service</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2 text-sm text-foreground-muted">
                      <Check size={14} className="text-gold shrink-0 mt-0.5" /> {benefit}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {useCases?.length > 0 && (
              <div className="mt-10">
                <h2 className="font-display text-xl text-foreground mb-5">Suited For</h2>
                <ul className="space-y-2">
                  {useCases.map((useCase) => (
                    <li key={useCase} className="text-sm text-foreground-muted">
                      — {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {relatedFaqs.length > 0 && (
              <div className="mt-10">
                <h2 className="font-display text-xl text-foreground mb-5">Common Questions</h2>
                <div className="space-y-6">
                  {relatedFaqs.map((faq) => (
                    <div key={faq.slug}>
                      <p className="text-sm text-foreground font-medium mb-1.5">{faq.question}</p>
                      <p className="text-sm text-foreground-subtle leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="bg-surface border border-border rounded-2xl p-6 sticky top-24">
              <h3 className="font-display text-lg text-foreground mb-2">Ready to Book?</h3>
              <p className="text-sm text-foreground-subtle mb-5">
                Message us on WhatsApp and we'll confirm availability and pricing directly.
              </p>
              <WhatsAppButton
                href={contactLink}
                label="Chat on WhatsApp"
                className="justify-center w-full bg-gold text-charcoal font-display py-3 rounded-full"
              />
            </div>
          </div>
        </div>

        {relatedVehicles.length > 0 && (
          <div className="mt-16">
            <div className="flex items-end justify-between gap-4 flex-wrap mb-8">
              <h2 className="font-display text-2xl text-foreground">Related Vehicles</h2>
              <Link
                to="/fleet"
                className="centered gap-1.5 text-sm text-foreground/70 hover:text-gold transition-colors"
              >
                View Full Fleet <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedVehicles.map((car) => (
                <VehicleCard key={car.id} vehicle={car} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ServiceDetail
