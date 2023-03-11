import {FC, } from "react";
import { useAppDispatch, useAppSelector } from "../../api/features/store";
import { ChatItemList } from "../ChatItemList";
import './allChats.scss'
import { IMessages } from '../../interface/messages';
import { chatFetch } from '../../api/features/slices/chatSlice';
import { setHeader } from "../../api/features/slices/headerSlice";
 


export const AllChats: FC = () => {
  
 
    const items = useAppSelector((state )=> state)
    const messages = items.messages.messages

    const dispatch =  useAppDispatch()

    const getIdChat = (id:any, title:any) =>{
      dispatch(chatFetch(id))
      dispatch(setHeader({title, id}))

    }


    return (
        <div className='all-chats'>
          <h2>All chats</h2>
          <div className="chatList">
            {
             messages.map((msg:IMessages) => (
               <div key={msg.id}  onClick={() =>getIdChat(msg.id, msg.title)} >
                 <ChatItemList id={msg.id} title={msg.title} last_message={msg.last_message.message} avatar={msg.avatar} created_at={msg.created_at} count_unread={msg.count_unread} />
               </div>
             ))
            }
          </div>
        </div>
    )
}