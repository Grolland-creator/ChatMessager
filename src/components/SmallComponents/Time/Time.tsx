import { FC } from 'react';
import cl from './Time.module.scss';

interface PropsTime {
   My?: boolean,
   date: string
}

const Time: FC<PropsTime> = ( { My = false, date } ) => {

   return (
      <div className={cl.container}>
         <div className={cl.text}>{date}</div>
         {My && <img src="./img/svgIcons/ReadMessageBody.svg" alt=""/>}
      </div>
   )
}

export default Time;