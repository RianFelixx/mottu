import { FastifyRequest, FastifyReply} from "fastify";
import { DeleteMottuService } from "../services/DeleteMottuService";

class DeleteMottuController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    const { id } = request.query as { id: string };
    const mottuService = new DeleteMottuService();

    const mottu = await mottuService.execute({ id });

    response.send(mottu);
  }
}

export { DeleteMottuController }