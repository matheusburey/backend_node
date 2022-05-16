-- CreateTable
CREATE TABLE "prices" (
    "id" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "destiny" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "prices_pkey" PRIMARY KEY ("id")
);
