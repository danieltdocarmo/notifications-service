import { Notification } from "../entities/Notification";

export abstract class NotificationRepository{
    
    abstract create(notification: Notification):Promise<void>;

    abstract list():Promise<Notification[]>;

    abstract findById(notificationId: string):Promise<Notification | null>;

    abstract save(notification: Notification):Promise<void>;

    abstract coutManyNotificationByRecipientId(recipientId: string):Promise<number>;
}