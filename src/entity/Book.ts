import { Transform } from 'class-transformer'
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

class Detail {
  public ISBN: string
}

@Entity()
export class Book {
  @ObjectIdColumn()
  @Transform((id: ObjectID) => id.toHexString(), { toPlainOnly: true })
  public _id: ObjectID
  @Column()
  public title: string
  @Column()
  public name: string
  @Column()
  public detail: Detail
}
