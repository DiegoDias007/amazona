// app.module.ts

import { Module } from '@nestjs/common'; 
import { UserService } from './user/user.service'; 
import { PrismaService } from './database/database.service'; 
import { UserController } from './user/user.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './database/database.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { ProductsModule } from './products/products.module';

@Module({
  controllers: [ UserController, AuthController], 
  providers: [UserService, PrismaService, AuthService, {
    provide: APP_GUARD,
    useClass: AuthGuard,
  }], 
  imports: [AuthModule, PrismaModule, ProductsModule], 
})
export class AppModule {}
