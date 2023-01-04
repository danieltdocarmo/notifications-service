import { InMemoryNotificationRepository } from "../../../test/repositories/inMemory-notification-repository";
import { Content } from "../entities/Content";
import { Notification } from "../entities/Notification";
import { NotificationNotFound } from "../erros/NotificationNotFound";
import { ReadNotification } from "./read-notification";

describe('Read Notification Test', ()=>{
    it('should be able to read a notification', async () =>{
       const inMemoryNotificationRepository = new InMemoryNotificationRepository();
       
        const newNotification = new Notification({
            recipientId: 'recipient-id',
            content: new Content('test-content'),
            category: 'test category'
        });

        await inMemoryNotificationRepository.create(newNotification);

        const readNotification = new ReadNotification(inMemoryNotificationRepository);

        const {notification} = await readNotification.execute({notificationId: newNotification.recipientId});

        expect(notification.readAt).toEqual(expect.any(Date));
    });


    it('should not be able to read non exist notification', async () =>{
        const inMemoryNotificationRepository = new InMemoryNotificationRepository();
        

         const readNotification = new ReadNotification(inMemoryNotificationRepository);
 
         expect(async () => {
            await readNotification.execute({notificationId: 'non-existent-id'});
         }).rejects.toThrow(NotificationNotFound);
 
     });
});