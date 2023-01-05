import { Notification } from "src/application/entities/Notification";
import { NotificationRepository } from "src/application/repositories/NotificationRepository";
import { NotificationMappers } from "../mappers/notification-mappers";
import { PrismaService } from "../prisma.service";

export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) { }

  async coutManyNotificationByRecipientId(recipientId: string): Promise<number> {
    return await this.prismaService.notification.count({
      where: {
        recipientId
      }
    })
  }

  async getManyNotificationByRecipientId(recipientId: string): Promise<Notification[]> {
     const notifications = await this.prismaService.notification.findMany({
      where: {
        recipientId
      }
    })

    return notifications.map(notification => NotificationMappers.toDomain(notification));
  }

  async save(notification: Notification): Promise<void> {
    const raw = NotificationMappers.toPrisma(notification);
    await this.prismaService.notification.update({
      where: {
        id: raw.id
      }, data: raw
    });
  }

  async create(notification: Notification): Promise<void> {

    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        recipientId: notification.recipientId,
        content: notification.content.value,
        category: notification.category
      }
    })

  }

  async list(): Promise<any> {
    return await this.prismaService.notification.findMany();
  }

  async findById(id: string): Promise<Notification | null> {
    const notification = await this.prismaService.notification.findUnique({
      where: {
        id
      }
    });

    return NotificationMappers.toDomain(notification);
  }
}