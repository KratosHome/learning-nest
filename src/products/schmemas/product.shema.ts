import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

export type ProductDocument = Product & Document

@Schema()
export class Product {
    @Prop()
    _id: string;

    @Prop()
    url: string;

    @Prop()
    title: string

    @Prop()
    subTitle: string

    @Prop()
    prise: number

}

export const ProductSchema = SchemaFactory.createForClass(Product)
