import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/server/admin";
import { normalizeImageUrl } from "@/lib/server/validation";

export async function GET() {
  const admin = await requireAdmin();
  if (!admin.ok) return NextResponse.json({ error: admin.error }, { status: admin.status });

  const properties = await prisma.property.findMany({ orderBy: { updatedAt: "desc" } });
  return NextResponse.json(properties);
}

export async function POST(request: Request) {
  const admin = await requireAdmin();
  if (!admin.ok) return NextResponse.json({ error: admin.error }, { status: admin.status });

  const body = (await request.json()) as {
    title?: string;
    category?: string;
    description?: string;
    imageUrl?: string;
    published?: boolean;
  };
  const title = body.title?.trim();
  const category = body.category?.trim();
  const description = body.description?.trim();
  const imageUrl = normalizeImageUrl(body.imageUrl);

  if (!title || !category || !description) {
    return NextResponse.json(
      { error: "Title, category, and description are required" },
      { status: 400 },
    );
  }
  if (imageUrl === undefined) return NextResponse.json({ error: "Please provide a valid image URL" }, { status: 400 });

  const property = await prisma.property.create({
    data: {
      title,
      category,
      description,
      imageUrl,
      published: body.published === true,
    },
  });

  return NextResponse.json(property, { status: 201 });
}
