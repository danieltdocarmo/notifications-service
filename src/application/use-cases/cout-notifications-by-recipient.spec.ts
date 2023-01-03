import { InMemoryNotificationRepository } from "../../../test/repositories/inMemory-notification-repository";
import { createNotification } from '../factorys/makeNotifications';
import { CoutNotificationByRecipientId } from "./cout-notifications-by-recipient";

describe('Cout Notifications Test', ()=>{
    it('should be able to cout notification by recipient id', async () => {
        const inMemoryNotificationRepository = new InMemoryNotificationRepository();
        const coutManyNotificationByRecipientId = new CoutNotificationByRecipientId(inMemoryNotificationRepository);
        
        inMemoryNotificationRepository.create(createNotification({recipientId: 'recipient-id-1'}));
        inMemoryNotificationRepository.create(createNotification({recipientId: 'recipient-id-1'}));
        inMemoryNotificationRepository.create(createNotification({recipientId: 'recipient-id-2'}));

        const cout = await coutManyNotificationByRecipientId.execute({ recipientId: 'recipient-id-1'});

        expect(cout.value).toEqual(2);
    });
});