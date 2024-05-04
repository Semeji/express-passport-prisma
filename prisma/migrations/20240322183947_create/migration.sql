-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Apprenants', 'Coachs', 'Public');

-- CreateEnum
CREATE TYPE "Brand" AS ENUM ('HP', 'DELL', 'IMAC');

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "sexe" TEXT NOT NULL,
    "statut" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "computerId" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Computers" (
    "tag" TEXT NOT NULL,
    "brand" "Brand" NOT NULL,

    CONSTRAINT "Computers_pkey" PRIMARY KEY ("tag")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_computerId_fkey" FOREIGN KEY ("computerId") REFERENCES "Computers"("tag") ON DELETE SET NULL ON UPDATE CASCADE;
