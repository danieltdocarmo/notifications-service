import exp from "constants";
import { InMemoryNotificationRepository } from "../../../test/repositories/inMemory-notification-repository";
import { createNotification } from '../factorys/makeNotifications';
import { GetManyNotificationsByRecipientId } from "./get-notifications-by-recipient-id";

describe('Cout Notifications Test', ()=>{
    it('should be able to cout notification by recipient id', async () => {
        const inMemoryNotificationRepository = new InMemoryNotificationRepository();
        const coutManyNotificationByRecipientId = new GetManyNotificationsByRecipientId(inMemoryNotificationRepository);
        
        inMemoryNotificationRepository.create(createNotification({recipientId: 'recipient-id-1'}));
        inMemoryNotificationRepository.create(createNotification({recipientId: 'recipient-id-1'}));
        inMemoryNotificationRepository.create(createNotification({recipientId: 'recipient-id-2'}));

        const {notifications} = await coutManyNotificationByRecipientId.execute({ recipientId: 'recipient-id-1'});
        
        expect(notifications).toEqual(
            expect.arrayContaining([
                expect.objectContaining({recipientId: 'recipient-id-1'}),
                expect.objectContaining({recipientId: 'recipient-id-1'})
            ]));
    });
});