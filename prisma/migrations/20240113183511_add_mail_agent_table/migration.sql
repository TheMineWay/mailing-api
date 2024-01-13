/*
  Warnings:

  - Added the required column `mailAgentId` to the `Emails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Emails` ADD COLUMN `mailAgentId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `MailAgents` (
    `id` VARCHAR(191) NOT NULL,
    `address` VARCHAR(128) NOT NULL,
    `password` VARCHAR(128) NOT NULL,
    `protocol` VARCHAR(8) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `MailAgents_address_key`(`address`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Emails` ADD CONSTRAINT `Emails_mailAgentId_fkey` FOREIGN KEY (`mailAgentId`) REFERENCES `MailAgents`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
