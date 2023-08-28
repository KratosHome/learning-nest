import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import {CreateProductDto} from "./dto/create-product.dto";
import {UpdateProductDto} from "./dto/update-product.dto";
import {ProductsService} from "./products.service";

@Controller('products')
export class ProductsController {

    constructor(private productService: ProductsService) {
    }

    @Get()
    getAll(): any {
        return this.productService.getAll()
    }

    @Get(":id")
    getById(@Param("id") id: string) {
        return this.productService.getById(id)
    }

    @Post()
    create(@Body() createProductDto: CreateProductDto): any {
        return this.productService.create(createProductDto)
    }

    @Put(":id")
    update(@Param("id") id: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productService.update(id, updateProductDto)
    }

    @Delete(":id")
    @HttpCode(HttpStatus.OK)
    delete(@Param("id") id: string) {
        return this.productService.remove(id)
    }

}
