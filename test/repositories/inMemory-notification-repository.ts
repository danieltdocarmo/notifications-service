import { Notification } from "src/application/entities/Notification";
import { NotificationRepository } from "src/application/repositories/NotificationRepository";
import { NotificationsController } from "src/infra/http/controller/notifications.controller";

export class InMemoryNotificationRepository implements NotificationRepository {

    public notifications: Notification[];

    constructor() {
        this.notifications = [];
    }
    
    async coutManyNotificationByRecipientId(recipientId: string): Promise<number> {
        const foundNotification = this.notifications.filter((notification) => notification.recipientId == recipientId)
        
        return foundNotification.length;
    }

    async findById(notificationId: string): Promise<Notification | null> {
        const notification = this.notifications.find(notification => notification.recipientId == notificationId)
        return notification;
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