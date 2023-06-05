import {prismaClient} from '../src/prisma-client';

describe("Prisma Client", () => {
  it('should be able to create', async () => {
    const customer = await prismaClient.customer.create({
      data : {
        id: 'a-01',
        name: 'Arifal',
        email: 'arifal@arifal.com',
        phone: '088746763423'
      }
    });

    expect(customer.id).toBe('a-01');
    expect(customer.name).toBe('Arifal');
    expect(customer.email).toBe('arifal@arifal.com');
    expect(customer.phone).toBe('088746763423');
  });

  it('should be able to update', async () => {
    const customerUpdate = await prismaClient.customer.update({
      data : {
        name: 'Arifal Hidayat Salamulloh'
      },
      where: {
        id: 'a-01'
      }
    });
  
    expect(customerUpdate.name).toBe('Arifal Hidayat Salamulloh');
  });

  it('should be able to read customer', async () =>{
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: 'a-01'
      }
    });

    expect(customer.name).toBe('Arifal Hidayat Salamulloh');
  });

  it('should be able to delete customer', async () =>{
    const customer = await prismaClient.customer.delete({
      where: {
        id: 'a-01'
      }
    });

    expect(customer.id).toBe('a-01');
  });
});