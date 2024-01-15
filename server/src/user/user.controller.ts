import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}
  
  @Get()
  testing() {
    return "you're allowed to see this"
  }
}
