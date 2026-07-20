# PROJECT: Premium Car Rental Website Prototype

You are a senior full-stack JavaScript engineer, UI/UX designer, product designer, and SEO specialist.

Build a beautiful, modern, premium car rental website prototype for a Lagos-based car rental business.

The primary goal of this project is to create a visually impressive, simple, professional, client-ready platform that can be presented to potential car rental businesses.

This is a prototype/MVP.

Do not over-engineer the project.

The system should be simple, maintainable, visually excellent, and easy to expand later.

==================================================
# PROJECT STATUS & PHASING NOTE
==================================================

This document has been updated after reviewing a reference competitor site
(theluxauto.com, a Lagos-based car hire brand) and reconciling this spec
with the current project scaffold.

Current scaffold reality (as of this update):

- React 19 + Vite frontend only. No backend exists yet.
- Brand name: LuxDrive. Dark charcoal / warm gold / off-white palette,
  editorial premium feel (see DESIGN SYSTEM section).
- Vehicle data is hardcoded in `src/assets/assets.jsx` as a static array.
- Routes already scaffolded: `/`, `/fleet`, `/fleet/:id`, `/about`, `/contact`.

Two decisions from the competitor review that affect this spec:

1. FLEET POSITIONING: theluxauto.com is not an exotic-supercar brand — its
   fleet is premium-but-attainable (executive sedans, luxury SUVs, one or
   two halo vehicles). This project follows that direction. See the FLEET
   POSITIONING note under IMAGE STRATEGY.
2. PHASING: the DEVELOPMENT APPROACH section has been restructured so that
   a fully working, polished FRONTEND (with static data) ships first. The
   backend, MongoDB, admin dashboard, and JWT auth described later in this
   document are real requirements but are explicitly DEFERRED to a later
   phase, not built alongside the frontend. Sections describing them are
   marked "(Phase 2 — Deferred)".

The WhatsApp-only booking flow (no online payment, no booking form, no
accounts) remains unchanged from the original scope — this is still the
simplest, fastest path to a working conversion flow.

--------------------------------------------------
UPDATE (real client material received):
--------------------------------------------------

The client provided two of their own promotional flyers. These correct
and extend the assumptions above:

1. BRAND NAME CORRECTION: the real business name is "Brick 'N' Wheels"
   ("...a complete life package"), not "LuxDrive". LuxDrive was an
   incorrect placeholder guess reconciled from stale scaffold text; it
   has been reverted everywhere (site title, siteSettings, this doc).
   Real contact number from the flyer: +234 803 883 1526.
2. FLEET CORRECTION: the client's actual fleet is Toyota/Lexus SUVs and
   family vehicles, not European luxury exotics — Lexus GX460, Toyota
   Highlander (x2, different years), Toyota 4Runner, Toyota Prado LC,
   Toyota Venza, Toyota Sienna. The fictional supercar AND the fictional
   "premium executive" European fleet invented from theluxauto.com
   competitor research have both been replaced with these 7 real
   vehicles and their real day-rate pricing. The FLEET POSITIONING note
   above (premium-but-attainable direction) turned out to be directionally
   right, just wrong on specifics — the real fleet confirms "attainable
   SUV rental," not badge-driven European luxury.
3. NEW SERVICE LINE: the client also offers shortlet apartment rentals
   (confirmed live listing: a 2-bedroom apartment in Adeniyi Jones,
   Ikeja). This is a second business vertical, not just a car rental
   add-on — it gets its own listing+detail page pair (`/apartments`,
   `/apartments/:id`), mirroring the Fleet pattern, with its own data
   model, WhatsApp booking link, and nav entry.

==================================================
# CORE PRODUCT CONCEPT
==================================================

The website is a car rental platform.

Visitors should be able to:

1. Visit the homepage.
2. Understand the business immediately.
3. Browse available vehicles.
4. Filter vehicles.
5. View detailed information about a vehicle.
6. Click "Book Now".
7. Be redirected directly to WhatsApp.
8. Receive a pre-filled WhatsApp message containing information about the vehicle they selected.

There is no complex booking engine at this stage.

There is no online payment system at this stage.

There is no customer account system at this stage.

