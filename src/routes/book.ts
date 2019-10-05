import { getManager } from "typeorm";
import {
  JsonController,
  Get,
  Post,
  Body,
  BadRequestError,
  NotFoundError,
  Param
} from "routing-controllers";
import { Book } from "../entity/Book";
import logger from "..";

@JsonController("")
export class BookController {
  bookRepository = getManager().getRepository(Book);

  @Get("/books")
  public async getAllBooks() {
    try {
      const books = await this.bookRepository.find();
      return books;
    } catch (_err) {
      throw new NotFoundError("Books Not found");
    }
  }

  @Get("/book/:id")
  public getBookByID(@Param("id") id: string) {
    return this.bookRepository.findOne(id);
  }

  @Post("/book")
  public async createBook(@Body({ required: true }) book: Book) {
    try {
      logger.info(`Saving book: ${book}`);
      logger.info("::", JSON.stringify(book));
      return await this.bookRepository.save(book);
    } catch (err) {
      logger.error(`Error saving book ${err}`);
      throw new BadRequestError("Error saving Book");
    }
  }
}
