import { FC, useRef, useState, useEffect } from 'react';
import cl from './GreatProjectPage.module.scss';
import Aside from '../../components/Aside/Aside';
import RightPanel from '../../components/RightPanel/RightPanel';
import { IChatItem } from '../../interface/IChatItem';
import ChatService from '../../api/ChatService';


interface PropsGreatProjectPage {
   isCorrectWidth?: boolean,
}

const GreatProjectPage: FC<PropsGreatProjectPage> = ({ isCorrectWidth = true }) => {
   const [chatList, setChatList] = useState<IChatItem[]>({} as IChatItem[])
   const [selectedChat, setSelectedChat] = useState<IChatItem>({} as IChatItem)
   const [errorGetChatList, setErrorGetChatList] = useState<string>('');
   const [isLoading, setIsLoading] = useState<boolean>(false);

   useEffect(() => {
      const getChatList = async () => {
         try {
            setIsLoading(true)
            const response = await ChatService.getChatList(1000)
            setChatList(response.data.response)
            setSelectedChat(response.data.response[0])
            setIsLoading(false)
         } catch (e) {
            setErrorGetChatList(`Произошла ошибка при получении списка чатов: ${e}`)
            setIsLoading(false)
         }
      }
      getChatList()
   }, [])

   return (
      isCorrectWidth
         ?
         <div className={cl.container}>
            {!errorGetChatList &&
               <Aside
                  setSelectedChat={setSelectedChat}
                  selectedChatId={selectedChat?.id}
                  chatList={chatList}
                  isLoading={isLoading}
                  errorGetChatList={errorGetChatList}
               />
            }
            <RightPanel selectedChat={selectedChat} />
         </div>
         :
         <div className={cl.notCorrect}>
            <div className={cl.notCorrect__text}>
               ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ У НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ
            </div>
         </div>
   )
}

export default GreatProjectPage;