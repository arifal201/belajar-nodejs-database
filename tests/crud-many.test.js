import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it('should can execute create many records', async () =>{
    const {count} = await prismaClient.customer.createMany({
      data: [
        {
          id: 'a-06',
          name: 'arifal7',
          email: 'arifal6@arifal.com',
          phone: '092387836473'
        },
        {
          id: 'a-07',
          name: 'arifal7',
          email: 'arifal7@arifal.com',
          phone: '09129827434'
        }
      ]
    });

    expect(count).toBe(2);
  });

  it('should can execute update many records', async () =>{
    const {count} = await prismaClient.customer.updateMany({
      data: {
        email: 'arifal201@arifal.com'
      },
      where: {
        name: 'Arifal'
      }
    });

    expect(count).toBe(1);
  });

  it('should can execute delete many records', async () => {
    const {count} = await prismaClient.customer.deleteMany({
      where: {
        name: 'arifal7'
      }
    });

    expect(count).toBe(2);
  });

  it('should can read many records', async () => {
    const customers = await prismaClient.customer.findMany({});

    expect(customers.length).toBe(4);
  });
});