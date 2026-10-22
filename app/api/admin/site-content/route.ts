import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/server/admin";
import { defaultSiteContent } from "@/lib/site-content";

export async function GET() {
  const admin = await requireAdmin();
  if (!admin.ok) return NextResponse.json({ error: admin.error }, { status: admin.status });
  const content = await prisma.siteContent.upsert({ where: { id: "default" }, create: defaultSiteContent, update: {} });
  return NextResponse.json(content);
}

export async function PATCH(request: Request) {
  const admin = await requireAdmin();
  if (!admin.ok) return NextResponse.json({ error: admin.error }, { status: admin.status });
  const body = (await request.json()) as Partial<typeof defaultSiteContent>;
  const fields = ["heroEyebrow", "heroTitle", "heroAccent", "heroDescription"] as const;
  const data = Object.fromEntries(
    fields.flatMap((field) => {
      const value = body[field]?.trim();
      return value ? [[field, value]] : [];
    }),
  ) as Partial<typeof defaultSiteContent>;
  const content = await prisma.siteContent.upsert({ where: { id: "default" }, create: { ...defaultSiteContent, ...data }, update: data });
  return NextResponse.json(content);
}
