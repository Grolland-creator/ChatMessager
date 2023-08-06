import { FC } from 'react';
import cl from './SystemMessage.module.scss';

interface PropsSystemMessage {
   date: string
}

const SystemMessage: FC<PropsSystemMessage> = ( { date } ) => {

   return (
      <div className={cl.container}>
         <div className={cl.text}>{date}</div>
      </div>
   )
}

export default SystemMessage;