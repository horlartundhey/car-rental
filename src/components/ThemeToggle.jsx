import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

// Icon shown is the mode you'd switch TO, not the current mode.
const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`center-item shrink-0 active:scale-90 transition-transform duration-200 ${className}`}
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

export default ThemeToggle
