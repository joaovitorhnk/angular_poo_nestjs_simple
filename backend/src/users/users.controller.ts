import { Body, Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/users.dto';
import { Users } from './interfaces/users.interface';
import { UsersService } from './users.service';

@Controller('/api/users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Post()
  @HttpCode(200)
  create(@Body() body: CreateUserDto): Promise<Users> {
    return this.service.create(body);
  }
  @Get()
  findOne(@Req() { username, password }): Promise<Users[]> {
    return this.service.findOne(username, password);
  }
}
