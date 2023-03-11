import {FC} from "react";
import { useAppSelector } from "../../api/features/store";
import { Avatar } from "../Avatar";
import './chatItem.scss'
import { IChatItem } from "./interface";
import dayjs from 'dayjs';

export const ChatItemList: FC<IChatItem> = (props: IChatItem) => {
    const { title, last_message, avatar, isSelected , id  ,count_unread, created_at} = props;

   const selected = useAppSelector(state=>state.header.id)
   const newMsg = count_unread && count_unread > 0 ? 'newMsg' : ''
   

    return (
        <>

        <div className={id === selected ? 'chat-item selected' :`chat-item ${newMsg}`  }>
           <Avatar src={avatar}/>
           <div className='chat-item__body'>
           <div className='chatBody-head'><span>{title}</span> <time className='text-grey'>{dayjs(created_at).format('H:mm')}</time></div> 
           <span className='chatBody-msg'>
               {last_message}
               </span>
           </div>
          
        </div>
        </>
    )
}