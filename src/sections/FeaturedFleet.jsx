import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cars } from '../assets/assets'
import VehicleCard from '../components/VehicleCard'

const featuredIds = [1, 5, 2, 4, 7, 6]
const featuredCars = featuredIds.map((id) => cars.find((car) => car.id === id)).filter(Boolean)

const FeaturedFleet = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="flex items-end justify-between gap-4 flex-wrap mb-10">
        <div>
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Featured Fleet</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            A Glimpse of Our Collection
          </h2>
        </div>
        <Link
          to="/fleet"
          className="centered gap-1.5 text-sm text-foreground/70 hover:text-gold transition-colors"
        >
          View Full Fleet <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredCars.map((car) => (
          <VehicleCard key={car.id} vehicle={car} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedFleet
