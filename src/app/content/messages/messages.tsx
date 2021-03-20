import React from 'react'
import Message from './message/message'
import s from './messages.module.css'



const Messages: React.FC = ({}): JSX.Element => {
   return (
      <div className={s.messages}>
         <div className={s.messages__container}>
            <Message own={false} />
            <Message own={true} />
            
            <Message own={true} />
            <Message own={false} />
            <Message own={true} />
            <Message own={false} />
            <Message own={true} />
            <Message own={false} />
            <Message own={true} />
            <Message own={false} />
            <Message own={true} />
            <Message own={false} />
            <Message own={true} />
            <Message own={false} />
            <Message own={true} />
            <Message own={false} />
            <Message own={true} />
            <Message own={false} />
            <Message own={true} />
            <Message own={false} />
            <Message own={true} />
            <Message own={false} />
            <Message own={true} />
            <Message own={false} />
            <Message own={true} />
            <Message own={false} />
            
         </div>
      </div>
   )
}

export default Messages