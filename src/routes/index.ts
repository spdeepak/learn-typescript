import { createKoaServer } from 'routing-controllers'
import { BookController } from './BookController'
import { BookDetailController } from './BookDetailController'
import { GreetController } from './GreetController'

export const server = createKoaServer({
  cors: true,
  routePrefix: '/api',
  controllers: [GreetController, BookController, BookDetailController],
})
