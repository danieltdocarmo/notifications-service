import { InMemoryNotificationRepository } from "../../../test/repositories/inMemory-notification-repository";;
import { SendNotification } from "./send-notification";

describe('Send Notification', ()=>{
    it('should be able to send a notification', async ()=>{
        const inMemoryNotificationRepository = new InMemoryNotificationRepository();
        const sendNotification = new SendNotification(inMemoryNotificationRepository);
        
        const notification = await sendNotification.execute({
            recipientId: 'recipient-id-exemple',
            content: 'A test message',
            category: 'A test message category'
        });
        
        expect(notification.value.recipientId).toEqual('recipient-id-exemple');
    
    });
});