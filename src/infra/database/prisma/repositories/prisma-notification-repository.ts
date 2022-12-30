import { randomUUID } from "crypto";
import { Content } from "src/application/entities/Content";
import { Notification } from "src/application/entities/Notification";
import { NotificationRepository } from "src/application/repositories/NotificationRepository";
import { PrismaService } from "../prisma.service";

export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) { }
  save(notification: Notification): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async create(notification: Notification): Promise<void> {

    await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
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
    throw new Error("Method not implemented.");
  }
}