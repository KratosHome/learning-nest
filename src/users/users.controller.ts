import {Body, Controller, Get, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateProductDto} from "../products/dto/create-product.dto";
import {UsersValidationPipe} from "./users-validation/users-validation.pipe";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    getAll(): any {
        return []
    }

    @Post()
    @UsePipes(ValidationPipe)
    @UsePipes(new UsersValidationPipe)
    create(@Body() createUserDto: CreateUserDto): any {
        console.log(createUserDto)
        return []
    }
}
