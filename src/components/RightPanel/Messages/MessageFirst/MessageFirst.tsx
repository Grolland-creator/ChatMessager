import { FC, PropsWithChildren } from 'react';
import cl from './MessageFirst.module.scss';
import { Avatar } from '../../../Avatar/Avatar';
import { IMessageItem } from '../../../../interface/IMessage';

interface PropsMessageFirst {
   message: IMessageItem
}

const MessageFirst: FC<PropsWithChildren<PropsMessageFirst>> = ({ message, children }) => {

   return (
      <div className={cl.container}>
         {!message.user.you &&
            <div className={cl.avatar}>
               <Avatar src={message.user.avatar} size='sm' />
            </div>
         }
         <div className={cl.block}>
            {!message.user.you &&
               <div className={cl.title}>{message.user.name + ' ' + message.user.surname}</div>
            }
            {children}
         </div>
      </div>
   )
}

export default MessageFirst;