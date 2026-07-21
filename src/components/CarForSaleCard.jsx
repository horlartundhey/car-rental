import { Link } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'
import { formatNaira } from '../utils/whatsapp'

const CarForSaleCard = ({ car }) => {
  const { id, images, name, brand, year, condition, price, warranty } = car

  return (
    <div className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-gold/50 transition-colors duration-300">
      <Link to={`/buy-cars/${id}`} className="block aspect-[4/3] overflow-hidden">
        <img
          src={images[0]}
          alt={`${brand} ${name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs uppercase tracking-wider text-gold">{condition}</p>
            <h3 className="font-display text-lg text-foreground mt-1">
              {brand} {name}
            </h3>
          </div>
          <span className="text-xs text-foreground-subtle shrink-0">{year}</span>
        </div>

        <div className="flex items-center gap-4 mt-4 text-foreground-muted text-sm">
          <span className="centered gap-1.5">
            <ShieldCheck size={14} /> {warranty}
          </span>
        </div>

        <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
          <div>
            <p className="font-display text-xl text-foreground">{formatNaira(price)}</p>
            <p className="text-xs text-foreground-subtle">asking price</p>
          </div>
          <Link
            to={`/buy-cars/${id}`}
            className="text-sm font-medium text-charcoal bg-gold px-4 py-2 rounded-full hover:-translate-y-0.5 transition-transform duration-200"
          >
            View Listing
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CarForSaleCard
