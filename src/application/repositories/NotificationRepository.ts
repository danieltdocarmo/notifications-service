import { Notification } from "../entities/Notification";

export abstract class NotificationRepository{
    
    abstract create(notification: Notification):Promise<void>;

    abstract list():Promise<Notification[]>;
}