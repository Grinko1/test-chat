import {FC, useEffect, useRef} from "react";
import './input.scss'


export const Input: FC = (props) => {


const inputField = useRef() as React.MutableRefObject<HTMLInputElement>;

useEffect(() => {
    if(inputField.current.textContent){
        console.log(inputField.current.textContent);
    }
},[inputField])



    return (
        <div className='text-block'>
           <div className='input' ref={inputField}  placeholder='Type messsage' contentEditable ></div>
           <div className="buttons">
               <img className='buttons__icon attach' src="/icons/attach.png" alt=""/>
               <img className='buttons__icon' src="/icons/send.png" alt=""/>
           </div>
           </div>
          
 
    )
}