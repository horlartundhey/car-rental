import { useSearchParams } from 'react-router-dom'
import { cars } from '../assets/assets'

const categories = [...new Set(cars.map((c) => c.category))]
const brands = [...new Set(cars.map((c) => c.brand))].sort()
const transmissions = [...new Set(cars.map((c) => c.transmission))]
const seatOptions = [...new Set(cars.map((c) => c.seats))].sort((a, b) => a - b)

const selectClass =
  'bg-surface border border-border text-foreground text-sm rounded-full px-4 py-2 focus:outline-none focus:border-gold transition-colors cursor-pointer'

const FleetFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const update = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value) params.set(key, value)
    else params.delete(key)
    setSearchParams(params)
  }

  const hasActiveFilters = ['category', 'brand', 'transmission', 'seats'].some((k) =>
    searchParams.get(k)
  )

  return (
    <div className="flex flex-wrap items-center gap-3">
      <select
        className={selectClass}
        value={searchParams.get('category') || ''}
        onChange={(e) => update('category', e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select
        className={selectClass}
        value={searchParams.get('brand') || ''}
        onChange={(e) => update('brand', e.target.value)}
      >
        <option value="">All Brands</option>
        {brands.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>

      <select
        className={selectClass}
        value={searchParams.get('transmission') || ''}
        onChange={(e) => update('transmission', e.target.value)}
      >
        <option value="">Any Transmission</option>
        {transmissions.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <select
        className={selectClass}
        value={searchParams.get('seats') || ''}
        onChange={(e) => update('seats', e.target.value)}
      >
        <option value="">Any Seats</option>
        {seatOptions.map((s) => (
          <option key={s} value={s}>
            {s}+ Seats
          </option>
        ))}
      </select>

      {hasActiveFilters && (
        <button
          onClick={() => setSearchParams({})}
          className="text-sm text-gold hover:text-foreground underline underline-offset-2 transition-colors"
        >
          Clear filters
        </button>
      )}
    </div>
  )
}

export default FleetFilters
