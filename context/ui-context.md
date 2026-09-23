# UI Context — Apex Real Estate Consultants

## Theme

A professional, welcoming real estate and business consultancy website for South Florida. Use a light theme with warm neutral backgrounds, deep navy headings, restrained gold details, and authentic property photography. The interface should feel established, clear, and approachable.

This is the proposed visual direction for the new website, not a claim about an existing brand guide. Apply it consistently across residential real estate, commercial real estate, and the clearly labelled Reliable Business Brokers offering.

Prioritize readable service descriptions, property imagery, and easy access to a consultant. Avoid dashboard styling, excessive gradients, decorative animation, and crowded layouts. No dark-mode toggle is required.

## Colors

Define these CSS custom properties centrally and use them throughout components. Do not scatter raw color values across component files.

| Role | CSS Variable | Value |
| --- | --- | --- |
| Page background | `--bg-base` | `#F8F7F4` |
| Surface | `--bg-surface` | `#FFFFFF` |
| Alternate section | `--bg-subtle` | `#EFEDE7` |
| Dark section / footer | `--bg-dark` | `#142B3F` |
| Primary text | `--text-primary` | `#142B3F` |
| Muted text | `--text-muted` | `#52616B` |
| Text on dark | `--text-inverse` | `#FFFFFF` |
| Primary accent / button | `--accent-primary` | `#173F57` |
| Primary hover | `--accent-hover` | `#102F42` |
| Decorative gold | `--accent-gold` | `#B38A47` |
| Border / divider | `--border-default` | `#D9DEE2` |
| Input border | `--border-input` | `#75838D` |
| Keyboard focus | `--focus-ring` | `#176B91` |
| Error text | `--state-error` | `#B42318` |
| Error background | `--state-error-bg` | `#FEF3F2` |
| Success text | `--state-success` | `#17603B` |
| Success background | `--state-success-bg` | `#ECFDF3` |

Primary buttons use white text on the primary accent. Gold is for small decorative details, not body text or white-text buttons. Check text contrast, control boundaries, and focus visibility in their actual contexts. Pair every error or success color with explanatory text.

## Typography

| Role | Font | Variable |
| --- | --- | --- |
| Body, navigation, forms, buttons | Geist Sans with sans-serif fallback | `--font-sans` |
| Main and section headings | Georgia with serif fallback | `--font-display` |

- Use display typography for the hero and major section headings; use sans-serif for service titles and functional UI.
- Body copy: 16–18 px with approximately 1.6 line height.
- Supporting text: 14 px minimum for normal interface content.
- Hero heading: responsive 36–64 px with approximately 1.1 line height.
- Section headings: responsive 28–40 px.
- Limit long paragraphs to approximately 65 characters per line.
- Use sentence case and clear headings. Avoid long uppercase passages.
- No monospace font is needed in the public-facing interface.

## Border Radius

| Context | Class | Size |
| --- | --- | --- |
| Buttons, inputs, small UI | `rounded-md` | 6 px |
| Cards and image containers | `rounded-xl` | 12 px |
| Dialogs and overlays | `rounded-2xl` | 16 px |
| Small category badges | `rounded-full` | Pill |

Use subtle borders and restrained shadows. Keep important content visible without requiring hover.

## Component Library

Use React components with Tailwind CSS. Keep shared elements in `components/ui/` and website-specific sections in `components/sections/`.

Create reusable Button, Container, SectionHeading, ServiceCard, OpportunityCard, ContactForm, NewsletterForm, Header, and Footer components. Use semantic HTML for links, buttons, forms, and navigation. If an accessible primitive library is introduced for dialogs or menus, use one consistently rather than mixing libraries.

Do not add a component library solely for visual styling. The public website should remain simple to maintain.

## Layout Patterns

### Global Layout

- Center content in a container with a maximum width of approximately 1200 px.
- Use horizontal padding of 20 px on mobile, 32 px on tablet, and 48 px on desktop.
- Use a consistent spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, and 96 px.
- Give sections 48–64 px of vertical spacing on mobile and 80–96 px on desktop.
- Stack layouts on small screens. Switch to multiple columns only when the content fits comfortably.

