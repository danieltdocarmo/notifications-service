import { Notification } from "src/application/entities/Notification";
import { NotificationRepository } from "src/application/repositories/NotificationRepository";

export class InMemoryNotificationRepository implements NotificationRepository{
    
    public notification: Notification[];

    constructor(){
        this.notification = [];
    }

    async create(notification: Notification): Promise<void> {
        this.notification.push(notification);
    }

    async list(): Promise<Notification[]> {
        return this.notification;
    }
    
}