import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from "./auth.service";
import { loginUserDto } from './dto/loginUser.dto';
import { Prisma } from "@prisma/client";
import { Public } from './decorator/public.decorator';
import { Response } from "express";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  login(@Body() {email, password}: loginUserDto, @Res({ passthrough: true }) response: Response) {
    const token = this.authService.login(email, password)
    response.cookie("authToken", token, {httpOnly: true})
  }

  @Public()
  @Post("signup")
  signUp(@Body() signUpUserDto: Prisma.UserCreateInput, @Res({ passthrough: true }) response: Response) {
    const token = this.authService.signUp(signUpUserDto)
    response.cookie("authToken", token, {httpOnly: true})
  }
}
