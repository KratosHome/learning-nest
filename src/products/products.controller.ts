import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import {CreateProductDto} from "./dto/create-product.dto";
import {UpdateProductDto} from "./dto/update-product.dto";
import {ProductsService} from "./products.service";
import {ApiTags, ApiOperation, ApiParam, ApiBody, ApiOkResponse} from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {

    constructor(private productService: ProductsService) {
    }

    @ApiOperation({summary: 'Отримати всі товари'})
    @ApiOkResponse({type: [CreateProductDto], description: 'Успішно повернуто список товарів.'})
    @Get()
    getAll(): any {
        return this.productService.getAll()
    }

    @ApiOperation({summary: 'Отримати товар за ID'})
    @ApiParam({name: 'id', required: true, description: 'Ідентифікатор товару'})
    @ApiOkResponse({type: CreateProductDto, description: 'Успішно повернуто товар.'})
    @Get(':id')
    getById(@Param('id') id: string) {
        return this.productService.getById(id)
    }

    @ApiOperation({summary: 'Створити новий товар'})
    @ApiBody({type: CreateProductDto, description: 'Дані для створення товару'})
    @ApiOkResponse({description: 'Товар успішно створено.'})
    @Post()
    create(@Body() createProductDto: CreateProductDto): any {
        return this.productService.create(createProductDto)
    }

    @ApiOperation({summary: 'Оновити існуючий товар за ID'})
    @ApiParam({name: 'id', required: true, description: 'Ідентифікатор товару для оновлення'})
    @ApiBody({type: UpdateProductDto, description: 'Оновлені дані товару'})
    @ApiOkResponse({description: 'Товар успішно оновлено.'})
    @Put(':id')
    update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productService.update(id, updateProductDto)
    }

    @ApiOperation({summary: 'delete product by id'})
    @ApiParam({name: 'id', required: true, description: 'Ідентифікатор товару для видалення'})
    @ApiOkResponse({description: 'true'})
    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    delete(@Param('id') id: string): Promise<boolean>  {
        return this.productService.remove(id)
    }

}
