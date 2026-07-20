import { siteSettings } from '../config/settings'

export function formatNaira(amount) {
  return `₦${amount.toLocaleString('en-NG')}`
}

function toWhatsAppDigits(number) {
  return number.replace(/[^\d]/g, '')
}

// Builds a wa.me link with a pre-filled, editable booking message for a specific vehicle.
export function generateWhatsAppBookingLink(vehicle, { dates } = {}) {
  const vehicleUrl =
    typeof window !== 'undefined' ? `${window.location.origin}/fleet/${vehicle.id}` : ''

  const lines = [
    'Hello, I would like to book the following vehicle:',
    '',
    `Vehicle: ${vehicle.name}`,
    `Category: ${vehicle.category}`,
    `Daily Rate: ${formatNaira(vehicle.price)}/day`,
  ]

  if (dates) lines.push(`Preferred Dates: ${dates}`)
  if (vehicleUrl) lines.push('', `Vehicle page: ${vehicleUrl}`)
  lines.push('', 'Please let me know availability and booking details. Thank you.')

  const encodedMessage = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${toWhatsAppDigits(siteSettings.whatsappNumber)}?text=${encodedMessage}`
}

// Builds a wa.me link with a pre-filled, editable booking message for a specific apartment.
export function generateWhatsAppApartmentBookingLink(apartment, { nights } = {}) {
  const apartmentUrl =
    typeof window !== 'undefined' ? `${window.location.origin}/apartments/${apartment.id}` : ''

  const lines = [
    'Hello, I would like to book the following apartment:',
    '',
    `Apartment: ${apartment.name}`,
    `Location: ${apartment.location}`,
    `Rate: ${formatNaira(apartment.pricePerNight)}/night`,
  ]

  if (nights) lines.push(`Number of Nights: ${nights}`)
  if (apartmentUrl) lines.push('', `Apartment page: ${apartmentUrl}`)
  lines.push('', 'Please let me know availability and booking details. Thank you.')

  const encodedMessage = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${toWhatsAppDigits(siteSettings.whatsappNumber)}?text=${encodedMessage}`
}

// General-purpose WhatsApp contact link (nav, footer, sticky button) not tied to a
// specific vehicle or apartment.
export function generateWhatsAppContactLink(
  message = `Hello, I'm interested in ${siteSettings.businessName}'s car rental and apartment services. Could you tell me more?`
) {
  return `https://wa.me/${toWhatsAppDigits(siteSettings.whatsappNumber)}?text=${encodeURIComponent(message)}`
}
