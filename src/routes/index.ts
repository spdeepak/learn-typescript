import { createKoaServer } from 'routing-controllers'
import { GreetController } from './greet'
export const server = createKoaServer({
  cors: true,
  routePrefix: '/api',
  controllers: [GreetController],
})
