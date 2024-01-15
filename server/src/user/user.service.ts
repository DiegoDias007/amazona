import { Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/database/database.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getOneUser(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { email }})
    if (!user) {
      throw new NotFoundException("User not Found.")
    } else {
      return {...user}
    }
  }
}