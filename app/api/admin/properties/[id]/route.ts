import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/server/admin";
import { normalizeImageUrl } from "@/lib/server/validation";

type Context = { params: Promise<{ id: string }> };

async function findProperty(context: Context) {
  const { id } = await context.params;
  return prisma.property.findUnique({ where: { id } });
}

export async function PATCH(request: Request, context: Context) {
  const admin = await requireAdmin();
  if (!admin.ok) return NextResponse.json({ error: admin.error }, { status: admin.status });

  const existing = await findProperty(context);
  if (!existing) return NextResponse.json({ error: "Property not found" }, { status: 404 });

  const body = (await request.json()) as {
    title?: string;
    category?: string;
    description?: string;
    imageUrl?: string | null;
    published?: boolean;
  };
  const data = {
    ...(body.title !== undefined ? { title: body.title.trim() } : {}),
    ...(body.category !== undefined ? { category: body.category.trim() } : {}),
    ...(body.description !== undefined ? { description: body.description.trim() } : {}),
    ...(body.imageUrl !== undefined ? { imageUrl: normalizeImageUrl(body.imageUrl) } : {}),
    ...(body.published !== undefined ? { published: body.published } : {}),
  };

  if (data.imageUrl === undefined && body.imageUrl !== undefined) {
    return NextResponse.json({ error: "Please provide a valid image URL" }, { status: 400 });
  }

  if (Object.values(data).some((value) => typeof value === "string" && value.length === 0)) {
    return NextResponse.json({ error: "Text fields cannot be empty" }, { status: 400 });
  }

  const property = await prisma.property.update({ where: { id: existing.id }, data });
  return NextResponse.json(property);
}

export async function DELETE(_request: Request, context: Context) {
  const admin = await requireAdmin();
  if (!admin.ok) return NextResponse.json({ error: admin.error }, { status: admin.status });

  const existing = await findProperty(context);
  if (!existing) return NextResponse.json({ error: "Property not found" }, { status: 404 });

  await prisma.property.delete({ where: { id: existing.id } });
  return new NextResponse(null, { status: 204 });
}
