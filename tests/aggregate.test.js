import {prismaClient} from '../src/prisma-client';

describe("Prisma Client", () =>{
  it('should can execute aggregate function', async () =>{
    const products = await prismaClient.product.aggregate({
      _min: {
        price: true,
        stock: true
      },
      _max: {
        price: true,
        stock: true
      },
      _avg: {
        price: true,
        stock: true
      }
    });

    console.info(products);
  });

  it('should can execute aggregate function with groupBy', async () =>{
    const products = await prismaClient.product.groupBy({
      by: ["category"],
      _min: {
        price: true,
        stock: true
      },
      _max: {
        price: true,
        stock: true
      },
      _avg: {
        price: true,
        stock: true
      }
    });

    console.info(products);
  });

  it('should can execute aggregate function with groupBy and having', async () =>{
    const products = await prismaClient.product.groupBy({
      by: ["category"],
      _min: {
        price: true,
        stock: true
      },
      _max: {
        price: true,
        stock: true
      },
      _avg: {
        price: true,
        stock: true
      },
      having: {
        price: {
          _avg: {
            gt: 2000
          }
        }
      }
    });

    console.info(products);
  });
});