import { PrismaClient } from 'generated/prisma/client';
import { faker } from '@faker-js/faker';
import dotenv from 'dotenv'

dotenv.config()
console.log("Seeding...")

const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction(async tx => {
    for (let i = 0; i < 25; i++) {
      await tx.tanfolyamok.create({
        data: {
          cim: faker.location.streetAddress(),
          leiras: faker.company.catchPhraseDescriptor(),
          ar: faker.number.int({
            min: 0,
            max: 300000
          }),
          ora_szam: faker.number.int({
            min: 1,
            max: 200,
          }),
          indulas_datum: faker.date.future(),
          online: faker.datatype.boolean(),
        },
      });
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
