// import { FC, useState, useEffect, useRef } from 'react';
import cl from './MyTextarea.module.scss';

// interface PropsMyTextarea {
//    placeholder?: string;
// }

// const MyTextarea: FC<PropsMyTextarea> = ({ placeholder }) => {
//    const containerRef = useRef(null)
//    const [focus, setFocus] = useState<boolean>(false); 

//    useEffect(() => {
//       const handleClick = (e: any) => {
//          if (!containerRef.current) return;
//          if (!containerRef.current.contains(e.target)) {
//             setFocus(false)
//          }
//       }
//       document.addEventListener('click', handleClick)
//       return () => {
//          document.removeEventListener('click', handleClick)
//       }
//    }, [])
   

//    return (
//       <div
//          ref={containerRef}      
//          className={cl.container}
//          onClick={() => {
//             setFocus(true)
//          }}
         
//       >
//          <div className={cl.text}>{!focus && <div className={cl.placeholder}>{placeholder}</div>} {focus && <div className={cl.focusStick}></div>}</div>
//       </div>
//    )
// }

// export default MyTextarea;