import { Injectable } from "@nestjs/common";
import { Notification } from "../entities/Notification";
import { NotificationNotFound } from "../erros/NotificationNotFound";
import { NotificationRepository } from "../repositories/NotificationRepository";

interface CancelNotificationRequest{
    notificationId: string
}

interface SendNotificationReturn{
    value: Notification
}

@Injectable()
export class CancelNotification{
    constructor(private notificationRepository: NotificationRepository){}

    public async execute(request: CancelNotificationRequest): Promise<SendNotificationReturn>{
        const { notificationId } = request;
        
        const notification = await this.notificationRepository.findById(notificationId);

        if(!notification){
            throw new NotificationNotFound(
                `Esse id nao foi encontrado ${notificationId}`)
        }

        notification.cancel();
        
        await this.notificationRepository.save(notification)

        return {
            value: notification
        };        
    }
}
