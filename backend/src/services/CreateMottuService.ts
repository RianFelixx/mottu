import prismaClient from "../prisma";
interface CreateMottuProps {
  complexidadeDoConserto: number;
  tipoConsertoId: number;
}

class CreateMottuService {
  async execute({ complexidadeDoConserto, tipoConsertoId }: CreateMottuProps) {
    if(!complexidadeDoConserto || !tipoConsertoId) {
      throw new Error("Preencha todos os campos!");
    }

    const mottu = await prismaClient.mottu.create({
      data: {
        complexidadeDoConserto,
        tipoConsertoId,
        status: "Andamento" // todo status começa com "andamento" e termina com "finalozado"
      }
    });

    return mottu;
  }
}

export { CreateMottuService }
