/*
  Warnings:

  - You are about to drop the column `password` on the `MailAgents` table. All the data in the column will be lost.
  - You are about to drop the column `protocol` on the `MailAgents` table. All the data in the column will be lost.
  - Added the required column `mailServiceId` to the `MailAgents` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `MailAgents` DROP COLUMN `password`,
    DROP COLUMN `protocol`,
    ADD COLUMN `mailServiceId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `MailServices` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(32) NOT NULL,
    `apiKey` VARCHAR(128) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MailAgents` ADD CONSTRAINT `MailAgents_mailServiceId_fkey` FOREIGN KEY (`mailServiceId`) REFERENCES `MailServices`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
