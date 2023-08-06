import { FC, useRef } from 'react';
import cl from './ChatItemList.module.scss';
import ChatItem from './ChatItem/ChatItem';
import { IChatItem } from '../../../interface/IChatItem';
import Loader from '../../SmallComponents/Loader/Loader';

interface PropsChatItemList {
   chatList: IChatItem[],
   setSelectedChat: Function,
   selectedChatId: string,
}

const ChatItemList: FC<PropsChatItemList> = ({ chatList, setSelectedChat, selectedChatId }) => {

   return (
      <div className={cl.container}>
         {
            chatList.map((item) =>
               <ChatItem
                  selected={item.id === selectedChatId}
                  setSelectedChat={setSelectedChat}
                  key={item.id}
                  chatItem={item}
               />
            )
         }

      </div>
   )
}

export default ChatItemList;