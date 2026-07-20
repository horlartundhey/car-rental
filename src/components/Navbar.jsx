import { Gauge, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import WhatsAppButton from './WhatsAppButton'
import ThemeToggle from './ThemeToggle'
import { siteSettings } from '../config/settings'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Fleet', path: '/fleet' },
  { name: 'Apartments', path: '/apartments' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const desktopLinkClass = ({ isActive }) =>
    `text-sm whitespace-nowrap transition-colors duration-200 ${
      isActive ? 'text-gold font-medium' : 'text-foreground/70 hover:text-gold'
    }`

  const mobileLinkClass = ({ isActive }) =>
    `text-2xl font-display py-4 border-b border-border transition-colors duration-200 ${
      isActive ? 'text-gold' : 'text-foreground hover:text-gold'
    }`

  return (
    <>
      <header
        className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full border border-border ${
          isScrolled
            ? 'h-14 bg-background/80 backdrop-blur-xl scale-95 w-[94%] max-w-4xl shadow-lg shadow-black/30'
            : 'h-16 bg-background/40 backdrop-blur-md w-[96%] max-w-5xl'
        }`}
      >
        <div className="mx-auto h-full px-6">
          <nav className="centered-row justify-between h-full">
            <Link to="/" className="centered shrink-0" onClick={() => setIsOpen(false)}>
              <Gauge size={24} className="text-gold shrink-0" />
              <p className="tracking-tighter text-base md:text-lg font-display text-foreground whitespace-nowrap">
                {siteSettings.businessName}
              </p>
            </Link>

            <div className="hidden md:flex items-center gap-5 shrink-0">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={desktopLinkClass}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-2 shrink-0">
              <ThemeToggle className="w-10 h-10 rounded-full bg-foreground/10 text-foreground hover:bg-gold hover:text-charcoal transition-colors duration-200" />
              <WhatsAppButton
                iconOnly
                label="Chat on WhatsApp"
                className="w-10 h-10 rounded-full bg-foreground/10 text-foreground hover:bg-gold hover:text-charcoal transition-colors duration-200 shrink-0"
              />
              <Link
                to="/fleet"
                className="font-display text-sm bg-gold text-charcoal px-5 py-2.5 rounded-full hover:-translate-y-0.5 transition-transform duration-200 whitespace-nowrap"
              >
                Rent a Car
              </Link>
            </div>

            <div className="md:hidden centered gap-1 shrink-0">
              <ThemeToggle className="w-9 h-9 rounded-full text-foreground" />
              <button
                className="text-foreground p-1"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile nav overlay — rendered as a sibling of <header>, not a descendant.
          header has backdrop-blur, which creates a containing block for fixed
          descendants; nesting this inside it would break "fixed inset-0". */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-999 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="centered-row justify-between h-20 px-6 border-b border-border shrink-0">
          <span className="font-display text-lg text-foreground">{siteSettings.businessName}</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-foreground p-1"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col px-6 overflow-y-auto">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="px-6 pb-8 pt-4 shrink-0">
          <WhatsAppButton
            label="Book on WhatsApp"
            className="w-full justify-center bg-gold text-charcoal font-display py-3 rounded-full"
          />
          <p className="text-center text-sm text-foreground-subtle mt-6">
            &copy; {new Date().getFullYear()}{' '}
            <span className="font-semibold text-foreground-muted">{siteSettings.businessName}</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </>
  )
}

export default Navbar
