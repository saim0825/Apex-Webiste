/*
  Warnings:

  - Added the required column `clerkUserId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "clerkUserId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Project_clerkUserId_idx" ON "Project"("clerkUserId");
