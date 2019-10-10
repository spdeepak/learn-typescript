import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Author } from './Author'

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
}
