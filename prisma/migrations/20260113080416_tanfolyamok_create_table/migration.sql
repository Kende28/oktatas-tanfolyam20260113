-- CreateTable
CREATE TABLE `tanfolyamok` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cim` VARCHAR(191) NOT NULL,
    `leiras` VARCHAR(191) NULL,
    `ar` INTEGER NOT NULL,
    `oraszam` INTEGER NOT NULL,
    `indulas_datum` DATETIME(3) NOT NULL,
    `online` BOOLEAN NOT NULL DEFAULT true,
    `letrehozva` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
