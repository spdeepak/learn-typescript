import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Book } from './Book'

@Entity()
export class BookDetail {
  @PrimaryGeneratedColumn()
  public id: number
  @OneToOne(_type => Book, book => book.bookDetail)
  @JoinColumn()
  public book: Book
  @Column()
  public ISBN: string
}
