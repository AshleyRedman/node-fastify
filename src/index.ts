import Fastify from 'fastify';
import dotenv from 'dotenv';
import { z } from 'zod';

const PORT = 8000;

dotenv.config();

const env = z.object({
    NODE_ENV: z.union([z.literal('development'), z.literal('production')])
});

env.parse(process.env);

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof env> {}
    }
}

export const server = Fastify({
    logger: process.env.NODE_ENV === 'production'
});

server.get('/', (req, res) => {
    res.send({ env: process.env.NODE_ENV, req: req.headers });
});

server.listen({ port: PORT }, function (err, address) {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }

    console.info(`Server started on port ${PORT}`);
});
