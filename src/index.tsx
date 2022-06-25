import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Global} from './styles/App';

ReactDOM.render(
    <>
        <Global/>
        <App />
    </>,
        document.getElementById('root')
);
