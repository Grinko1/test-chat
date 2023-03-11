import {FC} from "react";
import {ITime} from "./interface";
import "./time.scss";

export const Time: FC<ITime> = (props: ITime) => {
    const { my, children } = props;

    return (
        <div className='time-component'>
            {children} {my ? <img className='time-component__icon' src='/icons/read.png'/>: '' }
        </div>
    )
}