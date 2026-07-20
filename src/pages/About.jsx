import { Link } from 'react-router-dom'
import { ArrowRight, Car, Home as HomeIcon, ShieldCheck, Clock } from 'lucide-react'
import heroImage from '../assets/hero.jpg'
import { siteSettings } from '../config/settings'

const pillars = [
  {
    icon: Car,
    title: 'Reliable Vehicles',
    description: 'A well-maintained fleet of Toyota and Lexus SUVs, kept road-ready for Lagos conditions.',
  },
  {
    icon: HomeIcon,
    title: 'A Place to Stay',
    description: 'A furnished shortlet apartment for visitors who need lodging as well as a vehicle.',
  },
  {
    icon: ShieldCheck,
    title: 'Professional Drivers',
    description: 'Chauffeurs included on every rental, so getting around Lagos is one less thing to manage.',
  },
  {
    icon: Clock,
    title: 'Flexible Terms',
    description: 'Daily, weekly, or monthly bookings, arranged directly with our team on WhatsApp.',
  },
]

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero band sits on photography — stays permanently dark regardless
          of site theme, matching HeroSection/VideoSection/ServiceDetail hero. */}
      <section className="relative h-[45vh] min-h-[320px] overflow-hidden">
        <img
          src={heroImage}
          alt="Brick 'N' Wheels vehicle in the city"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/40" />
        <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-end pb-12 pt-32">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">About Us</p>
          <h1 className="font-display text-3xl md:text-5xl text-offwhite max-w-2xl">
            {siteSettings.tagline}
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <h2 className="font-display text-2xl md:text-3xl text-foreground mb-5">What We Do</h2>
        <p className="text-foreground-muted leading-relaxed">
          {siteSettings.businessName} started as a car rental service in Lagos and grew into
          something broader — the idea that moving through a city and finding somewhere to stay
          in it shouldn't require two separate headaches. Today we handle both: a fleet of
          well-kept SUVs and family vehicles with chauffeurs available on request, and a
          furnished shortlet apartment for visitors who need a place to land.
        </p>
        <p className="text-foreground-muted leading-relaxed mt-4">
          We work with expatriates, tourists, and locals alike — airport pickups, weddings,
          corporate travel, and everyday rentals, anywhere within or outside Lagos.
        </p>

        <h2 className="font-display text-2xl md:text-3xl text-foreground mt-14 mb-5">
          Our Approach
        </h2>
        <p className="text-foreground-muted leading-relaxed">
          We keep things simple: well-maintained vehicles, drivers who know the city, and direct
          communication over WhatsApp instead of layers of booking forms. If something needs
          fixing — a vehicle, a booking, an expectation — we'd rather hear about it directly and
          sort it out.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-surface border border-border rounded-2xl p-6">
              <div className="w-11 h-11 rounded-full bg-gold/10 center-item mb-5">
                <Icon size={18} className="text-gold" />
              </div>
              <h3 className="font-display text-base text-foreground mb-2">{title}</h3>
              <p className="text-sm text-foreground-subtle leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/fleet"
            className="centered gap-2 bg-gold text-charcoal font-display px-7 py-3.5 rounded-full hover:-translate-y-0.5 transition-transform duration-200 w-fit mx-auto"
          >
            Explore Our Fleet <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
