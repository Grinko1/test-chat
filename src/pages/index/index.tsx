import React, {FC} from "react";
import './main.scss'
import {IPage} from "../../interface/page";
import { AllChats } from '../../components/AllChats/index';
import { ChatBlock } from '../../components/ChatBlock/index';

export const PageIndex: FC<IPage> = (props: IPage) => {




    return (
        <>
        <div className='main'>
        <div className='main__sidebar'>
              <AllChats/>
        </div>
        <div className="main__chat-block">
            <ChatBlock/>
        </div>
         
        </div>
        <div className="attention">
            <p>ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ <br/> ТЕЛЕФОНОВ <br/> У НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ</p>
            
        </div>
        </>
    )
}