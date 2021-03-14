import React from 'react';
import s from './chat.input.module.css'
import Smile from '../../img/ChatInput/smile.svg'
import Camera from '../../img/ChatInput/camera.svg'
import Clip from '../../img/ChatInput/clip.svg'
import Microphone from '../../img/ChatInput/microphone.svg'

const ChatInput: React.FC = (): JSX.Element => {
   return (
      <div className={s.chat__input}>
         <a href="/#"><img src={Clip} alt="clip" className={s.clip} /></a>
         <input placeholder='Введите текст сообщения...' className={s.input} type="text" />
         <div className={s.chat__input__btn}>
            <a href="/#"><img src={Camera} alt="camera" className={s.camera} /></a>
            <a href="/#"><img src={Smile} alt="smile" className={s.microphone} /></a>
            <a href="/#"> <img src={Microphone} alt="microphone" className={s.microphone} /></a>
         </div>
      </div>
   )
}

export default ChatInput