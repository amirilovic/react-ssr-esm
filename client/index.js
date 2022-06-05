import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app.js';

export { App }

export function start() {
    ReactDOM.hydrate(
        React.createElement(BrowserRouter, null,
            React.createElement(App)),
        document.getElementById('root')
    );
}
