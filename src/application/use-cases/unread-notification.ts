import { Injectable } from "@nestjs/common";
import { Notification } from "../entities/Notification";
import { NotificationNotFound } from "../erros/NotificationNotFound";
import { NotificationRepository } from "../repositories/NotificationRepository";

interface UnreadNotificationRequest{
    notificationId: string
}

interface UnreadNotificationReturn{
    notification: Notification
}

@Injectable()
export class UnreadNotification{
    constructor(private notificationRepository: NotificationRepository){}

    public async execute(request: UnreadNotificationRequest): Promise<UnreadNotificationReturn>{
        const { notificationId } = request;
        
        const notification = await this.notificationRepository.findById(notificationId);

        if(!notification){
            throw new NotificationNotFound(
                `Esse id nao foi encontrado ${notificationId}`)
        }

        notification.unread();
        
        await this.notificationRepository.save(notification)

        return {
            notification: notification
        };        
    }
}
