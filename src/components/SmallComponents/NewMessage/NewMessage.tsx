import { FC } from 'react';
import cl from './NewMessage.module.scss';

const NewMessage: FC = ( ) => {

   return (
      <div className={cl.container}>
         <p className={cl.text}>Новые сообщения</p>
      </div>
   )
}

export default NewMessage;