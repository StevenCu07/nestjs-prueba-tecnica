import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const exists = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (exists) {
      throw new BadRequestException('El correo ya está registrado');
    }

    return this.prisma.user.create({ data });
  }

  getUserMessages(userId: number) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      include: { messages: true },
    });
  }
}
