import { MessageCircle } from 'lucide-react'
import { generateWhatsAppContactLink } from '../utils/whatsapp'

// Reusable WhatsApp CTA. Pass `href` to link a specific pre-filled message
// (e.g. a vehicle booking link); otherwise falls back to a general contact link.
const WhatsAppButton = ({ href, label = 'Book on WhatsApp', iconOnly = false, className = '' }) => {
  const link = href || generateWhatsAppContactLink()

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`centered gap-2 ${className}`}
    >
      <MessageCircle size={iconOnly ? 22 : 18} />
      {!iconOnly && <span>{label}</span>}
    </a>
  )
}

export default WhatsAppButton
