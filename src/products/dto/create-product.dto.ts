import {ApiProperty} from "@nestjs/swagger";
import {IsEmpty, IsNotEmpty} from "class-validator";

class ProductVariantDto {
    @ApiProperty()
    readonly sku: number;

    @ApiProperty()
    readonly title: number;

    @ApiProperty()
    readonly oldPrise: number;

    @ApiProperty()
    readonly prise: number

    @ApiProperty()
    readonly count: number

    @ApiProperty()
    readonly img: number
}


export class CreateProductDto {
    @ApiProperty()
    readonly id: string;

    @ApiProperty()
    readonly createdAt: Date;

    @ApiProperty()
    readonly updatedAt: Date;

    @IsNotEmpty()
    @ApiProperty({
        description: "required field"
    })
    readonly url: string

    @IsNotEmpty()
    @ApiProperty({
        description: "required field"
    })
    readonly isLux: boolean

    @IsNotEmpty()
    @ApiProperty({
        description: "required field"
    })
    readonly title: string

    @ApiProperty()
    readonly subTitle: string

    @IsNotEmpty()
    @ApiProperty({
        description: "required field"
    })
    readonly img: string

    @ApiProperty()
    readonly description: string

    @ApiProperty({type: [ProductVariantDto]})
    readonly variants: ProductVariantDto[];
}
