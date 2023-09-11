import {Document} from "mongoose";
import {Prop, Schema} from "@nestjs/mongoose";


export type UserDocument = User & Document

@Schema()
export class User {
    @Prop()
    id: string
    @Prop({required: true})
    email: string
    @Prop()
    firstName: string
}


