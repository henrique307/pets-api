import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors:true,
  });
  //app.enableCors()
  useContainer(app.select(AppModule), {fallbackOnErrors: true});
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
   );
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
