import { Notification } from "src/application/entities/Notification";
import { NotificationRepository } from "src/application/repositories/NotificationRepository";

export class InMemoryNotificationRepository implements NotificationRepository {

    public notifications: Notification[];

    constructor() {
        this.notifications = [];
    }

    async findById(notificationId: string): Promise<Notification | null> {
        const notification = this.notifications.find(notification => notification.id == notificationId)
        return notification;
    }

    async save(note: Notification): Promise<void> {
        this.notifications.filter(notification => {
            if (notification.id == note.id) {
                return note
            }
        })
    }

    async create(notification: Notification): Promise<void> {
        this.notifications.push(notification);
    }

    async list(): Promise<Notification[]> {
        return this.notifications;
    }

}