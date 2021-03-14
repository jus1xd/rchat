import React from 'react'
import s from './header.module.css'

const Header: React.FC = (): JSX.Element => {
   return (
      <div className={s.header__wrapper}>
         <div className={s.header__container}>
            <div className={s.header__username}>
               Гай Юлий Цезарь
            </div>
            <div className={s.header__userstatus}>
               <div className={s.header__online}>
                  
               </div>
               <p className = {s.online}>онлайн</p> 
            </div>
         </div>
      </div>
   )
}

export default Header