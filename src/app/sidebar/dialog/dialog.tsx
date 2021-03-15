import React from 'react';

import s from './dialog.module.css';

type TOwnProps = {id?: number}

const Dialog: React.FC<TOwnProps> = ({id}): JSX.Element => {
    return (
        <div className={s.dialog}>
            <div className={s.dialog__avatar}>
                <div className={s.online}></div>
            </div>
            <div className={s.dialog__content}>
                <div className={s.high__level}>
                    <div className={s.text__name}>What1slov3</div>
                    <div className={s.message__date}>11:59</div>
                </div>
                <div className={s.low__level}>
                    <div className={s.text__message}>марафоним данилу?</div>
                    <div className={s.message__counter}>
                        <div>3</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialog; 