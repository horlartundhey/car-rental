import { carsForSale } from '../assets/carsForSale'
import CarForSaleCard from '../components/CarForSaleCard'

const BuyCars = () => {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Buy a Car</p>
          <h1 className="font-display text-3xl md:text-5xl text-foreground">
            Brand New Vehicles For Sale
          </h1>
          <p className="text-foreground-muted mt-4 max-w-xl">
            Factory-fresh vehicles available for outright purchase, backed by manufacturer
            warranty. Message us on WhatsApp for pricing and delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {carsForSale.map((car) => (
            <CarForSaleCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BuyCars
