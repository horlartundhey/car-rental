import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const FinalCTA = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="bg-gradient-to-br from-zinc-900 to-charcoal border border-gold/20 rounded-3xl px-8 py-16 md:py-20 text-center">
        <h2 className="font-display text-3xl md:text-5xl text-offwhite">Ready to Ride?</h2>
        <p className="text-zinc-400 mt-4 max-w-lg mx-auto">
          Your next journey through Lagos starts with the right vehicle. Explore the fleet and
          book in minutes.
        </p>
        <Link
          to="/fleet"
          className="centered gap-2 bg-gold text-charcoal font-display px-8 py-3.5 rounded-full mt-8 hover:-translate-y-0.5 transition-transform duration-200 w-fit mx-auto"
        >
          Start Your Booking <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}

export default FinalCTA
