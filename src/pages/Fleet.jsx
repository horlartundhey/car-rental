import { useSearchParams } from 'react-router-dom'
import { cars } from '../assets/assets'
import VehicleCard from '../components/VehicleCard'
import FleetFilters from '../components/FleetFilters'

const Fleet = () => {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')
  const brand = searchParams.get('brand')
  const transmission = searchParams.get('transmission')
  const seats = searchParams.get('seats')

  const filteredCars = cars.filter((car) => {
    if (category && car.category !== category) return false
    if (brand && car.brand !== brand) return false
    if (transmission && car.transmission !== transmission) return false
    if (seats && car.seats < Number(seats)) return false
    return true
  })

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Our Fleet</p>
          <h1 className="font-display text-3xl md:text-5xl text-foreground">Find Your Vehicle</h1>
        </div>

        <div className="mb-10">
          <FleetFilters />
        </div>

        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <VehicleCard key={car.id} vehicle={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-foreground-muted font-display text-xl mb-2">
              No vehicles match these filters
            </p>
            <p className="text-foreground-subtle text-sm">Try adjusting or clearing your filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Fleet
