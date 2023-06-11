import {prismaClient} from '../src/prisma-client';
describe("Prisma Client", () =>{
  it('should can execute count', async () => {
    const count = await prismaClient.customer.count({
      where: {
        name: 'arifal'
      }
    });

    expect(count).toBe(2);
  });
});