import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const ServiceCard = ({ service }) => {
  const { slug, title, shortDescription, heroImage } = service

  return (
    <Link
      to={`/services/${slug}`}
      className="group block bg-surface border border-border rounded-2xl overflow-hidden hover:border-gold/50 transition-colors duration-300"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg text-foreground mb-2">{title}</h3>
        <p className="text-sm text-foreground-subtle leading-relaxed mb-4">{shortDescription}</p>
        <span className="centered gap-1.5 text-sm text-gold">
          Learn More <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  )
}

export default ServiceCard
