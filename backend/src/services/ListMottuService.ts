import prismaClient from "../prisma";

class ListMottuService {
  async execute() {
    const mottus = await prismaClient.mottu.findMany();

    return mottus;
  }
}

export { ListMottuService };