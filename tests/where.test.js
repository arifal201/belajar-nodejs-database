import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it('should can execute where condition and operator', async () => {
    const products = await prismaClient.product.findMany({
      where: {
        OR: [
          {
            name: 'A'
          },{
            name: 'B'
          }
        ],
      },
      orderBy: {
        name: 'asc'
      }
    });

    expect(products.length).toBe(2);
  });
});