import {prismaClient} from "../src/prisma-client";

describe("Prisma Client", () =>{
  it("should be able to query sql", async () =>{
    const id = '1';

    const samples = await prismaClient.$queryRaw`select * from sample where id = ${id}`;
    for (const sample of samples) {
      console.info(`result data : id = ${sample.id} and name = ${sample.name}`);
    }
  });
});