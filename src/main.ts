import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle('Sharm Api')
      .setDescription("Документація")
      .setVersion("0.0.1")
      .addTag("teg")
      .build()

  const document = SwaggerModule.createDocument(app, config )
  SwaggerModule.setup("api/doc", app, document)

  await app.listen(3000);
}
bootstrap();
