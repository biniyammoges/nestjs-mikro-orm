import { Entity, Property } from "@mikro-orm/core";
import { BaseEntity } from "../../../types/base.entity";

@Entity()
export class UserEntity extends BaseEntity {
     @Property()
     name?: string

     @Property()
     email: string

     @Property()
     password: string
}