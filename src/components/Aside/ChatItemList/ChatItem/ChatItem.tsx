import { FC, useState, useEffect } from 'react';
import cl from './ChatItem.module.scss';
import { Avatar } from '../../../Avatar/Avatar';
import { IChatItem } from '../../../../interface/IChatItem';
import { formatDateToMinute } from '../../../../utils/date';

interface PropsChatItem {
   chatItem: IChatItem,
   setSelectedChat: Function,
   selected: boolean
}

const ChatItem: FC<PropsChatItem> = ({ chatItem, setSelectedChat, selected }) => {
   const [mainState, setMainState] = useState('Rest')

   useEffect(() => {
      selected ? setMainState('Selected') : setMainState('Rest')
   }, [selected])

   return (
      <div
         onClick={() => {
            if (!selected) {
               setMainState('Selected')
               setSelectedChat(chatItem)
            }
         }}
         onMouseEnter={() => mainState === 'Rest' && setMainState('Hover')}
         onMouseLeave={() => mainState === 'Hover' && setMainState('Rest')}
         className={`${cl.container} ${mainState === 'Hover' && cl.container_hover} ${mainState === 'Selected' && cl.container_selected}`}
      >
         <div className={cl.image}>
            <Avatar size='md' src={chatItem.avatar} />
         </div>
         <div className={cl.blockText}>
            <div className={cl.blockText__titleBlock}>
               <h3 className={cl.blockText__title}>{chatItem.title}</h3>
               <div className={cl.blockText__time}>
                  {formatDateToMinute(chatItem.last_message.created_at)}
               </div>
            </div>
            <div className={cl.blockText__text}>
               {chatItem.last_message.message.slice(0, 70)}
               {chatItem.last_message.message.length > 70 && '...'}
            </div>
         </div>
      </div>
   )
}

export default ChatItem;