import {FC} from "react";
import { Avatar } from "../Avatar";
import {IMessage} from "./interface";
import "./message.scss";
import { Time } from '../Time/index';
import dayjs from 'dayjs';

export const Message: FC<IMessage> = (props: IMessage) => {
    const { my, main,  avatar,you,created_at,name,surname,message,is_new  } = props;


    return (
        <div className='message'>
            {
                my ? (
                    <div className='outgoing-msg'>
                        <div className='outgoing-msg__body'>
                     {message}
                               <div className='msg-time'>
                                    <Time my={true}> {dayjs(created_at).format('H:mm')}</Time>
                                   </div> 
                        </div>
                       
                    </div>
                ) :(
                    <div className='incoming-msg'>
                        
                        <div className='incoming-msg__avatar'>
                            <Avatar src={avatar}/>
                        </div>
                        <div className='incoming-msg__right'>
                            <b className="incoming-msg-name">
                            {name } {surname}
                        </b>
                        <div className="incoming-msg-body">
                            {message}
                             <div className='msg-time'>
                                    <Time my={false}> {dayjs(created_at).format('H:mm')}</Time>
                                   </div> 


                        </div>
 
                            </div>
                        
                    </div>
                )
            }
           
        </div>
    )
}