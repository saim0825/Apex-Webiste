# Code Standards — Apex Real Estate Consultants

## General

- Build the informational, opportunity showcase, and enquiry website defined in `project-overview.md`. Follow `ui-context.md` for presentation.
- Keep modules focused and use clear names. Separate presentation, business content, validation, and external service integrations.
- Fix root causes rather than suppressing errors or adding repeated workarounds.
- Reuse shared components when behavior or presentation is genuinely repeated. Avoid abstractions for one-off sections.
- Preserve unrelated work. Keep changes limited to the requested feature or fix.
- Never invent listings, prices, testimonials, professional credentials, contact details, or transaction statistics.
- Add dependencies only when they solve a defined need. Keep the lockfile committed and avoid unsolicited framework upgrades.
- Comments should explain non-obvious decisions, constraints, or tradeoffs rather than restating code.

## TypeScript

- Enable strict TypeScript checking.
- Avoid `any`; use specific types and narrow `unknown` values before using them.
- Define shared types for service content, opportunities, consultant details, and form responses where needed.
- Represent service categories explicitly so residential, commercial, and business brokerage enquiries are not confused.
- Validate external input at runtime. Type annotations alone do not validate form submissions, uploaded files, or provider responses.
- Do not use type assertions or non-null assertions to conceal missing data. Handle optional values deliberately.
- Keep server-only types and utilities out of browser bundles when they depend on private integrations.

## Next.js and React

- Use the App Router and follow the installed Next.js version's documentation and repository instructions.
- Default to Server Components. Add `"use client"` only at boundaries that need state, event handlers, effects, or browser APIs.
- Keep client components small, such as the mobile menu, contact form, and newsletter form.
- Keep credentials, email delivery, upload processing, and other private operations on the server.
- Use the framework's navigation, metadata, font, and image facilities where appropriate.
- Provide descriptive page titles and metadata. Remove starter branding before release.
- Define image dimensions or an aspect-ratio container to prevent layout shifts. Supply meaningful alternative text; decorative images use empty alternative text.
- Avoid unnecessary effects and duplicated derived state. Use stable keys for rendered lists.
- Show meaningful loading, empty, success, and error states wherever asynchronous work is visible to visitors.
- Do not cache or statically expose enquiry data or other personal information.
- Avoid premature caching and performance abstractions. Optimize based on actual behavior and measurements.

## Styling

- Use Tailwind CSS and the shared CSS custom-property tokens defined in `ui-context.md`.
- Keep raw color values in the central token definitions, not scattered throughout components.
- Follow the documented typography, spacing, border-radius, and container scales.
- Build mobile-first layouts and verify long text, narrow screens, and zoomed content.
- Reuse button, field, card, and section styles consistently.
- Preserve visible keyboard focus and sufficient contrast in all interactive states.
- Never rely on color, hover, or animation alone to communicate meaning.
- Respect reduced-motion preferences. Avoid unnecessary global selectors, inline styles, and `!important` overrides.

## Accessibility and Content

- Use semantic landmarks and a logical heading hierarchy, with a descriptive main heading for each page.
- Use links for navigation and buttons for actions.
- Associate labels, help text, and validation errors with their form fields.
- Use appropriate input types and autocomplete attributes.
- Ensure menus work with a keyboard. If a modal is used, manage focus, Escape dismissal, and focus restoration.
- Announce submission results accessibly without repeatedly interrupting screen-reader users.
- Distinguish Apex real estate services from Reliable Business Brokers content in labels and enquiry routing.
- Centralize shared business details so names, phone numbers, and opening hours remain consistent.
- Publish only approved social destinations and working links. Do not use empty or placeholder links in the finished site.

## API Routes and Server Actions

