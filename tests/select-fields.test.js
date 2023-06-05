import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () =>{
  it('should can create and select fields', async () =>{
    const customers = await prismaClient.customer.create({
      data: {
        id: 'a-08',
        name: 'arifal',
        email: 'arifal8@arifal.com',
        phone: '763746753645'
      },
      select: {
        id: true,
        email: true
      }
    });

    expect(customers.id).toBe('a-08');
    expect(customers.email).toBe('arifal8@arifal.com');
    expect(customers.name).toBeUndefined();
    expect(customers.phone).toBeUndefined();
  });

  it('should can read many and select fields', async ()=>{
    const customers = await prismaClient.customer.findMany({
      select: {
        id: true,
        name: true
      }
    });

    for (const customer of customers) {
      expect(customer.id).toBeDefined();
      expect(customer.name).toBeDefined();
      expect(customer.email).toBeUndefined();
      expect(customer.phone).toBeUndefined();
    }
  });
});