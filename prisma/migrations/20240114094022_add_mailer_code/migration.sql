/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `MailServices` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `MailServices` ADD COLUMN `type` VARCHAR(16) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `MailServices_name_key` ON `MailServices`(`name`);
