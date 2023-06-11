import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it('should be can create categories with auto increment primary key', async () => {
    const category = await prismaClient.category.create({
      data: {
        name: 'Anime'
      }
    });

    console.info(category);
    expect(category).toHaveProperty("id");
  });
});