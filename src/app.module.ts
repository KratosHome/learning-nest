import {Module} from '@nestjs/common';
import 'dotenv/config';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {ProductsModule} from './products/products.module';


@Module({
    controllers: [AppController],
    imports: [
        MongooseModule.forRoot(
            process.env.mongoDB_URI,
            {}),
        ProductsModule,
    ],
    providers: [AppService],
})
export class AppModule {}

console.log("MongoDB URI:", process.env.mongoDB_URI);

// cy6pwHCyfgc3HjVx
