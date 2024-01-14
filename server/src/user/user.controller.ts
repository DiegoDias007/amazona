import { Body, Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}
  
  @Get(":id")
  getOneUser(@Param("id", new ParseUUIDPipe()) id: number) {
    return this.UserService.getOneUser(id);
  }

  @Post()
  async createUser(@Body() createUserDto: Prisma.UserCreateInput) {
    return await this.UserService.createUser(createUserDto)
  }
}
