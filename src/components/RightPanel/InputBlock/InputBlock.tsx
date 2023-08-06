import { FC } from 'react';
import cl from './InputBlock.module.scss';

const InputBlock: FC = () => {

   return (
      <div className={cl.container}>
         <div className={cl.textareaBlock}>
            <textarea className={cl.textarea} cols={3} placeholder='Type message' />
         </div>
         <div className={cl.block}>
            <button className={cl.leftButton}>
               <img src="./img/svgIcons/Color.svg" alt="attach"/>
            </button>
            <button className={cl.rightButton}>
               <img src="./img/svgIcons/Send.svg" alt="send"/>
            </button>
         </div>
      </div>
   )
}

export default InputBlock;