import { services } from '../assets/services'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Services</p>
          <h1 className="font-display text-3xl md:text-5xl text-foreground">
            More Than Just a Rental
          </h1>
          <p className="text-foreground-muted mt-4 max-w-xl">
            A complete life package — car rental, chauffeur service, airport transfers, and
            transportation for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
