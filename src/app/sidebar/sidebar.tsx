import React from 'react';
import s from './sidebar.module.css';

import friends from '../../img/sidebar/friends.svg'
import edit from '../../img/sidebar/edit.svg'
import search from '../../img/sidebar/search.svg'
import Dialog from './dialog/dialog';


const Sidebar: React.FC = (): JSX.Element => {
    return (
        <div className={s.sidebar}>
            <div className={s.sidebar__header}>
                <div className={s.header__leftside}>
                    <img src={friends} alt=""/>
                    <div className={s.header__title}>Список диалогов</div>
                </div>
                <div className={s.header__rightside}>
                    <img src={edit} alt=""/>
                </div>
            </div>
            <div className={s.sidebar__content}>
                <div className={s.input__inner}>
                    <img src={search} alt=""/>
                    <input className={s.main__input} placeholder='Поиск среди компонентов' type="text"/>
                </div>
                <div className={s.dialogs}>
                    <Dialog />
                </div>  
            </div>
        </div>
    );
}

export default Sidebar;