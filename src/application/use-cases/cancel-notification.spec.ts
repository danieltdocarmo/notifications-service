import { NotFoundException } from "@nestjs/common";
import { InMemoryNotificationRepository } from "../../../test/repositories/inMemory-notification-repository";
import { Content } from "../entities/Content";
import { Notification } from "../entities/Notification";
import { NotificationNotFound } from "../erros/NotificationNotFound";
import { CancelNotification } from "./cancel-notification";

describe('Cancel Notification Test', ()=>{
    it('should be able to cancel a notification', async () =>{
       const inMemoryNotificationRepository = new InMemoryNotificationRepository();
       
        const notification = new Notification({
            recipientId: 'recipient-id',
            content: new Content('test-content'),
            category: 'test category'
        });

        await inMemoryNotificationRepository.create(notification);

        const cancelNotification = new CancelNotification(inMemoryNotificationRepository);

        const canceledNotification = await cancelNotification.execute({notificationId: notification.recipientId});

        expect(canceledNotification.value.canceledAt).toEqual(expect.any(Date));
    });


    it('should not be able to cancel non exist notification', async () =>{
        const inMemoryNotificationRepository = new InMemoryNotificationRepository();
        

         const cancelNotification = new CancelNotification(inMemoryNotificationRepository);
 
         expect(async () => {
            await cancelNotification.execute({notificationId: 'non-existent-id'});
         }).rejects.toThrow(NotificationNotFound);
 
     });
});