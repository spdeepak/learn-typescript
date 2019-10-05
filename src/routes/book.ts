import {
  BadRequestError,
  Body,
  Get,
  JsonController,
  NotFoundError,
  Param,
  Post,
} from 'routing-controllers'
import { getManager } from 'typeorm'
import logger from '..'
import { Book } from '../entity/Book'

@JsonController('')
export class BookController {
  public bookRepository = getManager().getRepository(Book)

  @Get('/books')
  public async getAllBooks() {
    try {
      const books = await this.bookRepository.find()
      return books
    } catch (_err) {
      throw new NotFoundError('Books Not found')
    }
  }

  @Get('/book/:id')
  public getBookByID(@Param('id') id: string) {
    return this.bookRepository.findOne(id)
  }

  @Post('/book')
  public async createBook(@Body({ required: true }) book: Book) {
    try {
      logger.info(`Saving book: ${book}`)
      logger.info('::', JSON.stringify(book))
      return await this.bookRepository.save(book)
    } catch (err) {
      logger.error(`Error saving book ${err}`)
      throw new BadRequestError('Error saving Book')
    }
  }
}
