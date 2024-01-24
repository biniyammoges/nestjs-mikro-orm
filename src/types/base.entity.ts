import { PrimaryKey, Property } from "@mikro-orm/core";

export abstract class BaseEntity {
     @PrimaryKey({ type: "uuid" })
     id: string

     @Property()
     createdAt: Date

     @Property()
     updatedAt: Date
}