There is no complicated reservation system at this stage.

The primary conversion flow is:

USER VISITS WEBSITE
        ↓
BROWSES VEHICLES
        ↓
SELECTS VEHICLE
        ↓
VIEWS VEHICLE DETAILS
        ↓
CLICKS BOOK NOW
        ↓
WHATSAPP OPENS
        ↓
PRE-FILLED MESSAGE
        ↓
CUSTOMER SENDS MESSAGE
        ↓
CAR RENTAL BUSINESS RESPONDS DIRECTLY

This WhatsApp-first approach must be simple and frictionless.

==================================================
# TECHNOLOGY STACK
==================================================

Frontend:

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- TanStack Query
- React Hook Form where forms are necessary
- Zod where validation is necessary
- Lucide React icons

Backend (Phase 2 — Deferred, not built in the current phase):

- Node.js
- Express.js
- TypeScript

Database (Phase 2 — Deferred):

- MongoDB
- Mongoose

Authentication (Phase 2 — Deferred):

- Simple JWT authentication for admin users.

Storage:

For the prototype, support image URLs.

The system should be designed so that image storage can later be moved to:

- Cloudinary
- AWS S3
- Cloudflare R2

Do not overcomplicate image storage during the initial prototype.

==================================================
# PROJECT STRUCTURE
==================================================

Use a clean structure.

Suggested structure:

/client
  /src
    /components
    /pages
    /layouts
    /hooks
    /services
    /api
    /types
    /utils
    /data
    /lib

/server
  /src
    /config
    /controllers
    /middleware
    /models
    /routes
    /services
    /utils
    /types

/docs

Use clear separation between frontend and backend.

==================================================
# BRAND EXPERIENCE
==================================================

The website must feel:

- Premium
- Elegant
- Trustworthy
- Modern
- Clean
- Sophisticated
- Fast
- Easy to use

The design should feel like a premium automotive rental brand.

Avoid:

- Generic dashboard templates
- Overcrowded pages
- Excessive gradients
- Excessive animations
- Cheap-looking cards
- Poor typography
- Unnecessary UI elements

Focus on:

- Excellent typography
- High-quality vehicle photography
- Strong whitespace
- Beautiful layouts
- Clear CTAs
- Premium visual hierarchy
- Smooth interactions
- Mobile responsiveness

The design should be visually strong enough to impress a potential client immediately.

==================================================
# IMAGE STRATEGY
==================================================

At the moment, the business does not have enough real vehicle photography.

Use Unsplash images as temporary placeholder content.

IMPORTANT:

- Use Unsplash images only as temporary demo content.
- Structure the system so images can easily be replaced later.
- Do not hardcode images throughout the frontend.
- Store image URLs in the database or seed data.
- Every image should have an alt text field.
- Make the image system easy to replace when the client provides real images.

Do not pretend that temporary Unsplash images are actual vehicles owned by the business.

For demo content, make it clear internally that the images are placeholder/demo assets.

Use high-quality images of:

- Luxury vehicles
- SUVs
- Sedans
- Executive cars
- Chauffeur-driven vehicles
- Lagos city environments
- Airport transfer environments

Use remote image URLs initially.

FLEET POSITIONING NOTE:

The fleet should be positioned as premium, attainable executive transport —
luxury SUVs (e.g. Prado-class, Cayenne-class), executive sedans (e.g.
S-Class-class, Flying Spur-class), and a small number of halo/luxury
vehicles — rather than an exotic supercar collection. This mirrors how
established Lagos premium car hire brands position their fleet: aspirational
but still relevant to executive travel, weddings, and corporate use, not
purely show cars.

The current placeholder assets in `src/assets/images/cars/` (Ferrari,
Lamborghini, McLaren, etc.) skew too far toward exotic supercars and should
be replaced/supplemented with executive sedan and luxury SUV imagery before
this reaches client-ready polish.

==================================================
# WEBSITE PAGES
==================================================

Create the following pages.

## 1. HOME PAGE

The homepage should be the strongest visual experience.

Sections:

### Hero Section

Large premium vehicle imagery.

Headline example:

"Move Through Lagos in Comfort and Style."

Supporting text:

