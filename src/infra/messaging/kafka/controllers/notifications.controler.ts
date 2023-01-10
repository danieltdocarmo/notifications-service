import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { SendNotification } from "src/application/use-cases/send-notification";

interface SendNotificationKafka {
    content:string;
    category:string;
    recipientId: string;
}
@Controller()
export class NotificatiosController{
    constructor(private sendNotification: SendNotification ){}
    @EventPattern('notifications.send-notifcation')
    async handleSendNotification(@Payload() {content, category, recipientId}: SendNotificationKafka) {
       await this.sendNotification.execute({content, category, recipientId});
    }
}