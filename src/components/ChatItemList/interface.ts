export interface IChatItem {
    id?:string,
    title?: string | '',
    last_message?:string,
    avatar?:string,
    isSelected?:boolean,
    count_unread?:number,
    created_at?: number
}