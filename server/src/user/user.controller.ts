import { Body, Controller, Get, Param, ParseUUIDPipe, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}
  
  @Get()
  @UseGuards(AuthGuard)
  testing() {
    return "you're allowed to see this"
  }
}
