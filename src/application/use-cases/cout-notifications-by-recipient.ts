import { Injectable } from "@nestjs/common";
import { NotificationNotFound } from "../erros/NotificationNotFound";
import { NotificationRepository } from "../repositories/NotificationRepository";


interface CoutNotificationsRequest{
    recipientId: string
}

interface CoutNotificationResponse{
    value: number
}

@Injectable()
export class CoutNotificationByRecipientId{
    constructor(private notificationRepository: NotificationRepository){}

    public async execute(request: CoutNotificationsRequest): Promise<CoutNotificationResponse>{
        const { recipientId } = request;
        
        const notificationsNumber = await  this.notificationRepository.coutManyNotificationByRecipientId(recipientId);

        return {value: notificationsNumber}
    }
}