"Premium car rentals, chauffeur services, and executive transportation designed for every journey."

Primary CTA:

"Explore Our Fleet"

Secondary CTA:

"Book on WhatsApp"

The hero should immediately communicate:

- What the company does
- Where it operates
- Why the customer should care

### Featured Fleet

Show selected vehicles.

Each vehicle card should include:

- Image
- Brand
- Model
- Year
- Category
- Transmission
- Seats
- Price
- CTA

CTA:

"View Vehicle"

### Why Choose Us

Use simple benefits:

- Premium Vehicles
- Flexible Rental Options
- Professional Service
- Easy Booking
- Available in Lagos

### Services

Show:

- Car Rental
- Chauffeur Service
- Airport Transfers
- Corporate Transportation
- Event & Wedding Transportation

### How It Works

Three simple steps:

1. Choose Your Vehicle
2. Contact Us on WhatsApp
3. Confirm Your Rental

### Call to Action

Strong final CTA:

"Ready to Ride?"

Button:

"Start Your Booking"

### Footer

Include:

- Business name
- Service areas
- Contact details
- WhatsApp button
- Social media placeholders
- Navigation
- Copyright

==================================================
# 2. FLEET PAGE
==================================================

Route:

/fleet

Create a beautiful vehicle browsing experience.

Include filters:

- Vehicle category
- Price range
- Brand
- Transmission
- Seating capacity

Categories:

- Luxury
- SUV
- Sedan
- Executive
- Economy

Each vehicle card should display:

- Vehicle image
- Brand
- Model
- Category
- Year
- Seats
- Transmission
- Price
- View Details button
- Book Now button

The page should be visually impressive on both desktop and mobile.

Use URL query parameters for filters where appropriate.

Example:

/fleet?category=suv

==================================================
# 3. VEHICLE DETAILS PAGE
==================================================

Route:

/fleet/:slug

This page is extremely important.

It should include:

- Large image gallery
- Vehicle name
- Brand
- Model
- Year
- Category
- Price
- Transmission
- Fuel type
- Seating capacity
- Features
- Description
- Rental information
- Booking CTA

Primary CTA:

"Book This Vehicle on WhatsApp"

The button must create a WhatsApp URL with a pre-filled message.

Example:

Hello, I would like to book the following vehicle:

Vehicle: Toyota Land Cruiser
Category: SUV
Year: 2024
Price: ₦250,000/day

Vehicle page:
[website URL]

Please provide me with availability and booking details.

The WhatsApp number must be configurable through the admin dashboard.

Do not hardcode the WhatsApp number throughout the frontend.

==================================================
# WHATSAPP BOOKING FLOW
==================================================

Create a reusable WhatsApp booking utility.

Example concept:

generateWhatsAppBookingLink(vehicle)

The utility should:

1. Receive vehicle information.
2. Build a professional message.
3. Encode the message safely.
4. Generate the WhatsApp URL.
5. Open WhatsApp.

The WhatsApp number should come from business settings.

The message should contain:

- Vehicle name
- Category
- Rental price
- Vehicle URL
- Optional selected dates if the user selected dates

Example:

Hello, I am interested in booking:

Vehicle: {{vehicleName}}
Category: {{category}}
Daily Rate: {{price}}

I would like to know if this vehicle is available.

Thank you.

The customer should be able to edit the message before sending.

==================================================
# 4. SERVICES PAGE
#==================================================

Create a service overview page.

Services:

- Car Rental
- Luxury Car Rental
- SUV Rental
- Chauffeur Service
- Airport Transfers
- Corporate Car Hire
- Event Transportation

Each service should have:

- Image
- Title
- Description
- CTA

==================================================
# 5. SERVICE DETAIL PAGES
#==================================================

Create SEO-friendly service pages.

Examples:

/services/luxury-car-rental
/services/suv-rental
/services/chauffeur-service
/services/airport-transfer
/services/corporate-car-rental

Each page should include:

- Hero section
- Service explanation
- Benefits
- Suitable use cases
- Related vehicles
- FAQ section
- WhatsApp CTA

Do not create generic keyword-stuffed content.

==================================================
# 6. LOCATION PAGES
#==================================================

