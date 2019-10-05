import { Entity, Column, ObjectIdColumn, ObjectID } from "typeorm";

@Entity()
export class Book {
  @ObjectIdColumn()
  _id: ObjectID;
  @Column()
  title: string;
  @Column()
  name: string;
}
