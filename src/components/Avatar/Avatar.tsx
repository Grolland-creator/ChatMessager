import { FC } from "react";
import cl from './Avatar.module.scss';

export interface PropsAvatar {
   src?: string,
   size?: "md" | "sm"
}

export const Avatar: FC<PropsAvatar> = ({ src, size = 'sm' }) => {

   return (
      <div className={`${cl.avatar} ${cl[`avatar__${size}`]}`}>
         <img src={src || '../img/defaultImage.jpg'} alt="avatar" />
      </div>
   )
}