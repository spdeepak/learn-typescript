import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Author } from './Author'
import { BookDetail } from './BookDetail'

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  public id: number
  @Column()
  public title: string
  @Column()
  public name: string
  @ManyToMany(_type => Author, authors => authors.books, { cascade: true })
  @JoinTable()
  public authors: Author[]
  @OneToOne(_type => BookDetail, bookDetail => bookDetail.book, {
    cascade: true,
  })
  @JoinColumn()
  public bookDetail: BookDetail
}
