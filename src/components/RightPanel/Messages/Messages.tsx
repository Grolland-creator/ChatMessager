import { FC, useEffect, useState, Fragment, useRef, useCallback } from 'react';
import cl from './Messages.module.scss';
import MessageService from '../../../api/MessageService';
import { IMessageItem } from '../../../interface/IMessage';
import Message from './Message/Message';
import { formatDateToDay, formatDateToMinute } from '../../../utils/date';
import SystemMessage from '../../SmallComponents/SystemMessage/SystemMessage';
import MessageFirst from './MessageFirst/MessageFirst';
import NewMessage from '../../SmallComponents/NewMessage/NewMessage';
import Loader from '../../SmallComponents/Loader/Loader';


interface PropsMessages {
   selectedChatId: string
}


const Messages: FC<PropsMessages> = ({ selectedChatId }) => {
   const containerRef = useRef<HTMLDivElement>(null)
   const [messageList, setMessageList] = useState<IMessageItem[]>({} as IMessageItem[])
   const [errorGetMessageList, setErrorGetMessageList] = useState<string>('');
   const [isLoading, setIsLoading] = useState<boolean>(false);

   // Large function for displaying messages
   const messageMap = useCallback(() => {
      let dateNow = ''
      let userIdNow = ''
      let newMessage = false
      const messages = [...messageList]
      return messages.reverse().map((item) => {
         let systemMessage: any = ''
         let user: any = ''
         let newMessageComp: any = ''
         if (formatDateToDay(item.created_at) !== dateNow) {
            systemMessage = <SystemMessage date={formatDateToDay(item.created_at)} />
            dateNow = formatDateToDay(item.created_at)
         }
         if (userIdNow !== item.user.id || item.user.you) {
            user =
               <MessageFirst message={item}>
                  <Message date={formatDateToMinute(item.created_at)} my={item.user.you} text={item.message} />
               </MessageFirst>
            userIdNow = item.user.id
         }
         if (item.is_new && !newMessage) {
            newMessageComp = <NewMessage />
            newMessage = true
         }
         return <Fragment key={item.id}>
            {systemMessage && systemMessage}
            {newMessageComp && newMessageComp}
            {user ? user : <Message date={formatDateToMinute(item.created_at)} marginLeft my={item.user.you} text={item.message} />}
         </Fragment>
      })
   }, [messageList])

   useEffect(() => {
      const getMessageList = async () => {
         try {
            setIsLoading(true)
            const response = await MessageService.getMessageListByChatId(selectedChatId, 100)
            setMessageList([...response.data.response])

         } catch (e) {
            setErrorGetMessageList(`An error occurred when receiving a list of messages: ${e}`)
         } finally {
            setIsLoading(false)
            containerRef.current?.scrollTo(0, 10000)
         }
      }
      selectedChatId &&
         getMessageList()
   }, [selectedChatId])

   useEffect(() => {
      containerRef.current?.scrollTo(0, 10000)
   }, [containerRef, messageList])

   return (
      <div ref={containerRef} className={cl.container}>
         {messageList.length && !errorGetMessageList &&
            messageMap()
         }
         {isLoading &&
            <div className={cl.loader}><Loader /></div>
         }
         {errorGetMessageList &&
            <div>{errorGetMessageList}</div>
         }
      </div>
   )
}

export default Messages;