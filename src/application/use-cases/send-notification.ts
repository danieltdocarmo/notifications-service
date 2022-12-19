import { Injectable } from "@nestjs/common";
import { Content } from "../entities/Content";
import { Notification } from "../entities/Notification";
import { NotificationRepository } from "../repositories/NotificationRepository";

interface SendNotificationProps{
    recipientId: string
    content: string
    category: string
}

interface SendNotificationReturn{
    value: Notification
}

@Injectable()
export class SendNotification{
    constructor(private repository: NotificationRepository){}
    async execute(props: SendNotificationProps):Promise<SendNotificationReturn>{
        
        const {recipientId, content, category} = props;
        
        const notification = new Notification({
            recipientId,
            content: new Content(content),
            category,
            createdAt:new Date()
        });
        
        await this.repository.create(notification);
        
        return {
            value:notification
        }

    }
}