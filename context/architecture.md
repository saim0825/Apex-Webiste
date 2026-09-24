# Architecture Context — Apex Real Estate Consultants

## Purpose

Build a public informational and enquiry website for residential and commercial real estate services in South Florida, with a clearly identified Reliable Business Brokers offering. The application presents approved business content and opportunities, accepts consultation enquiries with optional attachments, and supports newsletter subscriptions.

This document defines the target architecture. Provider integrations described here require implementation and configuration; they are not assumed to exist already.

## Stack

| Layer | Technology | Role |
| --- | --- | --- |
| Framework | Next.js App Router and TypeScript | Page rendering, routing, metadata, and server endpoints |
| UI | React and Tailwind CSS | Reusable components and responsive layouts |
| Design tokens | CSS custom properties | Shared colors, typography, spacing, and component styling from `ui-context.md` |
| Business content | Typed local content modules | Approved services, contacts, business copy, and opportunity records |
| Runtime validation | Shared server-enforced validation schemas | Validate enquiry, subscription, and upload input |
| Email delivery | Transactional email provider, to be selected | Deliver enquiries to configured business recipients |
| Newsletter | Subscription provider, to be selected | Manage consent, subscriber records, and unsubscribe handling |
| Attachment storage | Private object storage, to be selected | Hold optional enquiry files outside public assets |
| Abuse protection | Server-side spam verification and shared rate-limit service | Protect public submission endpoints |
| Authentication | No customer authentication in initial scope | Public browsing and enquiries without accounts |
| Database | No application database required initially | Add only if a defined persistence or administration requirement arises |
| Hosting | Next.js-compatible server environment | Render pages and run submission endpoints; static-only hosting is insufficient |

Keep existing compatible dependency versions and use their installed documentation. Provider selection must account for deployment request limits, attachment handling, retention, and operational needs.

## System Boundaries

- `app/` owns routes, layouts, metadata, and page composition. Pages primarily render on the server.
- `app/api/` owns public HTTP submission handlers. Use Route Handlers for the contact and newsletter forms; do not add a duplicate Server Action path for the same operations.
- `components/ui/` owns shared presentation primitives such as buttons, fields, and containers.
- `components/sections/` owns website sections such as the hero, services, opportunity grid, about content, header, and footer.
- `components/forms/` owns browser interaction, client-side feedback, pending states, and calls to submission endpoints.
- `content/` owns approved business information and opportunity records. It contains no enquiry data or secrets.
- `lib/validation/` owns reusable input rules. Server validation remains authoritative.
- `lib/server/` owns recipient routing, email, subscriptions, uploads, rate limiting, and provider adapters. Browser code must not import these modules.
- `types/` owns genuinely shared domain contracts. Keep feature-specific types near their implementation.
- `public/` contains approved public imagery and brand assets only.

Create folders when required rather than adding empty architectural layers.

## Routes and Page Responsibilities

| Route | Responsibility |
| --- | --- |
| `/` | Introduce Apex, summarize service paths, highlight opportunities, and direct visitors to contact |
| `/services` | Explain residential, commercial, and business brokerage offerings |
| `/opportunities` | Present approved opportunities and contextual enquiry actions |
| `/about` | Present the mission, approach, and approved consultant information |
| `/contact` | Show contact details, confirmed hours, and the enquiry form |
| `/privacy` | Explain approved enquiry, attachment, and subscription data handling |
| `/api/contact` | Validate and deliver enquiries with optional attachments |
| `/api/newsletter` | Validate and register newsletter subscriptions |

Use shared navigation and footer components. Service and opportunity links may preselect an enquiry interest using a non-sensitive identifier. Do not place names, email addresses, messages, or file URLs in query strings.

## Rendering and Client Boundaries

- Render public business content in Server Components. Use static rendering where compatible with the content and installed framework version.
- Client Components are limited to interactive features such as the mobile menu and submission forms.
- Keep approved static content versioned with the code. Content changes are reviewed and deployed through the normal release workflow.
- Do not add a CMS, live listing feed, customer dashboard, or administrative interface without a separate requirement.
- Use explicit approved external destinations for brokerage opportunities or social profiles. The application does not scrape or mirror third-party listings automatically.
- Submission endpoints run on the server and return uncached responses. Secrets and private provider logic never enter browser bundles.

## Data Contracts

### Public Business Content

- `Service`: stable ID, category, title, description, and contact action.
- `Consultant`: stable ID, approved name, role, service responsibilities, and public phone number.
- `Opportunity`: stable ID, property or business category, title, approved description, images, availability, and optional approved location and price.
- `BusinessDetails`: approved brand name, service area, opening hours, and public destinations.

Missing optional opportunity information is omitted from the UI. It is never fabricated.

### Private Form Input

