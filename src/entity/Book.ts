import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  public id: number
  @Column()
  public title: string
  @Column()
  public name: string
}
