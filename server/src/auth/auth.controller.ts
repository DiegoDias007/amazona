import { Body, Controller, HttpCode, Post, Res } from '@nestjs/common';
import { AuthService } from "./auth.service";
import { loginUserDto } from './dto/loginUser.dto';
import { Prisma } from "@prisma/client";
import { Public } from './decorator/public.decorator';
import { Response } from "express";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(200)
  @Post("login")
  async login(@Body() {email, password}: loginUserDto, @Res({ passthrough: true }) response: Response) {
    const token = await this.authService.login(email, password)
    response.cookie("authToken", token, {httpOnly: true})
    return { success: true }
  }

  @Public()
  @Post("signup")
  async signUp(@Body() signUpUserDto: Prisma.UserCreateInput, @Res({ passthrough: true }) response: Response) {
    const token = await this.authService.signUp(signUpUserDto)
    response.cookie("authToken", token, {httpOnly: true})
    return { success: true }
  }

  @Post("logout")
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie("authToken")
    return { success: true }
  }
}
