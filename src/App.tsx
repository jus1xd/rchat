import React from 'react';

import s from './app.module.css';
import Content from './app/content/content';
import Sidebar from './app/sidebar/sidebar';

const App: React.FC = (): JSX.Element => {
    return (
        <div className={s.wrapper}>
            <Sidebar />
            <Content />
        </div>
    );
}

export default App;