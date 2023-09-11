import {Module} from '@nestjs/common';
import 'dotenv/config';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {ProductsModule} from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { BrendsController } from './brends/brends.controller';
import { BrendsModule } from './brends/brends.module';
import { OrdersController } from './orders/orders.controller';


@Module({
    controllers: [AppController, BrendsController, OrdersController],
    imports: [
        MongooseModule.forRoot(
            process.env.mongoDB_URI,
            {}),
        ProductsModule,
        CategoriesModule,
        UsersModule,
        BrendsModule,
    ],
    providers: [AppService],
})
export class AppModule {}

console.log("MongoDB URI:", process.env.mongoDB_URI);
