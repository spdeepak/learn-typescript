import { createKoaServer } from 'routing-controllers'
import { BookController } from './book'
import { GreetController } from './greet'

export const server = createKoaServer({
  cors: true,
  routePrefix: '/api',
  controllers: [GreetController, BookController],
})
