import {Prop, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

export type ProductDocument = Category & Document

export class Category {
    @Prop()
    url: string;

    @Prop()
    title: string

    @Prop()
    subTitle: string

    @Prop()
    prise: number

}

export const ProductSchema = SchemaFactory.createForClass(Category)
