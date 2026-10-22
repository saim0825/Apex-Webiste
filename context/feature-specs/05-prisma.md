# Prisma Database Integration

## Purpose

Persist user-owned projects in PostgreSQL through Prisma while using Clerk as the authentication provider.

## Database setup

- Prisma ORM: `7.10.1`
- PostgreSQL database hosted by Prisma Postgres
- Schema: `prisma/schema.prisma`
- Prisma config: `prisma.config.ts`
- Generated client: `app/generated/prisma`
- Database connection: `DATABASE_URL` in `.env.local`

## Data model

The `Project` model stores:

- `id`: generated project identifier
- `clerkUserId`: Clerk user who owns the project
- `name`: project name
- `createdAt`: creation timestamp
- `updatedAt`: last update timestamp

The database migrations are stored in `prisma/migrations/`.

## API

`app/api/projects/route.ts` provides:

- `GET /api/projects`: returns projects belonging to the signed-in user
- `POST /api/projects`: creates a project for the signed-in user

`app/api/projects/[id]/route.ts` provides:

- `PATCH /api/projects/:id`: renames an owned project
- `DELETE /api/projects/:id`: deletes an owned project

Both handlers use Clerk's `auth()` helper. Unauthenticated requests receive `401 Unauthorized`.
The dynamic project handlers return `403 Forbidden` when the project does not belong to the signed-in user.

## Security rules

- Never expose `DATABASE_URL` through a `NEXT_PUBLIC_` variable.
- Project queries must always filter by `clerkUserId`.
- The server-side Prisma client is used only from server code.

## Verification

The initial project migration and the ownership migration have been applied successfully. Prisma Client generation and ESLint pass.
