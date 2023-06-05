import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it('should can do paging', async () =>{
    const page = await prismaClient.customer.findMany({
      skip: 0,
      take: 2
    });

    expect(page.length).toBe(2);
  });
});