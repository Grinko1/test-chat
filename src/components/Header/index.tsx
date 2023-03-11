import React, {FC} from "react";
import './header.scss'
import { IHeader } from "./interface";

export const Header: FC<IHeader> = (props:IHeader) => {
    const {name} = props

    return (
        <div className='header'>
            <img className='header__icon' src="/icons/message.png" alt=""/>
            {
                name.name ? (<h2>{name.name}</h2> ):( <h2>Open a chat</h2>)
            }
            
         
        </div>
    )
}