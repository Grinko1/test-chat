export interface IMessages {
id?:string,
created_at?:number,
title?:string,
avatar?:string,
private?:boolean,
users?: IUsers[],
count_unread?:number,
last_message: ILastMessage
}
export interface ILastMessage {
    created_at:number,
    message: string,
    user_id:number,
    user_name:string,
    user_surname:string,
    you:boolean

}
export interface IUsers {
    avatar:string,
    id:number,
    name:string,
    surname:string,
    you:boolean

}