-- CreateTable
CREATE TABLE `Addresses` (
    `id` VARCHAR(191) NOT NULL,
    `address` VARCHAR(128) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Emails` (
    `id` VARCHAR(191) NOT NULL,
    `subject` VARCHAR(256) NOT NULL,
    `body` LONGTEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SentEmailReceivers` (
    `id` VARCHAR(191) NOT NULL,
    `addressId` VARCHAR(191) NOT NULL,
    `emailId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SentEmailReceivers` ADD CONSTRAINT `SentEmailReceivers_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `Addresses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SentEmailReceivers` ADD CONSTRAINT `SentEmailReceivers_emailId_fkey` FOREIGN KEY (`emailId`) REFERENCES `Emails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
