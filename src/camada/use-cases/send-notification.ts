import { Content } from "../model/Content";
import { Notification } from "../model/Notification";

interface SendNotificationProps{
    recipientId: string
    content: string
    category: string
}

interface SendNotificationReturn{
    value: Notification
}

export class SendNotification{
    async execute(props: SendNotificationProps):Promise<SendNotificationReturn>{
        
        const {recipientId, content, category} = props;
        
        const notification = new Notification({
            recipientId,
            content: new Content(content),
            category,
            createdAt:new Date()
        });

        return {
            value:notification
        }

    }
}