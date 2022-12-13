import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from './create-notification';
import { PrismaService } from './prisma.service';


@Controller('notification')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  get() {
    return this.prismaService.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {

    const { recipientId, content, category} = body;
    await this.prismaService.notification.create({
      data:{
        id: randomUUID(),
        recipientId: recipientId,
        content: content,
        category: category
      }
    })
  }
}
