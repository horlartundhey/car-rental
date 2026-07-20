import { Sparkles, CalendarRange, ShieldCheck, MessageCircle, MapPin } from 'lucide-react'

const benefits = [
  {
    icon: Sparkles,
    title: 'Premium Vehicles',
    description: 'A meticulously maintained fleet of executive sedans and luxury SUVs.',
  },
  {
    icon: CalendarRange,
    title: 'Flexible Rental Options',
    description: 'Daily, weekly, or monthly rentals — on your own terms.',
  },
  {
    icon: ShieldCheck,
    title: 'Professional Service',
    description: 'Vetted, experienced chauffeurs who treat every trip with care.',
  },
  {
    icon: MessageCircle,
    title: 'Easy Booking',
    description: 'Browse, select, and confirm your booking directly on WhatsApp.',
  },
  {
    icon: MapPin,
    title: 'Available in Lagos',
    description: 'Serving Lagos, Ikeja, Lekki, Victoria Island, and Ikoyi.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="bg-background-alt border-y border-border">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Why Choose Us</p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12 max-w-xl">
          Built Around a Better Rental Experience
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title}>
              <div className="w-12 h-12 rounded-full bg-gold/10 center-item mb-4">
                <Icon size={20} className="text-gold" />
              </div>
              <h3 className="font-display text-base text-foreground mb-2">{title}</h3>
              <p className="text-sm text-foreground-subtle leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
