import React from 'react';
import s from './message.module.css';

type TOwnProps = {own?: boolean}


const Message: React.FC<TOwnProps> = ({own}): JSX.Element => {

    return (
        <div className={own ? s.message__wrapper : `${s.message__wrapper} ${s.own}`}>
            <div className={s.message__author}/>
            <div className={s.message__inner}>
                <div className={s.message__content}>
                Кек. Ты то меня никогда не предашь
                </div>
                <div className={s.message__date}>
                    Вчера, в 12:30
                </div>
            </div>
        </div>
    );
}

export default Message;
