import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from "cookie-parser";


async function bootstrap() {
  const port = 3000
  const app = await NestFactory.create(AppModule);
  
  app.use(cookieParser())
  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true
  })
  
  await app.listen(port);
  console.log(`Listening on port ${port}`)
}
bootstrap();
