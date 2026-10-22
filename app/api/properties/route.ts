import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const properties = await prisma.property.findMany({
    where: { published: true },
    orderBy: { updatedAt: "desc" },
  });
  return NextResponse.json(properties);
}
