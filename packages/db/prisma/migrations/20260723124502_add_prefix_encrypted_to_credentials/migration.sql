/*
  Warnings:

  - You are about to drop the column `password` on the `Credential` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Credential` table. All the data in the column will be lost.
  - Added the required column `encryptedPassword` to the `Credential` table without a default value. This is not possible if the table is not empty.
  - Added the required column `encryptedUsername` to the `Credential` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Credential" DROP COLUMN "password",
DROP COLUMN "username",
ADD COLUMN     "encryptedPassword" TEXT NOT NULL,
ADD COLUMN     "encryptedUsername" TEXT NOT NULL;
