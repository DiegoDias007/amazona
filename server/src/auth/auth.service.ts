import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/database/database.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(user: Prisma.UserCreateInput): Promise<string> {
    const { email } = user;
    const userExists = await this.userService.getOneUser(email);
    if (userExists) {
      throw new HttpException('Email already exists.', HttpStatus.BAD_REQUEST);
    }
    const { password } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await this.prisma.user.create({
      data: { ...user, password: hashedPassword },
    });
    const payload = { sub: createdUser.id, name: createdUser.firstName };
    const accessToken = await this.jwtService.signAsync(payload);
    return accessToken;
  }

  async login(email: string, password: string): Promise<string> {
    const user = await this.userService.getOneUser(email);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password.');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid email or password.');
    }

    const payload = { sub: user.id, name: user.firstName };
    const accessToken = await this.jwtService.signAsync(payload);
    return accessToken;
  }
}
