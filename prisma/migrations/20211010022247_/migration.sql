/*
  Warnings:

  - The `created` column on the `recipes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `time` column on the `requests` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
TRUNCATE TABLE public.requests;

ALTER TABLE "recipes" DROP COLUMN "created",
ADD COLUMN     "created" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "requests" DROP COLUMN "time",
ADD COLUMN     "time" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;
