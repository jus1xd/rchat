import React from 'react';

import s from './app.module.css';
import Sidebar from './app/sidebar/sidebar';

const App: React.FC = (): JSX.Element => {
    return (
        <div className={s.wrapper}>
            <Sidebar />
        </div>
    );
}

export default App;