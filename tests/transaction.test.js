import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it('should can execute sequential transaction', async () =>{
    const [arifal2,arifal3] = await prismaClient.$transaction([
      prismaClient.customer.create({
        data: {
          id: 'a-02',
          name: 'Arifal',
          email: 'arifal2@arifal.com',
          phone: '09394837434'
        }
      }),
      prismaClient.customer.create({
        data: {
          id: 'a-03',
          name: 'Arifal3',
          email: 'arifal3@arifal.com',
          phone: '090129834345'
        }
      })
    ]);
  });

  it('should can execute interactive transaction', async () => {
    const [arifal4,arifal5] = await prismaClient.$transaction(async (prisma) => {
      const arifal4 = await prisma.customer.create({
        data: {
          id: 'a-04',
          name: 'arifal4',
          email: 'arifal4@arifal.com',
          phone: '09120938434'
        }
      })
      const arifal5 = await prisma.customer.create({
        data: {
          id: 'a-05',
          name: 'arifal5',
          email: 'arifal5@arifal.com',
          phone: '878737647364'
        }
      })
      return [arifal4,arifal5];
    });

    expect(arifal4.name).toBe('arifal4');
    expect(arifal5.name).toBe('arifal5');
  });
});