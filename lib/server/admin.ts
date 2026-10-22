import { auth } from "@clerk/nextjs/server";

/**
 * Restrict content-management endpoints to the configured admin accounts.
 * Set ADMIN_CLERK_USER_IDS to a comma-separated list in the deployment env.
 */
export async function requireAdmin() {
  const { userId } = await auth();
  if (!userId) return { ok: false as const, status: 401, error: "Unauthorized" };

  const configuredIds = (process.env.ADMIN_CLERK_USER_IDS ?? "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);

  // Local demos can opt into a temporary Clerk user with an explicit flag.
  // Never enable this in a deployed environment; production always uses the allow-list.
  if (process.env.NODE_ENV === "development" && process.env.ADMIN_ALLOW_ANY_DEV_USER === "true") {
    return { ok: true as const, userId };
  }

  if (configuredIds.length === 0 || !configuredIds.includes(userId)) {
    return { ok: false as const, status: 403, error: "Admin access required" };
  }

  return { ok: true as const, userId };
}
