import {FC,useEffect, useState} from "react";
import { useAppSelector } from "../../api/features/store";
import { Header } from "../Header";
import { Input } from "../Input";
import { Message } from "../Message";
import { NewMessage } from "../NewMessage";
import { SystemMessage } from "../SystemMessage";
import './chatBlock.scss'


export const ChatBlock: FC = () => {
    const items = useAppSelector(state => state.chat)
    const header= useAppSelector(state=> state.header)
    const [msgs, setMsgs] = useState([])
    const [qttNewMsg, setQttNewMsg] = useState([])

    const itemCopy: any = [...items.chat];

   

    useEffect(() => {

    setMsgs(itemCopy?.sort((a:any,b:any) => a.created_at - b.created_at))
    setQttNewMsg(itemCopy?.filter((e:any) => e.is_new === true))
  
   

    }, [items])
    


    return (
        <div className='chat-block'>
            <Header name={header}/>
            {
                header.id ? (
                    <>
                    <SystemMessage/>

                                {
                                   msgs.length > 0 && msgs.map((item:any) => (
                                        <div key={item.id}>
                                    { 
                                        item.is_new ? <NewMessage/> : ''
                                    }
                            <Message 
                                    my={item.user.you} 
                                    avatar={item.user.avatar} 
                                    name={item.user.name} 
                                    surname={item.user.surname}
                                    main={false} created_at={item.created_at}
                                    message={item.message}  />
                                        </div>
                                    ))
                                }
                                 
                                <Input/>
                                </>
                ) : (
                     <div></div>
                )
                   
                }
           
            
        </div>
    )
}