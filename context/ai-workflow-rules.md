# AI Workflow Rules

## Approach

Build the Apex Real Estate Consultants website incrementally using the context files as the source of truth. The project is a professional South Florida real estate and business brokerage website focused on services, opportunities, credibility, and qualified enquiries.

Every implementation step must be checked against:

- `project-overview.md` for business purpose, audience, offer, messaging, and feature scope
- `ui-context.md` for visual direction, layout behavior, responsive rules, and accessibility expectations
- `code-standards.md` for engineering conventions, security, validation, and quality expectations
- `architecture.md` for routes, system boundaries, data flow, storage, integrations, and invariants
- `progress-tracker.md` for current work state, open questions, completed units, and known gaps

Do not treat the source website as an implementation dependency. The new site should match the business type and offering described in the context files, using owner-approved content and assets as the final authority.

## Scoping Rules

- Work on one feature unit at a time.
- Prefer small, verifiable increments over large speculative changes.
- Do not combine unrelated system boundaries in a single implementation step.
- Use the approved context files before making product, design, copy, or architecture decisions.
- Keep each change tied to a user-visible page, reusable component, API route, or configuration decision.
- Do not introduce accounts, dashboards, payments, booking systems, MLS or IDX integrations, valuation calculators, or CRM behavior unless a later approved requirement adds them.
- Do not add a database just to store static content that can safely live in typed local content files.
- Treat personal contact details, business hours, legal copy, and service-area wording as owner-approved content that must be confirmed before launch.
- Keep residential, commercial, and business brokerage offerings clearly distinct where the user experience depends on the difference.

## Feature Units

Use these units as the normal development order unless project conditions require a different sequence:

1. Project setup, design tokens, fonts, metadata structure, and shared layout shell
2. Reusable UI primitives and content data models
3. Home page with primary message, core services, opportunity preview, trust content, and enquiry calls to action
4. Services page covering residential real estate, commercial real estate, and business brokerage
5. Opportunities page with property or business opportunity listings, status labels, enquiry context, and empty states
6. About page with consultant positioning, service area, experience-oriented credibility, and contact prompts
7. Contact page with clear contact options, category-aware enquiry form, optional attachments, newsletter opt-in, and form states
8. Contact API route with validation, spam controls, rate limits, private file handling, email delivery, logging, and truthful success or failure states
9. Newsletter API route with explicit consent and provider-backed subscription handling
10. Privacy page and any required footer/legal content
11. Responsive, accessibility, build, and end-to-end verification pass

Each unit should be useful on its own and leave the project in a working state.

## When to Split Work

Split an implementation step if it combines:

- Page layout work and server-side form handling
- Contact form UI and email provider integration
- Newsletter UI and newsletter provider integration
- Opportunity listing presentation and content model changes that affect other pages
- File upload UI and private object storage implementation
- Visual design system changes and business-copy revisions
- Route structure changes and unrelated component styling
- Accessibility fixes and unrelated feature additions
- Any behavior not clearly defined in the context files

If a change cannot be verified end to end quickly, the scope is too broad. Split it into a smaller unit and record the next unit in `progress-tracker.md`.

## Handling Missing Requirements

- Do not invent product behavior that is not defined in the context files.
- If a requirement is ambiguous, resolve it in the relevant context file before implementing.
- If a requirement is missing, add it as an open question in `progress-tracker.md` before continuing.
- If owner-approved content is missing, use clearly marked placeholder content only when needed for layout progress.
- Do not publish placeholder phone numbers, email addresses, business hours, addresses, legal terms, testimonials, credentials, or service claims.
- If an integration provider has not been selected, build the server boundary and types first, then mark the provider choice as an open question.
- If a form action cannot truthfully complete, show a clear failure or unavailable state instead of a fake success message.

## Protected Files

Do not modify the following unless explicitly instructed or required by the selected framework tooling:

- Generated framework internals
- Third-party library files
- Package manager lockfiles for unrelated dependency changes
- Environment files containing secrets
- Build output folders such as `.next`, `dist`, `out`, or coverage artifacts
- Generated UI library components if the project adopts a generated component system
- Files outside the website project unless the task explicitly requires a context-file or tooling update

If a protected file must change to complete the task, explain why in `progress-tracker.md` and keep the change narrowly scoped.

## Keeping Docs in Sync

Update the relevant context file whenever implementation changes:

- System architecture, route structure, provider boundaries, storage model, or data flow
- Design tokens, typography, spacing, component behavior, interaction states, or responsive rules
- Coding conventions, validation strategy, security requirements, logging, or testing expectations
- Feature scope, business offering, page purpose, user journeys, content requirements, or launch constraints
- Open questions, completed units, implementation status, bugs, blocked items, or verification results

Do not allow implementation decisions to live only in code if they affect future development. Record the decision in the closest matching context file.

## AI Agent Rules

- Read the relevant context files before editing code.
- Respect the business scope: professional real estate and business brokerage services for South Florida.
- Keep copy direct, service-oriented, and credible.
- Do not reference or link to an older site in the product experience or project files unless the user explicitly asks for source comparison notes.
- Do not scrape, copy, or reproduce third-party content blindly. Use owner-approved content and assets for final production.
- Prefer typed local content for services, opportunities, navigation, footer links, and contact metadata.
- Keep Client Components limited to interactive UI that needs browser state.
- Use server-side validation for every public form route.
- Treat optional attachments as private files, never public website assets.
- Keep newsletter consent separate from contact enquiry submission.
- Do not expose secrets, provider keys, private storage paths, or internal error traces to the browser.
- When uncertain, make the smallest useful progress and record the unresolved decision clearly.

## Verification Rules

Before marking a feature unit complete:

1. The unit works end to end within its defined scope.
2. No invariant defined in `architecture.md` was violated.
3. `progress-tracker.md` reflects completed work, open questions, and known gaps.
4. The page or route has been checked at mobile and desktop widths.
5. Form states include default, loading, success, error, and validation feedback where relevant.
6. Keyboard navigation and visible focus states work for interactive elements.
7. Text, buttons, forms, and cards do not overflow or overlap on common viewport sizes.
8. `npm run build` passes before considering the unit ready for review.

## Before Moving to the Next Unit

1. The current unit is implemented, reviewed, and verified.
2. Any new decisions are reflected in the correct context file.
3. Any unresolved requirements are captured in `progress-tracker.md`.
4. No placeholder content is hidden inside production-facing code without being tracked.
5. No temporary logs, test recipients, fake success paths, or hardcoded secrets remain.
6. The site still communicates the core offer clearly: real estate and business guidance in South Florida, including residential, commercial, and business brokerage services.
