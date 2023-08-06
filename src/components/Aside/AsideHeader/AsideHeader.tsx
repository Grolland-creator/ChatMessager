import { FC } from 'react';
import cl from './AsideHeader.module.scss';

const AsideHeader: FC = () => {

   return (
      <div className={cl.container}>
         <div className={cl.block}>
            <div className={cl.block__text}>All chats</div>
         </div>
      </div>
   )
}

export default AsideHeader;