- Choose one clear submission path per form: a Route Handler or a Server Action. Do not duplicate the same business logic across both.
- Validate request size, field types, lengths, required values, and allowed service categories before processing a submission.
- Use shared validation rules where useful, but always enforce them on the server.
- Public enquiries and newsletter signups do not require customer accounts. Protect these endpoints with appropriate rate limiting, spam checks, and abuse controls.
- If a spam-protection provider is used, verify its token on the server.
- Derive delivery recipients from trusted server configuration. Never accept a visitor-controlled destination address.
- Avoid inserting untrusted form values directly into email headers or HTML. Encode content and validate any reply-to address.
- Return predictable results, for example a success object or an error object containing a safe message and optional field errors.
- Use suitable HTTP status codes for Route Handlers. Do not expose stack traces, credentials, or raw provider failures to visitors.
- Show success only after the configured service confirms acceptance. Distinguish provider acceptance from guaranteed inbox delivery when describing the result.
- Preserve form input on failure and prevent duplicate submissions while a request is pending. Handle retries without sending unintended duplicate messages.
- Enforce authorization on any future administrative endpoint; never expose administrative capabilities through public form routes.

## File Attachments

- Make contact-form attachments optional.
- Define accepted file types, maximum file size, file count, and total request size centrally. Show matching limits in the interface.
- Enforce limits on the server and verify file content/type rather than trusting filenames or browser-supplied MIME types alone.
- Reject unsupported or unsafe files. Apply appropriate scanning where supported by the storage or delivery workflow.
- Use generated storage identifiers and sanitize display names. Do not use user filenames as trusted filesystem paths.
- Keep attachments private. Use access-controlled retrieval or expiring links when necessary.
- Clean up failed and abandoned uploads according to a documented retention policy.
- Never put submitted attachments in `public/` or commit them to source control.

## Data and Storage

- Store approved static business content in typed content modules unless a CMS is explicitly required.
- Do not introduce a database solely for static pages.
- If enquiry persistence is required, store only the necessary fields and define access and retention rules.
- Use private file storage for attachments; store references and metadata separately when persistence is needed.
- Keep personal data out of URLs, analytics events, and routine logs.
- Connect newsletter signup to the approved provider, with clear consent and unsubscribe handling. Do not automatically subscribe contact-form users.
- Keep opportunity availability accurate. Show a useful empty state when no approved content is available.

## Configuration and Secrets

- Keep secrets in server environment variables. Never commit credentials or expose them through public-prefixed variables.
- Maintain an `.env.example` containing variable names and safe placeholders only.
- Validate required configuration when its feature starts or runs, and provide a clear setup error to developers.
- If delivery or subscription configuration is missing, report the feature as unavailable rather than pretending it succeeded.
- Document the purpose of each integration and the steps needed to configure it locally and in production.

## File Organization

- `app/` — routes, layouts, page metadata, loading/error boundaries, and global styles.
- `app/api/` — public HTTP handlers when Route Handlers are used.
- `app/actions/` — server actions when selected for form handling.
- `components/ui/` — reusable buttons, fields, containers, and other shared primitives.
- `components/sections/` — hero, service sections, opportunity grids, about content, and contact sections.
- `components/forms/` — interactive contact and newsletter form components.
- `content/` — approved business copy, service descriptions, contacts, and opportunity data.
- `lib/validation/` — runtime schemas and input-validation helpers.
- `lib/server/` — server-only delivery, subscription, upload, and integration utilities.
- `types/` — genuinely shared domain types; keep local types beside their feature.
- `public/` — approved public brand assets and static imagery only.
- `tests/` — focused integration and end-to-end tests where needed.

Create directories as features require them; do not scaffold empty layers. Keep tightly related code together.

## Verification and Completion

- Use the project's existing scripts and package manager. Do not assume an obsolete framework lint command.
- Run linting, TypeScript checking, and a production build for substantive implementation changes.
- Test meaningful behavior: enquiry validation and routing, provider failures, upload restrictions, and newsletter consent.
- Use mocked providers or approved test recipients for automated submissions. Do not send test messages to real business contacts without authorization.
- Check navigation, mobile layouts, keyboard access, forms, and browser errors against the running application.
- Confirm that successful requests reach the configured test destination and failed requests never show a success message.
- Avoid tests that merely repeat static implementation details. Match verification effort to the risk and scope of the change.
- Before release, check metadata, approved content, contact details, links, images, and configuration. Document any remaining setup dependency accurately.
