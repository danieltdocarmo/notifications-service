import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "../repositories/NotificationRepository";
import { Notification } from '../entities/Notification';


interface GetNotificationsRequest{
    recipientId: string
}

interface GetNotificationResponse{
    notifications: Notification[]
}

@Injectable()
export class GetManyNotificationsByRecipientId{
    constructor(private notificationRepository: NotificationRepository){}

    public async execute(request: GetNotificationsRequest): Promise<GetNotificationResponse>{
        const { recipientId } = request;
        
        const notifications = await this.notificationRepository.getManyNotificationByRecipientId(recipientId);

        return {notifications}
    }
}