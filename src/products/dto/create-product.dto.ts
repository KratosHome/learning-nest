import {ApiProperty} from "@nestjs/swagger";

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

    @ApiProperty()
    readonly url: string

    @ApiProperty()
    readonly isLux: boolean

    @ApiProperty()
    readonly title: string

    @ApiProperty()
    readonly subTitle: string

    @ApiProperty()
    readonly img: string

    @ApiProperty()
    readonly description: string

    @ApiProperty({type: [ProductVariantDto]})
    readonly variants: ProductVariantDto[];
}
