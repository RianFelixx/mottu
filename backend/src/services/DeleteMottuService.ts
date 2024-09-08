import prismaClient from "../prisma";

interface DeleteMottuProps {
  id: string;
}

class DeleteMottuService {
  async execute({ id }: DeleteMottuProps) {

    if(!id) {
      throw new Error("Solicitação invalida.")
    }

    const findMottu = await prismaClient.mottu.findFirst({
      where: {
        id: id
      }
    });

    if(!findMottu) {
      throw new Error("Moto não existe!")
    }

    await prismaClient.mottu.delete({
      where: {
        id: findMottu.id
      }
    });

    return { message: "Deletado com sucesso!"}

  }
}

export { DeleteMottuService }