Create a small number of useful location pages.

Initial areas:

- Lagos
- Ikeja
- Lekki
- Victoria Island
- Ikoyi

Example:

/locations/car-rental-lagos
/locations/car-rental-ikeja
/locations/car-rental-lekki

Each page must have unique useful content.

Do not generate hundreds of thin location pages.

==================================================
# 7. ABOUT PAGE
#==================================================

Create a premium About page.

Include:

- Company story
- Mission
- Service philosophy
- Why customers choose the business
- Professional transportation experience

Do not invent fake company history.

Use placeholder content where real business information is not yet available.

==================================================
# 8. CONTACT PAGE
#==================================================

Include:

- WhatsApp CTA
- Phone number
- Email
- Service areas
- Business hours
- Contact form

The contact form should send data to the backend.

For the prototype, store contact submissions in MongoDB.

==================================================
# 9. FAQ PAGE
#==================================================

Create a manageable FAQ system.

Example questions:

- What documents are required to rent a vehicle?
- Do you offer chauffeur services?
- Do you offer airport transfers?
- How do I book a vehicle?
- Can I rent a car for multiple days?
- What locations do you serve?

FAQs must be manageable through the admin dashboard.

==================================================
# ADMIN DASHBOARD (Phase 2 — Deferred)
#==================================================

The admin dashboard is an important part of the eventual prototype, but is
NOT built during the current frontend-first phase. See PROJECT STATUS &
PHASING NOTE and DEVELOPMENT APPROACH.

The admin should be able to manage the content displayed on the website.

Admin features:

## Dashboard

Display:

- Total vehicles
- Featured vehicles
- Contact inquiries
- Most viewed vehicles if tracking is implemented
- Recent inquiries

Keep this dashboard simple and useful.

## Vehicle Management

Admin can:

- Create vehicle
- Edit vehicle
- Delete vehicle
- Publish/unpublish vehicle
- Mark vehicle as featured
- Set price
- Set category
- Add description
- Add specifications
- Add features
- Add image URLs
- Set SEO title
- Set SEO description
- Set slug

Vehicle fields:

- name
- brand
- model
- year
- category
- pricePerDay
- pricePerWeek
- pricePerMonth
- transmission
- fuelType
- seats
- doors
- color
- description
- features
- images
- imageAltTexts
- featured
- published
- slug
- metaTitle
- metaDescription

## Image Management

For the prototype:

- Allow admin to add image URLs.
- Allow admin to remove image URLs.
- Allow admin to reorder images.
- Allow admin to define image alt text.

Design the model so a proper media library can be added later.

## Service Management

Admin can:

- Create service
- Edit service
- Delete service
- Publish/unpublish service
- Set SEO metadata

## FAQ Management

Admin can:

- Create FAQ
- Edit FAQ
- Delete FAQ
- Reorder FAQ
- Publish/unpublish FAQ

## Site Settings

Admin can manage:

- Business name
- WhatsApp number
- Phone number
- Email
- Address
- Service areas
- Social links
- Business hours
- Logo
- Favicon
- Default SEO metadata

The WhatsApp number must be stored here.

==================================================
# DATABASE MODELS (Phase 2 — Deferred)
#==================================================

Create Mongoose models for:

## AdminUser

Fields:

- name
- email
- passwordHash
- role
- createdAt
- updatedAt

## Vehicle

Fields:

- name
- slug
- brand
- model
- year
- category
- pricePerDay
- pricePerWeek
- pricePerMonth
- transmission
- fuelType
- seats
- doors
- color
- description
- features
- images
- featured
- published
- metaTitle
- metaDescription
- createdAt
- updatedAt

## Service

Fields:

- title
- slug
- shortDescription
- description
- image
- features
- published
- metaTitle
- metaDescription

## FAQ

Fields:

- question
- answer
- order
- published

## ContactInquiry

Fields:

- name
- email
- phone
- message
- status
- createdAt

## SiteSettings

Fields:

- businessName
- whatsappNumber
- phone
- email
- address
- serviceAreas
- socialLinks
- businessHours
- logo
- favicon
- defaultMetaTitle
- defaultMetaDescription

