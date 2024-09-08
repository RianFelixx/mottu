import { FastifyRequest, FastifyReply} from "fastify";
import { ListMottuService } from "../services/ListMottuService";

class ListMottuControler {
 async handle(request: FastifyRequest, response: FastifyReply) {
  const listMottusService = new ListMottuService();

  const mottus = await listMottusService.execute();

  response.send(mottus);
 }
}

export { ListMottuControler }