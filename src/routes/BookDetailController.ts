import { Get, JsonController, Param } from 'routing-controllers'
import { getManager } from 'typeorm'
import { BookDetail } from './../entity/BookDetail'

@JsonController('/bookDetail')
export class BookDetailController {
  public bookDetailRepository = getManager().getRepository(BookDetail)

  @Get('/:isbn')
  public async getBookDetailByISBN(@Param('isbn') isbn: string) {
    return this.bookDetailRepository.find({
      where: { ISBN: `${isbn}` },
      relations: ['book'],
    })
  }
}
