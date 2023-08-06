import { FC } from 'react';
import cl from './Message.module.scss';
import Time from '../../../SmallComponents/Time/Time';

interface PropsMessage {
   my: boolean,
   text: string,
   marginLeft?: boolean,
   date: string
}

const Message: FC<PropsMessage> = ({ my, text, marginLeft, date }) => {

   return (
      <div className={`${my ? cl.containerMy : cl.container} ${marginLeft && cl.marginLeft}`}>
         <div className={cl.text}>{text}</div>
         <Time My={my} date={date}/>
      </div>
   )
}

export default Message;