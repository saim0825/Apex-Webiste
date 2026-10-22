# Progress Tracker

Update this file after every meaningful implementation change.

## Current Phase

- In progress — public home page.

## Current Goal

- Implement `context/feature-specs/04-home-page.md` exactly as specified.

## Completed

- Defined the Apex visual direction, color tokens, typography, radius scale, component guidance, layout patterns, icon rules, imagery, motion, and UI acceptance criteria in `context/ui-context.md`.
- Implemented the editor base chrome from `context/feature-specs/02-editor.md`.
- Implemented Clerk authentication foundation and branded auth screens.

## In Progress

- Public home page implemented with responsive navigation, hero, service cards, opportunity empty state, trust section, contact CTA, and footer. Auth remains available at `/sign-in` and protected `/editor`.
- Live client navigation matched with a shared More menu, Services submenu, and separate service routes using the client's existing URL slugs.
- Services dropdown uses a native disclosure control so it works without relying on client-side hydration.
- Replaced service placeholders with live client page content and added a Contact Us enquiry page with public phone numbers and hours.
- Added a solid inner-page header, shared multi-column footer, service hero imagery, and varied section layouts to avoid repeating the homepage treatment.
- Reworked service pages around the supplied Key Details reference: warm editorial background, gold rules, white detail cards, black feature panel, and restrained Unsplash imagery.
- Preserved Apex navy/orange branding while retaining only the reference layout patterns: spacious cards, feature panel, and clearer content hierarchy.
- Added the client’s public social links to the footer and Contact page, with Apex orange hover states throughout the navigation and contact links.
- Replaced social text markers with inline platform SVG logos and verified all seven client social destinations resolve.
- Added live-content Opportunities and About Apex routes, including client service overview, mission, and Carlos Azcarate/Ross Miller bios.
- Added replaceable dummy Unsplash property imagery to Opportunities and temporary portrait imagery to About Apex team cards.
- Removed the large Opportunities/About hero image blocks, added centered circular imagery beneath each hero, and added page-specific navy/orange feature-card messaging.
- Added a scroll-revealed, blurred header and replaced boxed detail cards with editorial numbered rows and hover movement.
- Kept the header visible at the top and changed only its translucent background strength and color treatment after scrolling.

## Next Up

- Build the remaining public routes and replace placeholder opportunity/contact content with approved client content.

## Open Questions

- Clerk environment keys are not present in the repository; add them locally or through deployment settings.

## Architecture Decisions

- Use centralized CSS custom properties for all UI colors so the Apex site stays visually consistent and can be rebranded without editing individual components.

## Session Notes

- 2026-09-23: Installed `@clerk/nextjs`, configured `ClerkProvider` and Clerk middleware, and added catch-all sign-in/sign-up routes. `03-auth.md` is still empty, so no further feature-specific behavior was inferred.
- 2026-09-24: Applied the supplied Apex logo and property background to the auth screens, created a transparent logo asset, and matched the auth card to the navy and orange brand palette.
- 2026-09-24: Reworked the public homepage hero to match the supplied premium strategy reference with the new waterfront image, Apex logo, orange strategy headline, glass service pills, navigation, grid, and ring details.
- Added a rotating featured-service card stack after the home page's What We Do section, with a sharp front card and blurred side cards using temporary Unsplash imagery.
- Reduced the home featured-service cards and replaced the home-only footer with the shared footer used across the site; removed the redundant “A steady partner” home section.
- Removed the redundant home contact CTA section and aligned the animated card accent labels with the Apex orange brand color.
- Reworked the home hero into a simpler two-column layout with a real Unsplash Miami waterfront photograph, concise copy, and two focused actions.
- Added the supplied Apex Guide flipbook bundle under `public/apex-guide` and linked it from More as a new full-window tab.
- Added a mobile-only compact header with centered logo, left search icon, right menu button, and an expanded dropdown containing the full navigation and services list.
- Corrected mobile controls: menu button is left, search icon is right, and the tap-open menu has a clear high-z-index dropdown. Added reliable navy hover styling for the home service cards.
- Added dedicated buying and selling guide pages using the client’s source content for business and home transactions, with organized steps and advisor CTAs.
- Audited site navigation and corrected the home Opportunities consultant link to `/contact-us`; remaining gaps are content/admin functionality rather than broken primary routes.
