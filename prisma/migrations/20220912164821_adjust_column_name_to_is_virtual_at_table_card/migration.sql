/*
  Warnings:

  - You are about to drop the column `isVitual` on the `creditCards` table. All the data in the column will be lost.
  - Added the required column `isVirtual` to the `creditCards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "creditCards" DROP COLUMN "isVitual",
ADD COLUMN     "isVirtual" BOOLEAN NOT NULL;
