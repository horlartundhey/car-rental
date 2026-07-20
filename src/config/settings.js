// Single source of truth for business/contact info.
// Business name and phone number are real, sourced from the client's own
// promotional flyers. Email is still a placeholder pending the real one.
// In a later phase this will be fetched from a SiteSettings API instead of hardcoded here.
export const siteSettings = {
  businessName: "Brick 'N' Wheels",
  tagline: 'A complete life package',
  whatsappNumber: '+2348038831526',
  phone: '+2348038831526',
  email: 'bookings@bricknwheels.ng',
  address: 'Ikeja, Lagos, Nigeria',
  serviceAreas: ['Lagos', 'Ikeja', 'Lekki', 'Victoria Island', 'Ikoyi'],
  businessHours: 'Mon – Sun, 7:00am – 11:00pm',
  socialLinks: {
    instagram: '#',
    twitter: '#',
    facebook: '#',
  },
}

export default siteSettings
