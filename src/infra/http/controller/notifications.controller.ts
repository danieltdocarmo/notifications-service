import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/dto-create-notification';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { CancelNotification } from 'src/application/use-cases/cancel-notification';
import { CoutNotificationByRecipientId } from 'src/application/use-cases/cout-notifications-by-recipient';
import { GetManyNotificationsByRecipientId } from 'src/application/use-cases/get-notifications-by-recipient-id';
import { ReadNotification } from 'src/application/use-cases/read-notification';
import { UnreadNotification } from 'src/application/use-cases/unread-notification';
import { Notification } from 'src/application/entities/Notification'; 

@Controller('notification')
export class NotificationsController {
  constructor(private readonly sendNotificationService: SendNotification,
    private readonly cancelNotificationService: CancelNotification,
    private readonly coutNotificationByRecipientId: CoutNotificationByRecipientId,
    private readonly getManyNotificationsByRecipientId: GetManyNotificationsByRecipientId,
    private readonly readNotificationService: ReadNotification,
    private readonly unreadNotificationService: UnreadNotification){}
  
  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotificationService.execute({ notificationId: id });
  }

  @Get('count/from/:recipientId')
  async countByRecipient(@Param('recipientId') recipientId: string):Promise<Number> {
    const {value} = await this.coutNotificationByRecipientId.execute({ recipientId })
    return value;
  }

  @Get('get/from/:recipientId')
  async getFromRecipient(@Param('recipientId') recipientId: string):Promise<Notification[]> {
    const {notifications} = await this.getManyNotificationsByRecipientId.execute({ recipientId })
    return notifications;
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotificationService.execute({ notificationId: id })
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unreadNotificationService.execute({ notificationId: id })
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;
    await this.sendNotificationService.execute({ recipientId, content, category });
  }
}
