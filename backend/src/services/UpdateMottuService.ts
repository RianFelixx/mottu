import prismaClient from "../prisma";

interface UpdateMottuProps {
  id: string;
  tempoReal: number;
  mecanicoId: number;
}

class UpdateMottuService {
  async execute({ id, tempoReal, mecanicoId }: UpdateMottuProps) {
    if (!tempoReal || !mecanicoId) {
      throw new Error("Preencha todos os campos para atualizar!");
    }

    const mottuExists = await prismaClient.mottu.findUnique({
      where: { id },
    });

    if (!mottuExists) {
      throw new Error("Moto não encontrada!");
    }

    const mottu = await prismaClient.mottu.update({
      where: { id },
      data: {
        tempoReal,
        mecanicoId,
        status: "Finalizado",
        updated_at: new Date(),
      },
    });

    return mottu;
  }
}

export { UpdateMottuService };
