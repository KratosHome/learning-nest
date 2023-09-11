import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from '@nestjs/common';
import {userStatus} from "../dto/create-user.dto";

@Injectable()
export class UsersValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (!(value.status in userStatus)) {
            throw new BadRequestException(`${value.status} is not a valid status`)
        }
        return value;
    }
}
