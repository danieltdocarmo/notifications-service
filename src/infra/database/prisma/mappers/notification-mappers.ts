import { Notification as RawNotification } from '@prisma/client';
import { Content } from 'src/application/entities/Content';
import { Notification } from 'src/application/entities/Notification';

export class NotificationMappers{
    static toPrisma(notification:Notification){
        return {
            id: notification.id,
            category: notification.category,
            content: notification.content.value,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.createdAt
        }
    }

    static toDomain(raw: RawNotification): Notification{
        return new Notification({
            recipientId: raw.recipientId,
            category: raw.category,
            content: new Content(raw.content),
            canceledAt: raw.canceledAt,
            readAt: raw.readAt,
            createdAt: raw.createdAt
        }, raw.id);
    }
}