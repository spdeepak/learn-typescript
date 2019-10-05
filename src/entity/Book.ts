import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity()
export class Book {
  @ObjectIdColumn()
  public _id: ObjectID
  @Column()
  public title: string
  @Column()
  public name: string
}