==================================================
# API STRUCTURE (Phase 2 — Deferred)
#==================================================

Create clean REST APIs.

Authentication:

POST /api/auth/login
GET /api/auth/me

Vehicles:

GET /api/vehicles
GET /api/vehicles/:slug
POST /api/vehicles
PATCH /api/vehicles/:id
DELETE /api/vehicles/:id

Services:

GET /api/services
GET /api/services/:slug
POST /api/services
PATCH /api/services/:id
DELETE /api/services/:id

FAQs:

GET /api/faqs
POST /api/faqs
PATCH /api/faqs/:id
DELETE /api/faqs/:id

Contact:

POST /api/contact
GET /api/contact

Settings:

GET /api/settings
PATCH /api/settings

Protect admin endpoints with authentication middleware.

==================================================
# SEO
#==================================================

SEO is important but should remain practical.

Implement:

- Dynamic page titles
- Dynamic meta descriptions
- Canonical URLs
- Open Graph tags
- Twitter/X card metadata
- Sitemap.xml
- Robots.txt
- Clean URLs
- Proper heading hierarchy
- Image alt text
- Breadcrumbs

Every vehicle should have a unique SEO-friendly URL.

Example:

/fleet/toyota-land-cruiser-2024

Every service should have a unique SEO-friendly URL.

Example:

/services/luxury-car-rental-lagos

==================================================
# STRUCTURED DATA
#==================================================

Implement JSON-LD where appropriate.

Use:

- Organization
- LocalBusiness
- AutoRental where appropriate
- Car/Vehicle information where appropriate
- Service
- FAQPage
- BreadcrumbList

Only use information that is actually present on the page.

Do not create fake reviews.

Do not create fake ratings.

==================================================
# CONTENT AND AI DISCOVERABILITY
#==================================================

The goal is to make the business easy for search engines and AI systems to understand.

Create clear pages for:

- Who the company is
- Where the company operates
- What vehicles are available
- What services are offered
- How customers can book
- How customers can contact the company

Create:

/llms.txt

This file should summarize:

- Business name
- Business description
- Main services
- Service areas
- Fleet categories
- Booking process
- Contact information
- Important URLs

Do not assume llms.txt guarantees AI visibility.

The most important strategy is to create a clear, trustworthy, well-structured business website.

==================================================
# DESIGN SYSTEM
#==================================================

Before building pages, create a design system.

Define:

- Typography
- Font hierarchy
- Spacing system
- Border radius
- Button styles
- Card styles
- Form styles
- Navigation
- Mobile navigation
- Modal styles
- Toast notifications
- Loading states
- Empty states
- Error states

Use a consistent visual language.

Do not make every section look like a different website.

==================================================
# RESPONSIVE DESIGN
#==================================================

The website must work well on:

- Mobile phones
- Tablets
- Laptops
- Large desktop screens

Mobile is extremely important.

The primary CTA should remain easy to access on mobile.

Consider a sticky mobile WhatsApp booking button.

==================================================
# ANIMATIONS
#==================================================

Use animations carefully.

Use:

- Fade-in effects
- Subtle slide transitions
- Hover effects
- Image transitions
- Smooth page transitions

Avoid excessive animations.

Performance is more important than visual effects.

==================================================
# SECURITY
#==================================================

Implement:

- Password hashing
- JWT authentication
- Protected admin routes
- Input validation
- Request validation
- Rate limiting for public forms
- Secure CORS configuration
- Helmet
- Environment variables
- No secrets in Git
- Secure MongoDB connection

==================================================
# TESTING
#==================================================

Even though this is a prototype, write useful tests.

Backend tests:

- Vehicle creation
- Vehicle retrieval
- Vehicle update
- Vehicle deletion
- Admin authentication
- Contact form submission
- Protected routes

Frontend tests:

- Vehicle card rendering
- WhatsApp link generation
- Filter behavior
- Form validation

Write at least unit tests for the WhatsApp booking utility.

==================================================
# DEVELOPMENT APPROACH
#==================================================

Do not build everything at once.

Work in phases. This has been restructured to be FRONTEND-FIRST: ship a
complete, polished, client-demoable static site before any backend exists.
The original backend/admin phases still happen, but later, once the
frontend is proven and the client has seen it.

