import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class CreateUserDto {

    @ApiProperty()
    readonly id: string;

    @IsNotEmpty()
    @ApiProperty({
        description: "required field"
    })
    readonly email: string;

    readonly firstName: string;

    readonly role: string;

    readonly status: userStatus.client
}

export enum userStatus {
    client = "client",
    clientRegistered = "clientRegistered",
    admin = "admin",
    adminСontent = "adminСontent",
    adminOrders = "adminOrders",
}
