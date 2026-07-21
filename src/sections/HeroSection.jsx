import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import WhatsAppButton from '../components/WhatsAppButton'
import heroImage from '../assets/hero.jpg'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Premium chauffeur-driven car against the city skyline at night"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 md:py-0 w-full">
        <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
          Premium Car Rental — Lagos
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-offwhite max-w-3xl leading-[1.05]">
          Move Through Lagos in Comfort and Style.
        </h1>
        <p className="text-zinc-300 text-base md:text-lg mt-6 max-w-xl leading-relaxed">
          Premium car rentals, chauffeur services, and executive transportation
          designed for every journey.
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-10">
          <Link
            to="/fleet"
            className="centered gap-2 bg-gold text-charcoal font-display px-7 py-3.5 rounded-full hover:-translate-y-0.5 active:scale-95 transition-transform duration-200"
          >
            Explore Our Fleet <ArrowRight size={18} />
          </Link>
          <WhatsAppButton
            label="Book on WhatsApp"
            className="border border-white/20 text-offwhite px-7 py-3.5 rounded-full hover:border-gold hover:text-gold transition-colors duration-200"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
