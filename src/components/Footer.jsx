import { Link } from 'react-router-dom'
import { Gauge, Mail, MapPin, Phone } from 'lucide-react'
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa'
import WhatsAppButton from './WhatsAppButton'
import { siteSettings } from '../config/settings'
import { locations } from '../assets/locations'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Rent a Car', path: '/fleet' },
  { name: 'Buy a Car', path: '/buy-cars' },
  { name: 'Apartments', path: '/apartments' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
]

const socialIcons = [
  { icon: FaInstagram, href: siteSettings.socialLinks.instagram, label: 'Instagram' },
  { icon: FaTwitter, href: siteSettings.socialLinks.twitter, label: 'Twitter' },
  { icon: FaFacebookF, href: siteSettings.socialLinks.facebook, label: 'Facebook' },
]

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8 mt-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <Link to="/" className="centered">
            <Gauge size={24} className="text-gold" />
            <span className="font-display text-xl text-foreground">{siteSettings.businessName}</span>
          </Link>
          <p className="text-sm text-foreground-subtle mt-4 leading-relaxed">
            {siteSettings.tagline} — car rental, chauffeur service, and shortlet apartments
            across Lagos.
          </p>
          <div className="flex items-center gap-3 mt-5">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-border center-item text-foreground-muted hover:text-gold hover:border-gold/40 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm text-foreground uppercase tracking-wider mb-4">
            Navigation
          </h4>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-foreground-subtle hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm text-foreground uppercase tracking-wider mb-4">
            Service Areas
          </h4>
          <ul className="space-y-3">
            {locations.map((location) => (
              <li key={location.slug}>
                <Link
                  to={`/locations/${location.slug}`}
                  className="text-sm text-foreground-subtle hover:text-gold transition-colors"
                >
                  {location.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm text-foreground uppercase tracking-wider mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-foreground-subtle">
            <li className="flex items-start gap-2">
              <Phone size={15} className="mt-0.5 shrink-0 text-gold" />
              {siteSettings.phone}
            </li>
            <li className="flex items-start gap-2">
              <Mail size={15} className="mt-0.5 shrink-0 text-gold" />
              {siteSettings.email}
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0 text-gold" />
              {siteSettings.address}
            </li>
          </ul>
          <WhatsAppButton className="mt-5 text-sm text-gold hover:text-foreground transition-colors" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 pt-6 border-t border-border text-center text-xs text-foreground-subtle">
        &copy; {new Date().getFullYear()} {siteSettings.businessName}. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
