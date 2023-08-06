import { FC } from 'react';
import cl from './RightPanel.module.scss';
import RightPanelHeader from './RightPanelHeader/RightPanelHeader';
import InputBlock from './InputBlock/InputBlock';
import Messages from './Messages/Messages';
import { IChatItem } from '../../interface/IChatItem';

interface PropsRightPanel {
   selectedChat: IChatItem
}

const RightPanel: FC<PropsRightPanel> = ({ selectedChat }) => {

   return (
      <div className={cl.container} tabIndex={2}>
         <RightPanelHeader selectedChatTitle={selectedChat?.title} />
         <Messages selectedChatId={selectedChat?.id} />
         <InputBlock />
      </div>
   )
}

export default RightPanel;