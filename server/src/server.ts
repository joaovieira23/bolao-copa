import Fastify from 'fastify';
import cors from '@fastify/cors';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import ShortUniqueId from 'short-unique-id';
import { getPackedSettings } from 'http2';

const prisma = new PrismaClient({
    log: ['query']
})

async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    })

    // fastify.get('/pools/count', async () => {
    //     const pools = await prisma.pool.findMany({
    //         where: {
    //             code: {
    //                 startsWith: 'A'
    //             }
    //         }
    //     })


    //     return { pools }
    // })

    await fastify.register(cors, {
        origin: true
    })

    fastify.get('/pools/count', async () => {
        const count = await prisma.pool.count();

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

        await prisma.pool.create({
            data: {
                title,
                code
            }
        })

        return response.status(201).send({ code });
    })

    await fastify.listen({ port: 3333, /*host: '0.0.0.0'*/ });
};

bootstrap();