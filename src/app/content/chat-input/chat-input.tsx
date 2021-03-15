import React from 'react';
import s from './chat.input.module.css'
import Smile from '../../../img/ChatInput/smile.svg'
import Camera from '../../../img/ChatInput/camera.svg'
import Clip from '../../../img/ChatInput/clip.svg'
import Microphone from '../../../img/ChatInput/microphone.svg'

const ChatInput: React.FC = (): JSX.Element => {
   return (
      <div className={s.chat__input}>
         <img src={Clip} alt="clip" className={s.clip} />
         {/* <input className={s.input}/> */}
         <div className={s.input} contentEditable='true'>
            <p>Введите текст сообщения...</p>
         </div>
         <div className={s.chat__input__btn}>
            <img src={Camera} alt="camera" className={s.camera} />
            <img src={Smile} alt="smile" className={s.microphone}/>
            <img src={Microphone} alt="microphone" className={s.microphone} />
         </div>
      </div>
   )
}

export default ChatInput