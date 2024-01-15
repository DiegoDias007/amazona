// app.module.ts

import { Module } from '@nestjs/common'; // Import your controllers
import { UserService } from './user/user.service'; // Import your services
import { PrismaService } from './database/database.service'; // Import your Prisma service
import { UserController } from './user/user.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './database/database.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';

@Module({
  controllers: [ UserController, AuthController], // Add your controllers here
  providers: [UserService, PrismaService, AuthService, {
    provide: APP_GUARD,
    useClass: AuthGuard,
  }], 
  imports: [AuthModule, PrismaModule], // Add your services and other providers here
})
export class AppModule {}
