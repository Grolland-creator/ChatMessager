import { FC } from 'react';
import cl from './Aside.module.scss';
import AsideHeader from './AsideHeader/AsideHeader';
import ChatItemList from './ChatItemList/ChatItemList';
import { IChatItem } from '../../interface/IChatItem';
import Loader from '../SmallComponents/Loader/Loader';

interface PropsAside {
   chatList: IChatItem[]
   setSelectedChat: Function,
   selectedChatId: string,
   isLoading: boolean,
   errorGetChatList?: string
}

const Aside: FC<PropsAside> = ({ chatList, setSelectedChat, selectedChatId, isLoading, errorGetChatList }) => {

   return (
      <div className={cl.container}>
         <AsideHeader />
         {chatList.length && !errorGetChatList && !isLoading &&
            <ChatItemList
               selectedChatId={selectedChatId}
               setSelectedChat={setSelectedChat}
               chatList={chatList}
            />}
         {errorGetChatList &&
            <div style={{ color: "red" }}>{errorGetChatList}</div>
         }
         {isLoading && <Loader />}
      </div>
   )
}

export default Aside;