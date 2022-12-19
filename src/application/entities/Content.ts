export class Content{

    private readonly content: string;

    constructor(value: string){
        const isContentLenghtValid = this.validateContentLenght(value);
        
        if(!isContentLenghtValid){
            throw new Error('Lenght isnt valid')
        }

        this.content = value;
    }

    get value(): string {
        return this.content;
    }

    validateContentLenght(value:string): boolean{
        return value.length >= 5 && value.length <= 240
    }


}