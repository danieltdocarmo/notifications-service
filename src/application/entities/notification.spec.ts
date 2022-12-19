import { Content } from "./Content";
import { Notification } from "./Notification";

describe('Notification', ()=>{
    it('should be able to create a valid notification', ()=>{
        const notification = new Notification({
            recipientId: 'id',
            content: new Content('content'),
            category: 'category',
            createdAt: new Date()
        });
    expect(notification).toBeTruthy();
    });
}); 