# Feature Spec — Home Page

## Goal

Build the public Home page for Apex Real Estate Consultants.

The Home page should introduce Apex as a professional South Florida real estate and business guidance company. It should clearly explain the core offering, create trust, and guide visitors toward contacting Apex or viewing opportunities.

This is a public marketing and enquiry page, not an authenticated dashboard.

## Required Route

- `/`

## Primary Message

Real estate and business guidance in South Florida.

## Audience

- Home buyers and sellers
- Commercial property clients
- Business owners looking to buy or sell a business
- Investors exploring real estate or business opportunities
- Visitors who need a trusted consultant before making a major transaction

## Page Sections

### 1. Header

Include:

- Apex branding
- Navigation links:
  - Home
  - Services
  - Opportunities
  - About
  - Contact
- Primary CTA:
  - Contact Apex

The header should be clean, professional, and responsive.

### 2. Hero Section

Include:

- Premium real estate visual style
- Clear Apex message
- Main headline:
  - Real Estate and Business Guidance in South Florida
- Supporting copy:
  - Apex helps clients evaluate, market, negotiate, and move forward with residential real estate, commercial real estate, and business brokerage opportunities.
- Primary CTA:
  - Contact Apex
- Secondary CTA:
  - View Opportunities

Do not use login/auth UI in the hero.

### 3. Services Overview

Show three service paths:

- Residential Real Estate
  - Buying, selling, valuation guidance, marketing, and negotiation support.
- Commercial Real Estate
  - Commercial sales, leasing, property guidance, and transaction support.
- Business Brokerage
  - Confidential support for buying or selling businesses, including valuation, packaging, marketing, negotiation, and transaction guidance.

Each service card should include:

- Title
- Short description
- Link or CTA to the Services page

### 4. Opportunity Preview

Show a short preview section for available opportunities.

Include:

- Section title
- Short description
- 2–3 placeholder opportunity cards if final listings are not ready
- CTA:
  - View Opportunities

Do not invent specific property prices, addresses, confidential business names, or claims.

### 5. Trust / Consulting Section

Include a section that communicates:

- Local South Florida market focus
- Guidance before major decisions
- Residential, commercial, and business transaction experience
- Confidentiality for business brokerage enquiries
- Clear communication and practical advice

Avoid unsupported statistics or fake testimonials.

### 6. Contact CTA Section

Include:

- Short closing message
- CTA:
  - Start a Conversation
- Optional secondary CTA:
  - Explore Services

The CTA should lead toward the Contact page.

### 7. Footer

Include:

- Apex brand name
- Navigation links
- Contact direction
- Newsletter placeholder if already planned
- Basic copyright text

Use only confirmed public contact details. If contact details are not confirmed, use safe placeholders and track them in `progress-tracker.md`.

## Design Requirements

Follow `context/ui-context.md`.

Use:

- Deep navy base
- White and soft neutral surfaces
- Orange accent
- Premium real estate imagery
- Clear spacing
- Professional typography
- Mobile-first responsive layout

Avoid:

- Oversized login-style form UI
- Fake dashboards
- Excessive animation
- Dense text blocks
- Stock-looking generic sections
- Claims not supported by approved content

## Technical Requirements

Follow:

- `context/architecture.md`
- `context/code-standards.md`
- `context/ai-workflow-rules.md`

Implementation expectations:

- Use Next.js App Router
- Keep public content server-rendered where possible
- Use reusable components for Header, Footer, Section, ServiceCard, OpportunityCard, and CTA sections
- Use typed local content for services and placeholder opportunities
- Do not add a database
- Do not add auth requirements to the public Home page
- Do not add external listing feeds, MLS, IDX, CRM, payments, booking, or calculators

## Content Rules

- Do not reference an old website.
- Do not include source links in visible page content.
- Do not invent final business hours, addresses, testimonials, property prices, or business names.
- Keep copy clear, direct, and professional.
- Keep residential, commercial, and business brokerage services distinct.

## Responsive Requirements

The Home page must work well on:

- Mobile
- Tablet
- Desktop
- Wide desktop

Check that:

- Text does not overlap
- Buttons remain readable
- Cards stack cleanly on mobile
- Hero content remains visible
- Navigation works on small screens

## Acceptance Criteria

The Home page is complete when:

- `/` renders the public Apex Home page
- The page clearly communicates Apex’s services
- Navigation and CTAs point to the correct planned routes
- The layout is responsive
- The page follows Apex brand styling
- No unapproved claims or fake data appear
- `npm run build` passes
- `progress-tracker.md` is updated