### Header and Navigation

- Logo or approved Apex wordmark on the left.
- Navigation: Home, Services, Opportunities, About, Contact.
- A prominent “Contact a Consultant” action on desktop.
- A labelled mobile menu button with expanded state and keyboard support.
- A sticky header must not obscure anchor targets or keyboard-focused content.
- If no approved logo is available, use a clean text wordmark instead of inventing a logo.

### Homepage

- A spacious hero with a clear headline, short service introduction, primary contact action, and a property photograph.
- Prefer a text-and-image split on desktop and stacked content on mobile.
- Follow with three distinct service introductions: Residential Real Estate, Commercial Real Estate, and Business Brokerage.
- Label business brokerage as Reliable Business Brokers; maintain a consistent visual system while making the service relationship clear.
- Include approved opportunities, a concise business introduction, and a contact section.
- Avoid carousels and automatic slideshows for essential information.

### Services

- Use concise headings, short descriptions, and readable service lists.
- Explain sales, leasing, valuation, marketing, negotiation, and advisory support without overwhelming visitors.
- Give each service area a relevant contact action.
- Use explicit button labels such as “Enquire About Commercial Property”.

### Opportunities

- Use a responsive grid: one column on mobile, two on tablet, and up to three on larger screens.
- Use consistently cropped images, preferably 4:3, and clear titles.
- Show location, category, price, and other details only when supplied and approved.
- Give every opportunity an obvious enquiry action.
- Visually distinguish business opportunities from residential and commercial property.
- When no opportunities are available, show a helpful message and contact action. Never fill the grid with fictional listings.

### About

- Use an editorial layout with readable copy and approved imagery.
- Present the mission, service approach, and verified consultant information.
- Avoid decorative statistics, testimonials, awards, or credentials unless supplied and approved.

### Contact

- Use a two-column desktop layout with contact details beside the form; stack on mobile.
- Show consultant names, service responsibilities, click-to-call numbers, and confirmed hours.
- Form fields: Name, Email, Message, and optional attachments.
- Place persistent labels above fields and explain required fields.
- Show file format and size restrictions beside the attachment control.
- Preserve entered values when validation or delivery fails.
- During submission, show “Sending…” and prevent duplicate submissions.
- Display confirmation only after successful submission. Announce status updates accessibly.
- Keep privacy information near the form without interrupting the enquiry flow.

### Newsletter and Footer

- A compact email signup for news and listing updates with a clear subscribe action.
- Show loading, success, and error states without shifting the layout unnecessarily.
- Use a navy footer with light text, navigation, business contacts, and approved social destinations.
- Give icon-only social links accessible names.

## Icons

Use a single consistent set of outline icons, such as Lucide React, if icons are needed.

- Inline icons: 16 px.
- Buttons and contact details: 20 px.
- Service illustrations: 24–32 px, used sparingly.
- Hide decorative icons from assistive technology.
- Give icon-only controls descriptive accessible names and at least a 44 × 44 px touch target.
- Do not use emoji as service icons or substitutes for the brand logo.

## Imagery and Motion

- Use approved property, commercial space, and team photographs with appropriate usage rights.
- Do not present generic lifestyle photography as a specific available property.
- Preserve image quality, sensible focal points, and responsive image sizing.
- Reserve image space to prevent layout shifts.
- Use subtle 150–200 ms transitions for controls and menus.
- Respect reduced-motion preferences. Avoid parallax, autoplay video, and scroll-blocking effects.

## UI Acceptance Criteria

- All pages share the same typography, color tokens, spacing, and component styles.
- Residential, commercial, and business brokerage offerings are easy to distinguish.
- Contact actions remain easy to find on mobile and desktop.
- Forms include usable default, focus, validation, submitting, success, and failure states.
- Navigation and forms work with a keyboard, and focus is always visible.
- Content remains usable at 200% zoom and on narrow screens without horizontal overflow.
- No unapproved business claims, fabricated opportunities, placeholder copy, or broken imagery appear in the finished interface.
