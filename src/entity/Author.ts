import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Book } from './Book'

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  public id: number
  @Column()
  public firstName: string
  @Column()
  public lastName: string
  @ManyToMany(_type => Book, books => books.authors)
  public books: Book[]
}
