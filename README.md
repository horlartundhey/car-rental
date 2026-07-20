# Brick 'N' Wheels

Premium car rental and shortlet apartment website for a Lagos-based business — "a complete life package."

## What it is

A React + Vite + Tailwind CSS v4 frontend for a real car rental and shortlet apartment business in Lagos, Nigeria. The primary conversion flow is WhatsApp-first: browse the fleet or apartment listing, tap a button, and a pre-filled WhatsApp message opens with the booking details.

## Pages

- **Home** — hero, featured fleet, background video, why-choose-us, apartments teaser, services teaser, how-it-works, CTA
- **Fleet** (`/fleet`) — filterable vehicle listing, real fleet of Toyota/Lexus SUVs and family vehicles
- **Car Detail** (`/fleet/:id`) — gallery, specs, features, WhatsApp booking
- **Apartments** (`/apartments`) — shortlet apartment listing
- **Apartment Detail** (`/apartments/:id`) — gallery, amenities, WhatsApp booking
- **Services** (`/services`) + detail pages (`/services/:slug`)
- **Locations** (`/locations`) + detail pages (`/locations/:slug`)
- **About**, **Contact** (WhatsApp-powered contact form), **FAQ**

## Stack

- React 19 + Vite + React Router
- Tailwind CSS v4 (CSS-variable based design tokens, with a light/dark theme toggle)
- Lucide + react-icons

## Development

```bash
npm install
npm run dev
```

## Status

Frontend-complete prototype. Backend (Node/Express/MongoDB) and the admin dashboard are intentionally deferred to a later phase — see `producd.md` for the full product/phasing spec.
