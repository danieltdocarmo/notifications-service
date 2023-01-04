import { Notification } from "src/application/entities/Notification";
import { NotificationRepository } from "src/application/repositories/NotificationRepository";
import { NotificationsController } from "src/infra/http/controller/notifications.controller";

export class InMemoryNotificationRepository implements NotificationRepository {

    public notifications: Notification[];

    constructor() {
        this.notifications = [];
    }

    async getManyNotificationByRecipientId(recipientId: string): Promise<Notification[]> {
        return this.notifications.filter((notification) => notification.recipientId == recipientId);
    }
    
    async coutManyNotificationByRecipientId(recipientId: string): Promise<number> {
        return this.notifications.filter((notification) => notification.recipientId == recipientId).length;
    }

    async findById(notificationId: string): Promise<Notification | null> {
        return this.notifications.find(notification => notification.recipientId == notificationId);
    }

    async save(note: Notification): Promise<void> {
        this.notifications.filter(notification => 
            notification.id == note.id ? note : notification
        )
    }

    async create(notification: Notification): Promise<void> {
        this.notifications.push(notification);
    }

    async list(): Promise<Notification[]> {
        return this.notifications;
    }

}