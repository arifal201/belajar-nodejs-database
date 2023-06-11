import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it('should can insert many to many relation', async () =>{
    const like = await prismaClient.like.create({
      data: {
        customer_id: 'a-02',
        product_id: 'p001'
      },include: {
        customer: true,
        product: true
      }
    });

    console.info(like);
  });

  it('should can find one with many to many relation', async () =>{
    const like = await prismaClient.customer.findUnique({
      where: {
        id: 'a-02'
      },
      include: {
        likes: {
          include: {
            product: true
          }
        }
      }
    });

    console.info(JSON.stringify(like));
  });

  it('should can find many with many to many relation', async () =>{
    const customers = await prismaClient.customer.findMany({
      where: {
        likes: {
          some: {
            product: {
              name: {
                contains: 'A'
              }
            }
          }
        }
      },
      include: {
        likes: {
          include: {
            product: true
          }
        }
      }
    });

    console.info(JSON.stringify(customers));
  });

  it('should can implicit many to many relation', async () =>{
    const customer = await prismaClient.customer.update({
      where: {
        id: 'a-02'
      },
      data: {
        loves: {
          connect: [
            {id: 'p001'},
            {id: 'p002'}
          ]
        }
      },
      include: {
        loves: true
      }
    });

    console.info(customer);
  });

  it('should can find many implicit relatioon', async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        loves: {
          some: {
            name: {
              contains: 'A'
            }
          }
        }
      },
      include: {
        loves: true
      }
    });

    console.info(JSON.stringify(customers));
  });
});