import { Content } from "./Content";

describe('Notification Content', () => {
    it('should be able to create a valid content', () => {
        const content = new Content('Hello world');

        expect(content).toBeTruthy();
    });

    it('should not be able to create a invalid content with less then 5 characters', () => {
    
        expect(()=>{new Content('Hell')}).toThrowError();
    });

    it('should not be able to create a invalid content with more then 240 characters', () => {
        const content = 'e';
        expect(()=>{new Content(content.repeat(241))}).toThrowError();
    });


});