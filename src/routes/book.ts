import {
  BadRequestError,
  Body,
  Get,
  JsonController,
  NotFoundError,
  Param,
  Post,
  Put,
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
      const books = await this.bookRepository.find({
        relations: ['authors'],
      })
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
      return await this.bookRepository.save(book)
    } catch (err) {
      logger.error(`Error saving book ${err}`)
      throw new BadRequestError('Error saving Book')
    }
  }

  @Put('/book/:id')
  public async updateBookById1(
    @Param('id') id: number,
    @Body({ required: true }) book: Book
  ) {
    return this.bookRepository
      .findOne(id)
      .then(async existingBook => {
        const isBookNotPresent = !Object.keys(existingBook).length
        if (isBookNotPresent) {
          logger.error(`Book with id ${id} not found`)
          throw new NotFoundError(`Book with id ${id} not found`)
        } else if (id != book.id) {
          logger.error(
            `ID in request (${id}) and id of Book (${book.id}) should match`
          )
          throw new BadRequestError(`ID in request and id of Book should match`)
        } else {
          logger.info(`Updating book with id: ${id}`)
          const result = await this.bookRepository.save(book)
          logger.info(`Updated book with id: ${result}`)
          return result
        }
      })
      .catch(err => {
        logger.error(`err ${err}`)
      })
  }
}
