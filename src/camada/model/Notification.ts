import { Content } from "./Content"

export interface Props {
    recipientId: string
    content: Content
    category: string
    readAt?: Date | null
    createdAt: Date
}

export class Notification  {
    
   private props: Props;

    public constructor(props: Props) {
        this.props = props;
    }

    public get readAt(){
        return this.props.readAt;
    }

    public get recipientId(){
        return this.props.recipientId;
    }

    public get content(){
        return this.props.content;
    }

    public get category(){
        return this.props.category;
    }

    public get createdAt(){
        return this.props.createdAt;
    }

    public set content(content: Content){
        this.props.content = content;
    }

    public set category(category: string){
        this.props.category = category;
    }

    public set readAt(readAt: Date){
        this.props.readAt = readAt;
    }
}