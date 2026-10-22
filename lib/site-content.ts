import { prisma } from "@/lib/prisma";

export const defaultSiteContent = {
  id: "default",
  heroEyebrow: "Apex Real Estate Consultants",
  heroTitle: "South Florida real estate",
  heroAccent: "guided with strategy.",
  heroDescription: "Residential, commercial, and business brokerage guidance for your next move.",
};

export async function getSiteContent() {
  try {
    return (await prisma.siteContent.findUnique({ where: { id: "default" } })) ?? defaultSiteContent;
  } catch {
    return defaultSiteContent;
  }
}
