import { InMemoryNotificationRepository } from "../../../test/repositories/inMemory-notification-repository";
import { Content } from "../entities/Content";
import { Notification } from "../entities/Notification";
import { NotificationNotFound } from "../erros/NotificationNotFound";
import { ReadNotification } from "./read-notification";
import { UnreadNotification } from "./unread-notification";

describe('Unread Notification Test', ()=>{
    it('should be able to unread a notification', async () =>{
       const inMemoryNotificationRepository = new InMemoryNotificationRepository();
       
        const newNotification = new Notification({
            recipientId: 'recipient-id',
            content: new Content('test-content'),
            category: 'test category',
            readAt: new Date()
        });

        await inMemoryNotificationRepository.create(newNotification);

        const unreadNotification = new UnreadNotification(inMemoryNotificationRepository);

        const {notification} = await unreadNotification.execute({notificationId: newNotification.recipientId});

        expect(notification.readAt).toEqual(null);
    });


    it('should not be able to unread non exist notification', async () =>{
        const inMemoryNotificationRepository = new InMemoryNotificationRepository();
        

         const readNotification = new ReadNotification(inMemoryNotificationRepository);
 
         expect(async () => {
            await readNotification.execute({notificationId: 'non-existent-id'});
         }).rejects.toThrow(NotificationNotFound);
 
     });
});