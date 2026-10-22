-- CreateTable
CREATE TABLE "SiteContent" (
    "id" TEXT NOT NULL DEFAULT 'default',
    "heroEyebrow" TEXT NOT NULL DEFAULT 'Apex Real Estate Consultants',
    "heroTitle" TEXT NOT NULL DEFAULT 'South Florida real estate',
    "heroAccent" TEXT NOT NULL DEFAULT 'guided with strategy.',
    "heroDescription" TEXT NOT NULL DEFAULT 'Residential, commercial, and business brokerage guidance for your next move.',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SiteContent_pkey" PRIMARY KEY ("id")
);

INSERT INTO "SiteContent" ("id", "updatedAt") VALUES ('default', CURRENT_TIMESTAMP);
