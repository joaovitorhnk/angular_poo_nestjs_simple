import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Users } from './interfaces/users.interface';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<Users> {
    const response = this.prisma.user.create({
      data,
    });

    return response;
  }
  async findOne(username: string, password: string): Promise<Users[]> {
    const response = this.prisma.user.findMany({
      where: {
        AND: [
          {
            username: username,
            password: password,
          },
        ],
      },
    });

    console.log(response);
    return response;
  }
}
