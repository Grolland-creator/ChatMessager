import { FC } from 'react';
import cl from './RightPanelHeader.module.scss';

interface PropsRightPanelHeader {
   selectedChatTitle: string
}

const RightPanelHeader: FC<PropsRightPanelHeader> = ({ selectedChatTitle }) => {

   return (
      <div className={cl.container}>
         <div className={cl.block}>
            <img className={cl.block__image} src="./img/svgIcons/Shape.svg" alt="" />
            <div className={cl.block__text}>{selectedChatTitle}</div>
         </div>
      </div>
   )
}

export default RightPanelHeader;