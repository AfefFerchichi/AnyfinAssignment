import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRO } from './user.entity';
import { UserLoginDto } from './user.dto';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/login')
  login(@Body() body: UserLoginDto): Promise<UserRO> {
    return this.userService.login(body.email, body.password);
  }
}
