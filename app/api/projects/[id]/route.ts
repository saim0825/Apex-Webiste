import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Context = { params: Promise<{ id: string }> };

async function getOwnedProjectId(request: Request, context: Context) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;
  const project = await prisma.project.findUnique({
    where: { id },
    select: { id: true, clerkUserId: true },
  });

  if (!project || project.clerkUserId !== userId) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  return { id: project.id };
}

export async function PATCH(request: Request, context: Context) {
  const ownedProject = await getOwnedProjectId(request, context);
  if (ownedProject instanceof NextResponse) return ownedProject;

  const body = (await request.json()) as { name?: string };
  const name = body.name?.trim();
  if (!name) {
    return NextResponse.json({ error: "Project name is required" }, { status: 400 });
  }

  const project = await prisma.project.update({
    where: { id: ownedProject.id },
    data: { name },
  });

  return NextResponse.json(project);
}

export async function DELETE(request: Request, context: Context) {
  const ownedProject = await getOwnedProjectId(request, context);
  if (ownedProject instanceof NextResponse) return ownedProject;

  await prisma.project.delete({ where: { id: ownedProject.id } });
  return new NextResponse(null, { status: 204 });
}