PHASE 1: Product and Design Planning

Create:

/docs/product-requirements.md
/docs/design-system.md
/docs/architecture.md
/docs/database.md
/docs/api.md
/docs/seo.md
/docs/roadmap.md

Define:

- User flows
- Page structure
- Component architecture
- Database schema (target shape, not yet implemented)
- API structure (target shape, not yet implemented)
- Admin features (target shape, not yet implemented)
- WhatsApp booking flow

PHASE 2: Frontend Project Setup

Set up (frontend only — no backend yet):

- React frontend (Vite)
- TypeScript
- Tailwind
- ESLint
- Prettier
- Environment variables (for things like the WhatsApp number, kept in a
  single config/constants file so it's a one-line change later to source
  it from a real settings API)

PHASE 3: Frontend — All Pages, Static Data

Build every page against hardcoded/static data (a local data file, not a
database):

- Homepage
- Fleet page (with client-side filtering)
- Vehicle details
- Services
- Service details
- Locations
- About
- Contact (form UI only; wire to a simple mail/form service or leave
  non-functional with a note, since there is no backend yet)
- FAQ
- WhatsApp booking utility (`generateWhatsAppBookingLink`)

Structure the static data file the same shape the future Vehicle/Service/
FAQ/SiteSettings models will use, so swapping static data for real API
calls later is a data-layer change only, not a component rewrite.

PHASE 4: SEO (Static Site)

Implement everything that doesn't require a backend:

- Metadata
- Sitemap
- Robots
- Structured data
- Canonical URLs
- Open Graph
- llms.txt

PHASE 5: Testing and Polish (Frontend)

Test:

- Responsive design
- WhatsApp booking flow
- SEO
- Performance
- Accessibility

This is the point at which the site is client-demoable.

PHASE 6: Backend (Deferred)

Build, once the frontend is approved and a real backend is needed:

- Express + TypeScript + MongoDB/Mongoose setup
- Admin authentication (JWT)
- Vehicle CRUD
- Services CRUD
- FAQs CRUD
- Site settings
- Contact inquiries
- Swap the frontend's static data file for real API calls

PHASE 7: Admin Dashboard (Deferred)

Build:

- Dashboard
- Vehicle management
- Service management
- FAQ management
- Site settings
- Contact inquiries

PHASE 8: Full-System Testing and Polish

Test:

- Admin CRUD
- Authentication
- End-to-end WhatsApp booking flow against real data
- Regression on everything covered in Phase 5

==================================================
# IMPORTANT RULE
#==================================================

This is a simple, beautiful, client-ready prototype.

Do not turn this into an unnecessarily complex enterprise system.

Prioritize:

1. Beautiful UI.
2. Excellent user experience.
3. Simple WhatsApp conversion flow.
4. Easy admin content management.
5. Clean code.
6. Good SEO foundations.
7. Easy future expansion.

The project should be impressive enough to show potential car rental clients.

==================================================
# FIRST TASK
#==================================================

Given the current scaffold already exists (React + Vite, Brick 'N' Wheels brand,
design system, routes, static car data), the remaining planning work is:

1. Update the product requirements document to match this reordered,
   frontend-first phasing. (This document.)
2. Confirm/finalize the design system against what's already built in
   `src/index.css` and `src/style.css`.
3. Define the frontend route structure (extend the existing routes to
   cover Services, Service Details, Locations, FAQ).
4. Define the static data shape for vehicles/services/FAQs (Phase 3),
   matching the target Mongoose schema shape from the deferred DATABASE
   MODELS section so the future migration is mechanical.
5. Define the target database schema and backend API structure (Phase 6,
   deferred — kept as forward-looking reference, not built now).
6. Define the admin dashboard structure (Phase 7, deferred).
7. Create the SEO plan for the static site (Phase 4).
8. Create the development roadmap (the PHASE 1–8 breakdown above).

Do not start major implementation until these documents have been updated
and confirmed.

After creating/updating the planning documents, explain the first
implementation milestone (Phase 2/3: frontend project setup and building
out the remaining pages against static data) and wait for approval.