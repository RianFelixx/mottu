import { FastifyRequest, FastifyReply} from "fastify";
import { CreateMottuService } from "../services/CreateMottuService";

class CreateMottuController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    const { complexidadeDoConserto, tipoConsertoId } = request.body as { complexidadeDoConserto: number, tipoConsertoId: number};
    
    const mottuService = new CreateMottuService();
    const mottu = await mottuService.execute({ complexidadeDoConserto, tipoConsertoId });

    response.send(mottu);
  }
}

export { CreateMottuController }
