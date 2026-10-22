import { prisma } from "@/lib/prisma";

export async function getPublishedProperties() {
  try {
    return await prisma.property.findMany({ where: { published: true }, orderBy: { updatedAt: "desc" } });
  } catch {
    return [];
  }
}