- `ContactSubmission`: name, email, message, optional service category or opportunity ID, optional attachments, and spam-verification data.
- `NewsletterSubmission`: email, explicit subscription consent, and spam-verification data.

These are request contracts, not permission to retain submissions indefinitely. Configure recipients on the server, separately from public contact content.

## Enquiry Flow

1. The visitor enters contact information and an enquiry, optionally selecting files.
2. The browser provides immediate validation and submits multipart form data to `/api/contact`.
3. The server applies request limits, abuse checks, and authoritative field and file validation.
4. The server resolves the recipient from trusted configuration. Residential, commercial, business, and general enquiries must each have a configured route or an approved fallback.
5. Validated files are placed in private storage using generated identifiers and the agreed security controls.
6. The email adapter delivers the enquiry and approved attachment references to the configured recipient.
7. The endpoint returns success only when the provider confirms acceptance. The UI must not claim guaranteed inbox delivery.
8. Failure returns a safe, actionable error. Preserve entered text and clean up unused uploads according to the retention policy.

Prevent duplicate submission while a request is pending. Use provider idempotency where available, or short-lived shared deduplication state when needed. Do not use process-local memory as the only protection across multiple server instances.

Choose attachment limits that fit the deployed request and execution limits. If larger files become a requirement, design a separately validated direct-upload and finalization flow rather than silently exceeding those limits.

## Newsletter Flow

1. The visitor explicitly submits their email for news and listing updates.
2. `/api/newsletter` validates the input, consent, and abuse-protection result.
3. The server subscription adapter calls the configured provider.
4. The UI displays the provider-appropriate result, including a confirmation-email instruction when double opt-in is configured.
5. Subscriber records, unsubscribe processing, and suppression are managed by the provider.

Contact enquiries never automatically create newsletter subscriptions. Handle repeat signup requests without exposing subscriber information unnecessarily.

## Storage Model

- **Repository content:** approved business copy, service definitions, consultant details, and opportunity records.
- **Public assets:** approved brand and website images. These are intentionally public.
- **Private object storage:** optional enquiry attachments, using generated keys, restricted access, and a defined retention period.
- **Email service and business inbox:** enquiry delivery and any provider-managed delivery records. Configure retention and access appropriately.
- **Newsletter provider:** subscriber email addresses, consent information, subscription state, and unsubscribe records.
- **Shared short-lived state:** rate limits and, if required, deduplication records with expiration. This is infrastructure state, not a customer database.
- **Environment configuration:** private credentials, recipient addresses, and integration settings. Document names in `.env.example` without real secrets.

No separate enquiry database is required for the initial scope. If searchable history, retries across outages, or staff administration becomes necessary, explicitly design durable storage and access controls before adding those features.

## Auth and Access Model

- Visitors can browse, enquire, and subscribe without signing in.
- Public endpoints accept only the fields required for their defined operation. They cannot update website content or choose arbitrary email recipients.
- Repository access controls govern content changes and deployment.
- Service credentials remain server-side and use the minimum permissions needed.
- Attachments are private. Any retrieval links sent to authorized recipients must expire or require access control.
- No public administrative routes are included. Future administration requires authentication and authorization before implementation.
- Configure origin and request checks appropriately for the chosen endpoint design; they supplement rather than replace spam and rate-limit controls.

## Reliability and Operations

- Validate integration configuration and provide clear developer diagnostics for missing settings.
- If a required provider is unavailable, show a truthful failure state and a published phone contact alternative.
- Set bounded provider timeouts. Do not perform indefinite background work inside request handlers.
- Record correlation IDs, operation outcomes, duration, and safe error categories. Do not log enquiry bodies, email addresses, attachments, or credentials routinely.
- Avoid blind retries for operations that may already have succeeded. Use idempotency or a defined reconciliation approach.
- Test with approved test recipients and provider test facilities.
- Run production checks before launch, including rendering, form delivery, attachment restrictions, newsletter behavior, mobile layouts, and keyboard access.

## Invariants

1. Public pages use only approved business information and genuine opportunity content.
2. Apex real estate services and Reliable Business Brokers remain clearly identified in content and enquiry routing.
3. Secrets, private recipient configuration, and submitted personal data never appear in client bundles or public assets.
4. Every submission is validated on the server regardless of browser validation.
5. Contact and newsletter forms never display fabricated success when configuration is missing or delivery fails.
6. Attachments remain private and must pass enforced file and request limits.
7. Contact enquiries do not imply newsletter consent.
8. Public endpoints cannot mutate approved site content or perform administrative actions.
9. Unconfigured recipients, hours, listings, and provider settings are treated as missing inputs, not invented values.
10. New infrastructure is added only for a defined requirement, with ownership, retention, and failure behavior documented.
