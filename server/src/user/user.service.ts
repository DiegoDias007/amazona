import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(user: Prisma.UserCreateInput): Promise<User> {
    const { password } = user;
    const hashedPassword = await bcrypt.hash(password, 10)
    const createdUser = await this.prisma.user.create(
      {data: {...user, password: hashedPassword}}
    )
    return {...createdUser}
  }

  async getOneUser(id: number): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id }})
    if (!user) {
      throw new NotFoundException("User not Found.")
    } else {
      return {...user}
    }
  }
}