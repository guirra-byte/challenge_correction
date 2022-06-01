/*
  Warnings:

  - Added the required column `instructionsUrl` to the `challenges` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `challenges` ADD COLUMN `instructionsUrl` VARCHAR(191) NOT NULL;
