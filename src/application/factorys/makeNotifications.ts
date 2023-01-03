import { Content } from "../entities/Content";
import { Notification, NotificationProps } from "../entities/Notification";

    export function createNotification(notification: Partial<NotificationProps> = {}){
        return new Notification({
            recipientId: 'recipient-id',
            content: new Content('test-content'),
            category: 'test category',
            ...notification
        });
    }
