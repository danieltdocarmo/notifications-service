import { randomUUID } from "crypto";
import { Content } from "./Content";

export interface NotificationProps {
    recipientId: string
    content: Content
    category: string
    readAt?: Date | null
    canceledAt?: Date | null
    createdAt?: Date | null
}

export class Notification  {
    private _id: string;
    private props: NotificationProps;

    public constructor(props: NotificationProps) {
        this.props = props;
        this._id = randomUUID().toString();
        this.props.canceledAt = new Date(Date.now());
    }

    public get id(){
        return this._id;
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

    public get canceledAt(){
        return this.props.canceledAt;
    }

    public read(){
        this.props.readAt = new Date();
    }

    public unread(){
        this.props.readAt = null;
    }

    public cancel(){
        this.props.canceledAt = new Date(Date.now())
    }

    
}