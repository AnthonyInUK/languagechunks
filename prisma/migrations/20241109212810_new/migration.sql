/*
  Warnings:

  - Added the required column `chunk` to the `LanguageChunk` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `LanguageChunk` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LanguageChunk" ADD COLUMN     "chunk" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;
