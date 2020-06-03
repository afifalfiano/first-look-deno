import { serve } from 'https://deno.land/std@0.55.0/http/server.ts';

const server = serve({port: 8000});


for await (const req of server) {
    req.respond({body: "Message from Deno!"});
    console.log(req);
}