import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import WhatsAppButton from '../components/WhatsAppButton'
import { siteSettings } from '../config/settings'
import { generateWhatsAppContactLink } from '../utils/whatsapp'
import { locations } from '../assets/locations'

const inputClass =
  'w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-gold transition-colors'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = [
      'Hello, I would like to get in touch.',
      '',
      `Name: ${form.name}`,
      form.email && `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(generateWhatsAppContactLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Contact</p>
          <h1 className="font-display text-3xl md:text-5xl text-foreground">Get in Touch</h1>
          <p className="text-foreground-muted mt-4 max-w-xl">
            The fastest way to reach us is WhatsApp — but the form below works too, and it'll
            open a pre-filled WhatsApp message with your details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <WhatsAppButton
              label="Chat on WhatsApp"
              className="justify-center w-full bg-gold text-charcoal font-display py-3.5 rounded-full"
            />

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Phone size={17} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-foreground-subtle">Phone</p>
                  <p className="text-sm text-foreground">{siteSettings.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={17} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-foreground-subtle">Email</p>
                  <p className="text-sm text-foreground">{siteSettings.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={17} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-foreground-subtle">Address</p>
                  <p className="text-sm text-foreground">{siteSettings.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={17} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-foreground-subtle">Business Hours</p>
                  <p className="text-sm text-foreground">{siteSettings.businessHours}</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs text-foreground-subtle mb-3">Service Areas</p>
              <div className="flex flex-wrap gap-2">
                {locations.map((location) => (
                  <Link
                    key={location.slug}
                    to={`/locations/${location.slug}`}
                    className="text-sm text-foreground-muted bg-surface border border-border rounded-full px-4 py-1.5 hover:border-gold/50 hover:text-gold transition-colors"
                  >
                    {location.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />
            <textarea
              name="message"
              placeholder="How can we help?"
              rows={6}
              required
              value={form.message}
              onChange={handleChange}
              className={inputClass}
            />
            <button
              type="submit"
              className="bg-gold text-charcoal font-display px-7 py-3.5 rounded-full hover:-translate-y-0.5 active:scale-95 transition-transform duration-200"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
