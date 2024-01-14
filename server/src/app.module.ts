// app.module.ts

import { Module } from '@nestjs/common'; // Import your controllers
import { UserService } from './user/user.service'; // Import your services
import { PrismaService } from './prisma.service'; // Import your Prisma service
import { UserController } from './user/user.controller';

@Module({
  controllers: [ UserController], // Add your controllers here
  providers: [UserService, PrismaService], // Add your services and other providers here
})
export class AppModule {}
