import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateMottuService } from "../services/UpdateMottuService";

class UpdateMottuController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    const { id } = request.params as { id: string };
    const { tempoReal, mecanicoId } = request.body as { tempoReal: number, mecanicoId: number };

    const updateMottuService = new UpdateMottuService();
    const mottu = await updateMottuService.execute({ id, tempoReal, mecanicoId });

    response.send(mottu);
  }
}

export { UpdateMottuController };
