import {Injectable} from '@nestjs/common';
import {CreateProductDto} from "./dto/create-product.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Product, ProductDocument} from "./schmemas/product.shema";
import {Model} from "mongoose";
import {UpdateProductDto} from "./dto/update-product.dto";
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {
    }

    async getAll() {
        return this.productModel.find().exec()
    }

    async getById(id) {
        return this.productModel.findById(id)
    }

    async create(productDto: CreateProductDto) {
        const newProduct = new this.productModel({
            _id: uuidv4(),
            ...productDto
        });
        return newProduct.save()
    }

    async update(id, productDto: UpdateProductDto) {
        return this.productModel.findByIdAndUpdate(id, productDto)
    }

    async remove(id) {
        return this.productModel.findByIdAndRemove(id)
    }

}

