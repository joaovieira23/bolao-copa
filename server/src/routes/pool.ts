import { FastifyInstance } from "fastify";
import ShortUniqueId from "short-unique-id";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function poolRoutes(fastify: FastifyInstance) {
    fastify.get('/pools/count', async () => {
        const count = await prisma.pool.count()
    
        return { count }
      })    


      fastify.post('/pools', async (request, response) => {

        const createPoolBody = z.object({
            title: z.string(),
        });

        // Zod casa muito bem com Typescript pois dizendo que o title é uma string, 
        // não preciso nem mais fazer a typagem novamente dela

        const { title } = createPoolBody.parse(request.body);

        const generate = new ShortUniqueId({ length: 6 })
        const code = String(generate()).toUpperCase();

        try {
            await request.jwtVerify()

            await prisma.pool.create({
                data: {
                    title,
                    code,
                    ownerId: request.user.sub,

                    participants: {
                        create: {
                            userId: request.user.sub
                        }
                    }
                }
            })

            // Chegar aqui
        } catch {
            await prisma.pool.create({
                data: {
                    title,
                    code
                }
            })
        }


        return response.status(201).send({ code });
    })
}