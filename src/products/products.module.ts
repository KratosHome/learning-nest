import {Module} from '@nestjs/common';
import {ProductsService} from "./products.service";
import {ProductsController} from "./products.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Product, ProductSchema} from "./schmemas/product.shema";

@Module({
    providers: [ProductsService],
    controllers: [ProductsController],
    imports: [
        MongooseModule.forFeature([
            {name: Product.name, schema: ProductSchema}
        ])
    ]
})
export class ProductsModule {
}
