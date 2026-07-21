import { apartments } from '../assets/apartments'
import ApartmentCard from '../components/ApartmentCard'
import Reveal from '../components/Reveal'

const Apartments = () => {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Shortlet Apartments</p>
          <h1 className="font-display text-3xl md:text-5xl text-foreground">
            Comfortable Stays in Lagos
          </h1>
          <p className="text-foreground-muted mt-4 max-w-xl">
            Fully furnished apartments for short and extended stays, with free airport pickup and
            dropoff available.
          </p>
        </div>

        <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apartments.map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))}
        </Reveal>
      </div>
    </div>
  )
}

export default Apartments
