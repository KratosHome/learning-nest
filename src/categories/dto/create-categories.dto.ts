import {ApiProperty} from "@nestjs/swagger";

export class CreateCategoriesDto {
    @ApiProperty()
    readonly id: number;

    @ApiProperty()
    readonly url: number;

    @ApiProperty()
    readonly name: number;

    @ApiProperty()
    readonly isMenu: boolean

    @ApiProperty()
    readonly description: number;


}
