import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from "./auth.service";
import { loginUserDto } from './dto/loginUser.dto';
import { Prisma } from "@prisma/client";
import { Public } from './decorator/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  login(@Body() {email, password}: loginUserDto) {
    return this.authService.login(email, password);
  }

  @Public()
  @Post("signup")
  signUp(@Body() signUpUserDto: Prisma.UserCreateInput) {
    return this.authService.signUp(signUpUserDto)
  }
}
