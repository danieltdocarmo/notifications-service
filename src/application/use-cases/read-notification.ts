import { Injectable } from "@nestjs/common";
import { Notification } from "../entities/Notification";
import { NotificationNotFound } from "../erros/NotificationNotFound";
import { NotificationRepository } from "../repositories/NotificationRepository";

interface ReadNotificationRequest{
    notificationId: string
}

interface ReadNotificationReturn{
    notification: Notification
}

@Injectable()
export class ReadNotification{
    constructor(private notificationRepository: NotificationRepository){}

    public async execute(request: ReadNotificationRequest): Promise<ReadNotificationReturn>{
        const { notificationId } = request;
        
        const notification = await this.notificationRepository.findById(notificationId);

        if(!notification){
            throw new NotificationNotFound(
                `Esse id nao foi encontrado ${notificationId}`)
        }

        notification.read();
        
        await this.notificationRepository.save(notification)

        return {
            notification: notification
        };        
    }
}
