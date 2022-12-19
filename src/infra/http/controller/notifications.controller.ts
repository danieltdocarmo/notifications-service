import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from '../dtos/dto-create-notification';
import { PrismaService } from '../../database/prisma/prisma.service';
import { NotificationRepository } from 'src/application/repositories/NotificationRepository';
import { SendNotification } from 'src/application/use-cases/send-notification';


@Controller('notification')
export class NotificationsController {
  constructor(private readonly sendNotification: SendNotification) {}

  @Get()
  async get() {
  
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {

    const { recipientId, content, category} = body;
    
    await this.sendNotification.execute({recipientId, content, category});
   
  }
}
