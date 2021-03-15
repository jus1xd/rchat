import React from 'react';
import ChatInput from './chat-input/chat-input';

import Header from './header/header';
import Messages from './messages/messages';

import s from './content.module.css'


const Content: React.FC = (): JSX.Element => {
   return (
      <div className={s.content}>
         <Header />
         <Messages />
         <ChatInput />
      </div>

   )
}


export default Content