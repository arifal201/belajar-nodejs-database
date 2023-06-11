import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () =>{
  it('should be can create one to one', async () =>{
    const customer = await prismaClient.wallet.create({
      data: {
        id: 'a-02',
        balance: 2000000,
        customer_id: 'a-02'
      },
      include: {
        customer: true
      }
    });
    console.info(customer);
  });

  it('should can create one to one relation', async () =>{
    const customer = await prismaClient.customer.create({
      data: {
        id: 'a-11',
        name: 'ipal',
        email: 'ipal@gmail.com',
        phone: '76374374',
        wallet: {
          create: {
            id: 'a-11',
            balance: 100000
          }
        }
      },
      include: {
        wallet: true
      }
    });
    console.info(customer);
  });

  it('should can find one to one relation', async ()=>{
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: 'a-11'
      },
      include: {
        wallet: true
      }
    });

    console.info(customer);
  });

  it('should can find one to one relation with filter relation', async ()=>{
    const customer = await prismaClient.customer.findMany({
      where: {
        wallet: {
          isNot: null
        }
      },
      include: {
        wallet: true
      }
    });

    console.info(customer);
  });
})