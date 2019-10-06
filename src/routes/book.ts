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
      return await this.bookRepository.find()
    } catch (_err) {
      throw new NotFoundError('Books Not found')
    }
  }

  @Get('/book/:id')
  public getBookByID(@Param('id') id: string) {
    logger.info(`Finding Book for id ${id}`)
    return this.bookRepository.find({
      where: {
        title: { $regex: `.*${id}.*` },
      },
    })
  }

  @Post('/book')
  public async createBook(@Body({ required: true }) book: Book) {
    try {
      return await this.bookRepository.save(book)
    } catch (err) {
      logger.error(`Error saving book ${err}`)
      throw new BadRequestError('Error saving Book')
    }
  }
}
