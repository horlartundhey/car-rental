import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Resets scroll position on every route change. Without this, React Router
// keeps the browser's current scroll offset when navigating, so clicking
// into a new page can land you mid-way down it instead of at the top.
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // explicit 'instant' overrides the global CSS scroll-behavior: smooth,
    // so navigating to a new page doesn't animate-scroll up first.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

export default ScrollToTop
