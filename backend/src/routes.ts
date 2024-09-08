import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";
import { CreateMottuController } from "./controllers/CreateMottuController";
import { ListMottuControler } from "./controllers/ListMottuController";
import { DeleteMottuController } from "./controllers/DeleteMottuController";
import { UpdateMottuController } from "./controllers/UpdateMottuController"; // Importe o novo controller

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.post("/mottu", async (request: FastifyRequest, response: FastifyReply) => {
    return new CreateMottuController().handle(request, response);
  });

  fastify.get("/mottus", async (request: FastifyRequest, response: FastifyReply) => {
    return new ListMottuControler().handle(request, response);
  });

  fastify.delete("/mottu", async (request: FastifyRequest, response: FastifyReply) => {
    return new DeleteMottuController().handle(request, response);
  });

  fastify.patch("/mottu/:id", async (request: FastifyRequest, response: FastifyReply) => {
    return new UpdateMottuController().handle(request, response);
  });
}