/*
  Warnings:

  - Made the column `type` on table `MailServices` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `MailServices` MODIFY `type` VARCHAR(16) NOT NULL;
