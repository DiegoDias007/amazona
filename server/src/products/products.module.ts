import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaModule } from 'src/database/database.module';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [PrismaModule]
})
export class ProductsModule {}
