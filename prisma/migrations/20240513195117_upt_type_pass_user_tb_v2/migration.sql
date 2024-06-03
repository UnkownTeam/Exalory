/*
  Warnings:

  - The `emailOtp` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `phoneOtp` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "emailOtp",
ADD COLUMN     "emailOtp" INTEGER,
DROP COLUMN "phoneOtp",
ADD COLUMN     "phoneOtp" INTEGER;
