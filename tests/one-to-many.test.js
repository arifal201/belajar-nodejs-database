import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it('should can insert and include', async () => {
    const comment = await prismaClient.comment.create({
      data: {
        customer_id: 'a-03',
        title: 'test insert data',
        description: 'test insert data desc'
      },
      include: {
        customer: true
      }
    });
    console.info(comment);
  });

  it('should can insert with relation', async () => {
    const customers = await prismaClient.customer.create({
      data: {
        id: 'b-01',
        name: 'arifal-B',
        email: 'arifalb@gmail.com',
        phone: '8787767643',
        comments:{
          createMany: {
            data: [
              {
                title: 'test create with relation',
                description: 'test description'
              },
              {
                title: 'test create with relation',
                description: 'test description'
              }
            ]
          }
        }
      },
      include: {
        comments: true
      }
    });
    console.info(customers);
  });

  it('should can find many with filter relation', async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        comments: {
          some: {
            title: {
              contains: 'test'
            }
          }
        }
      },include: {
        comments: true
      }
    });
    console.info(JSON.stringify(customers));
  });
});